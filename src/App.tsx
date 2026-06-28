import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Icon } from './Icons'
import { questions, type OptionKey, type Question } from './data/questions'
import {
  loadStudyState,
  saveStudyState,
  type StudyState,
} from './storage'

type View = 'practice' | 'favorites' | 'mistakes'
type ViewIndices = Record<View, number>

const viewCopy: Record<
  View,
  { title: string; kicker: string; description: string }
> = {
  practice: {
    title: '开始一轮扎实的复习',
    kicker: 'Question Practice',
    description: '选择答案后立即查看结果与逐项解析。',
  },
  favorites: {
    title: '把重要的题再看一遍',
    kicker: 'Saved Questions',
    description: '收藏会一直保留，直到你主动移除。',
  },
  mistakes: {
    title: '和容易出错的地方重逢',
    kicker: 'Mistake Review',
    description: '答对不会自动清除，确认掌握后再移出。',
  },
}

function uniqueAdd(values: string[], value: string) {
  return values.includes(value) ? values : [...values, value]
}

function QuestionCard({
  question,
  selected,
  isFavorite,
  wrongCount,
  view,
  onAnswer,
  onToggleFavorite,
  onRemoveMistake,
  onRetry,
}: {
  question: Question
  selected?: OptionKey
  isFavorite: boolean
  wrongCount: number
  view: View
  onAnswer: (answer: OptionKey) => void
  onToggleFavorite: () => void
  onRemoveMistake: () => void
  onRetry: () => void
}) {
  const revealed = Boolean(selected)
  const isCorrect = selected === question.answer

  return (
    <article className="question-card">
      <div className="question-card__header">
        <div className="question-identity">
          <span className="question-number">
            {question.id.replace('q', 'Q.')}
          </span>
          <span className="topic-chip">{question.topic}</span>
        </div>
        <div className="question-actions">
          {wrongCount > 0 && (
            <span className="wrong-count">累计错 {wrongCount} 次</span>
          )}
          {view === 'mistakes' && (
            <button
              className="icon-text-button remove-button"
              type="button"
              onClick={onRemoveMistake}
            >
              <Icon name="x" size={17} />
              移出错题本
            </button>
          )}
          <button
            className={`favorite-button ${isFavorite ? 'is-active' : ''}`}
            type="button"
            onClick={onToggleFavorite}
            aria-label={isFavorite ? '取消收藏' : '收藏本题'}
            aria-pressed={isFavorite}
            title={isFavorite ? '取消收藏' : '收藏本题'}
          >
            <Icon name="bookmark" size={21} />
          </button>
        </div>
      </div>

      <h2 className="question-stem">{question.stem}</h2>

      <div className="options" aria-label="题目选项">
        {question.options.map((option) => {
          const isSelected = selected === option.key
          const isAnswer = revealed && option.key === question.answer
          const isWrongChoice = revealed && isSelected && !isCorrect
          const classNames = [
            'option-button',
            isAnswer ? 'is-correct' : '',
            isWrongChoice ? 'is-wrong' : '',
            revealed && !isAnswer && !isWrongChoice ? 'is-muted' : '',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <button
              key={option.key}
              type="button"
              className={classNames}
              onClick={() => onAnswer(option.key)}
              disabled={revealed}
              aria-pressed={isSelected}
            >
              <span className="option-key">{option.key}</span>
              <span className="option-text">{option.text}</span>
              {isAnswer && <span className="option-mark">✓</span>}
              {isWrongChoice && <span className="option-mark">×</span>}
            </button>
          )
        })}
      </div>

      {revealed && (
        <div className="answer-section" aria-live="polite">
          <div
            className={`result-banner ${
              isCorrect ? 'result-correct' : 'result-wrong'
            }`}
          >
            <div className="result-symbol">{isCorrect ? '✓' : '!'}</div>
            <div>
              <strong>{isCorrect ? '回答正确' : '这次没有选对'}</strong>
              <p>
                {isCorrect
                  ? '判断很稳，继续保持这个节奏。'
                  : `正确答案是 ${question.answer}，对照解析找出判断岔开的地方。`}
              </p>
            </div>
            <button className="retry-button" type="button" onClick={onRetry}>
              <Icon name="refresh" size={17} />
              再答一次
            </button>
          </div>

          <section className="explanations" aria-label="答案解析">
            <div className="explanations__heading">
              <span>ANALYSIS</span>
              <h3>逐项解析</h3>
            </div>
            <div className="explanation-list">
              {question.options.map((option) => (
                <div
                  className={`explanation-row ${
                    option.key === question.answer ? 'is-answer' : ''
                  }`}
                  key={option.key}
                >
                  <span className="explanation-key">{option.key}</span>
                  <p>{question.explanations[option.key]}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </article>
  )
}

function App() {
  const [view, setView] = useState<View>('practice')
  const [studyState, setStudyState] = useState<StudyState>(loadStudyState)
  const [attempts, setAttempts] = useState<
    Partial<Record<string, OptionKey>>
  >({})
  const [indices, setIndices] = useState<ViewIndices>({
    practice: 0,
    favorites: 0,
    mistakes: 0,
  })

  useEffect(() => {
    saveStudyState(studyState)
  }, [studyState])

  const favoriteSet = useMemo(
    () => new Set(studyState.favorites),
    [studyState.favorites],
  )
  const mistakeSet = useMemo(
    () => new Set(studyState.mistakeIds),
    [studyState.mistakeIds],
  )

  const queue = useMemo(() => {
    if (view === 'favorites') {
      return questions.filter((question) => favoriteSet.has(question.id))
    }
    if (view === 'mistakes') {
      return questions.filter((question) => mistakeSet.has(question.id))
    }
    return questions
  }, [favoriteSet, mistakeSet, view])

  const safeIndex =
    queue.length === 0 ? 0 : Math.min(indices[view], queue.length - 1)
  const currentQuestion = queue[safeIndex]
  const copy = viewCopy[view]
  const practicedCount = studyState.answeredIds.length
  const practicedPercent = Math.round((practicedCount / questions.length) * 100)

  const selectView = (nextView: View) => {
    setView(nextView)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const moveQuestion = (direction: -1 | 1) => {
    setIndices((current) => ({
      ...current,
      [view]: Math.min(
        Math.max(safeIndex + direction, 0),
        Math.max(queue.length - 1, 0),
      ),
    }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const answerQuestion = (answer: OptionKey) => {
    if (!currentQuestion || attempts[currentQuestion.id]) return

    setAttempts((current) => ({
      ...current,
      [currentQuestion.id]: answer,
    }))

    setStudyState((current) => {
      const isWrong = answer !== currentQuestion.answer
      return {
        ...current,
        answeredIds: uniqueAdd(current.answeredIds, currentQuestion.id),
        mistakeIds: isWrong
          ? uniqueAdd(current.mistakeIds, currentQuestion.id)
          : current.mistakeIds,
        wrongCounts: isWrong
          ? {
              ...current.wrongCounts,
              [currentQuestion.id]:
                (current.wrongCounts[currentQuestion.id] ?? 0) + 1,
            }
          : current.wrongCounts,
      }
    })
  }

  const toggleFavorite = () => {
    if (!currentQuestion) return
    setStudyState((current) => ({
      ...current,
      favorites: current.favorites.includes(currentQuestion.id)
        ? current.favorites.filter((id) => id !== currentQuestion.id)
        : [...current.favorites, currentQuestion.id],
    }))
  }

  const removeMistake = () => {
    if (!currentQuestion) return
    setStudyState((current) => ({
      ...current,
      mistakeIds: current.mistakeIds.filter(
        (id) => id !== currentQuestion.id,
      ),
    }))
  }

  const retryQuestion = () => {
    if (!currentQuestion) return
    setAttempts((current) => {
      const next = { ...current }
      delete next[currentQuestion.id]
      return next
    })
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
          <div>
            <span className="brand-code">BMB / 59</span>
            <strong>生化分子题库</strong>
          </div>
        </div>

        <nav className="main-nav" aria-label="题库功能">
          <button
            type="button"
            className={view === 'practice' ? 'is-active' : ''}
            onClick={() => selectView('practice')}
          >
            <Icon name="book" />
            <span>刷题</span>
            <small>{questions.length}</small>
          </button>
          <button
            type="button"
            className={view === 'favorites' ? 'is-active' : ''}
            onClick={() => selectView('favorites')}
          >
            <Icon name="bookmark" />
            <span>收藏夹</span>
            <small>{studyState.favorites.length}</small>
          </button>
          <button
            type="button"
            className={view === 'mistakes' ? 'is-active' : ''}
            onClick={() => selectView('mistakes')}
          >
            <Icon name="alert" />
            <span>错题本</span>
            <small>{studyState.mistakeIds.length}</small>
          </button>
        </nav>

        <section className="study-progress" aria-label="复习进度">
          <div className="study-progress__top">
            <div>
              <span>本轮进度</span>
              <strong>{practicedPercent}%</strong>
            </div>
            <span className="progress-fraction">
              {practicedCount}/{questions.length}
            </span>
          </div>
          <div className="progress-track">
            <span style={{ width: `${practicedPercent}%` }} />
          </div>
          <p>已作答题目会保存在当前浏览器中。</p>
        </section>

        <div className="sidebar-note">
          <span>期末复习自用</span>
          <p>Biochemistry &amp;<br />Molecular Biology</p>
        </div>
      </aside>

      <main className="main-panel">
        <header className="page-header">
          <div>
            <span className="eyebrow">{copy.kicker}</span>
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
          </div>
          <div className="specimen-label" aria-label="题库总数">
            <span>QUESTION BANK</span>
            <strong>59</strong>
            <small>ITEMS</small>
          </div>
        </header>

        {currentQuestion ? (
          <>
            <div className="queue-toolbar">
              <div className="queue-progress">
                <span>
                  {String(safeIndex + 1).padStart(2, '0')} /{' '}
                  {String(queue.length).padStart(2, '0')}
                </span>
                <div className="queue-track">
                  <i
                    style={{
                      width: `${((safeIndex + 1) / queue.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <span className="queue-hint">
                {view === 'practice'
                  ? '按原题库顺序'
                  : `当前共 ${queue.length} 道`}
              </span>
            </div>

            <div className="question-stage">
              <button
                className="side-pagination side-pagination--previous"
                type="button"
                onClick={() => moveQuestion(-1)}
                disabled={safeIndex === 0}
                aria-label="上一题"
                title="上一题"
              >
                <Icon name="chevron-left" />
              </button>

              <QuestionCard
                question={currentQuestion}
                selected={attempts[currentQuestion.id]}
                isFavorite={favoriteSet.has(currentQuestion.id)}
                wrongCount={studyState.wrongCounts[currentQuestion.id] ?? 0}
                view={view}
                onAnswer={answerQuestion}
                onToggleFavorite={toggleFavorite}
                onRemoveMistake={removeMistake}
                onRetry={retryQuestion}
              />

              <button
                className="side-pagination side-pagination--next"
                type="button"
                onClick={() => moveQuestion(1)}
                disabled={safeIndex === queue.length - 1}
                aria-label="下一题"
                title="下一题"
              >
                <Icon name="chevron-right" />
              </button>
            </div>
          </>
        ) : (
          <section className="empty-state">
            <div className="empty-orbit" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span>{view === 'favorites' ? 'NO SAVED ITEMS' : 'ALL CLEAR'}</span>
            <h2>
              {view === 'favorites' ? '收藏夹还是空的' : '错题本还是空的'}
            </h2>
            <p>
              {view === 'favorites'
                ? '刷题时点亮书签，值得回看的题目会出现在这里。'
                : '答错的题目会自动加入这里，并记录累计错误次数。'}
            </p>
            <button type="button" onClick={() => selectView('practice')}>
              去刷题
              <Icon name="chevron-right" />
            </button>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
