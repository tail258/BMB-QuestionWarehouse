import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..')
const sourcePath = process.argv[2]

if (!sourcePath) {
  throw new Error('请提供题库 Markdown 文件路径。')
}

const source = await readFile(sourcePath, 'utf8')
const blocks = source
  .replace(/\r\n/g, '\n')
  .split(/(?=^\[)/m)
  .map((block) => block.trim())
  .filter((block) => block.startsWith('['))

const clean = (value) => value.replace(/\s{2,}$/g, '').trim()

const questions = blocks.map((block, index) => {
  const lines = block.split('\n').map(clean)
  const heading = lines[0].match(/^\[([^\]]+)\]\s*(.*)$/)

  if (!heading) {
    throw new Error(`第 ${index + 1} 道题缺少“[分类]题干”结构。`)
  }

  const answerLineIndex = lines.findIndex((line) =>
    /^正确答案(?:[:：]\s*[A-E])?\s*$/.test(line),
  )

  if (answerLineIndex < 0) {
    throw new Error(`第 ${index + 1} 道题缺少正确答案。`)
  }

  const stem =
    heading[2] ||
    lines
      .slice(1, answerLineIndex)
      .find(
        (line) =>
          line &&
          line !== '选项' &&
          !/^[A-E][.、]\s*/.test(line),
      )

  if (!stem) {
    throw new Error(`第 ${index + 1} 道题缺少题干。`)
  }

  const inlineAnswer = lines[answerLineIndex].match(
    /^正确答案[:：]\s*([A-E])\s*$/,
  )?.[1]
  const answer = inlineAnswer ?? lines.slice(answerLineIndex + 1).find(Boolean)

  if (!answer || !/^[A-E]$/.test(answer)) {
    throw new Error(`第 ${index + 1} 道题的正确答案无法识别。`)
  }

  const options = lines
    .slice(1, answerLineIndex)
    .map((line) => line.match(/^([A-E])[.、]\s*(.+)$/))
    .filter(Boolean)
    .map((match) => ({
      key: match[1],
      text: match[2],
    }))

  const analysisStart = inlineAnswer ? answerLineIndex + 1 : answerLineIndex + 2
  const explanations = Object.fromEntries(
    lines
      .slice(analysisStart)
      .map((line) =>
        line.match(/^([A-E](?:\/[A-E])*)(?:[：:.、]\s*|\s+)(.+)$/),
      )
      .filter(Boolean)
      .flatMap((match) =>
        match[1].split('/').map((key) => [key, match[2]]),
      ),
  )

  if (options.length < 4 || options.length > 5) {
    throw new Error(
      `第 ${index + 1} 道题识别出 ${options.length} 个选项，预期为 4 或 5 个。`,
    )
  }

  if (!options.some((option) => option.key === answer)) {
    throw new Error(`第 ${index + 1} 道题的正确答案不在选项中。`)
  }

  const missingExplanations = options.filter(
    (option) => !explanations[option.key],
  )
  if (missingExplanations.length > 0) {
    throw new Error(
      `第 ${index + 1} 道题缺少 ${missingExplanations
        .map((option) => option.key)
        .join('、')} 选项解析。`,
    )
  }

  return {
    id: `q${String(index + 1).padStart(3, '0')}`,
    topic: heading[1],
    stem,
    options,
    answer,
    explanations,
  }
})

if (questions.length !== 59) {
  throw new Error(`识别到 ${questions.length} 道题，预期为 59 道。`)
}

const destination = resolve(projectRoot, 'src/data/questions.ts')
const output = `// 此文件由 scripts/generate-questions.mjs 从题库 Markdown 生成。
export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E'

export interface Question {
  id: string
  topic: string
  stem: string
  options: Array<{ key: OptionKey; text: string }>
  answer: OptionKey
  explanations: Partial<Record<OptionKey, string>>
}

export const questions = ${JSON.stringify(questions, null, 2)} as Question[]
`

await mkdir(dirname(destination), { recursive: true })
await writeFile(destination, output, 'utf8')

console.log(`已生成 ${questions.length} 道题：${destination}`)
