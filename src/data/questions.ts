// 此文件由 scripts/generate-questions.mjs 从题库 Markdown 生成。
export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E'

export interface Question {
  id: string
  topic: string
  stem: string
  options: Array<{ key: OptionKey; text: string }>
  answer: OptionKey
  explanations: Partial<Record<OptionKey, string>>
}

export const questions = [
  {
    "id": "q001",
    "topic": "基因重组与分子生物学技术",
    "stem": "自然界基因转移伴发重组，哪种形式是最基本的DNA重组方式( )",
    "options": [
      {
        "key": "A",
        "text": "位点特异的重组"
      },
      {
        "key": "B",
        "text": "同源重组"
      },
      {
        "key": "C",
        "text": "转座重组"
      },
      {
        "key": "D",
        "text": "位点非特异性重组"
      },
      {
        "key": "E",
        "text": "转移重组"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "位点特异性重组依赖特定识别序列，不是最基础形式",
      "B": "同源重组是最基本、最普遍的DNA重组方式",
      "C": "转座重组依赖转座子机制，属于特殊机制",
      "D": "概念表述不规范，不作为基础类型",
      "E": "转移重组不是标准分类术语"
    }
  },
  {
    "id": "q002",
    "topic": "基因工程与重组DNA技术",
    "stem": "两个DNA序列的特异位点间发生的整合称位点特异的重组，依赖哪种酶完成( )",
    "options": [
      {
        "key": "A",
        "text": "重组酶"
      },
      {
        "key": "B",
        "text": "逆转录酶"
      },
      {
        "key": "C",
        "text": "限制性核酸内切酶"
      },
      {
        "key": "D",
        "text": "DNA连接酶"
      },
      {
        "key": "E",
        "text": "末端转移酶"
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "重组酶（recombinase）介导位点特异性重组",
      "B": "逆转录酶用于RNA→DNA",
      "C": "限制酶用于切割DNA",
      "D": "连接酶用于连接DNA末端",
      "E": "末端转移酶用于加尾反应"
    }
  },
  {
    "id": "q003",
    "topic": "原核生物遗传学",
    "stem": "下列哪个不是原核细胞进行基因转移的方式( )",
    "options": [
      {
        "key": "A",
        "text": "转化"
      },
      {
        "key": "B",
        "text": "结合"
      },
      {
        "key": "C",
        "text": "转导"
      },
      {
        "key": "D",
        "text": "整合"
      },
      {
        "key": "E",
        "text": "特异性转导"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "转化是外源DNA摄取",
      "B": "结合是质粒接合转移",
      "C": "转导由噬菌体介导",
      "D": "整合是DNA进入基因组后的结果，不是转移方式",
      "E": "特异性转导是噬菌体介导的转导类型"
    }
  },
  {
    "id": "q004",
    "topic": "分子生物学工具酶",
    "stem": "限制性核酸内切酶切割DNA后产生( )",
    "options": [
      {
        "key": "A",
        "text": "5′磷酸基和3′羟基末端"
      },
      {
        "key": "B",
        "text": "3′磷酸基和5′羟基末端"
      },
      {
        "key": "C",
        "text": "5′磷酸基和3′磷酸基末端"
      },
      {
        "key": "D",
        "text": "5′羟基和3′羟基末端"
      },
      {
        "key": "E",
        "text": "5′磷酸基和2′羟基末端"
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "限制性内切酶切割后标准产物为5′-P和3′-OH",
      "B": "方向错误",
      "C": "不可能同时为磷酸基",
      "D": "不符合酶切化学本质",
      "E": "RNA相关错误结构"
    }
  },
  {
    "id": "q005",
    "topic": "基因工程概论",
    "stem": "关于基因工程的叙述，错误的是( )",
    "options": [
      {
        "key": "A",
        "text": "也称重组DNA技术"
      },
      {
        "key": "B",
        "text": "属于生物技术工程"
      },
      {
        "key": "C",
        "text": "需要目的基因"
      },
      {
        "key": "D",
        "text": "只有质粒DNA能被用作载体"
      },
      {
        "key": "E",
        "text": "需要筛选"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "正确，基因工程即重组DNA技术",
      "B": "属于现代生物技术",
      "C": "必须有目的基因",
      "D": "错误，噬菌体、病毒等也可作为载体",
      "E": "需要筛选重组子"
    }
  },
  {
    "id": "q006",
    "topic": "基因工程基本流程",
    "stem": "不属于DNA重组基本过程的是( )",
    "options": [
      {
        "key": "A",
        "text": "获取目的DNA片段"
      },
      {
        "key": "B",
        "text": "目的基因的诱导表达"
      },
      {
        "key": "C",
        "text": "DNA片段与载体连接"
      },
      {
        "key": "D",
        "text": "导入受体细胞并克隆化"
      },
      {
        "key": "E",
        "text": "重组DNA筛选"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "属于基本步骤",
      "B": "表达属于后续功能表达，不是重组基本过程",
      "C": "属于连接步骤",
      "D": "属于转化与扩增",
      "E": "属于筛选步骤"
    }
  },
  {
    "id": "q007",
    "topic": "分子生物学工具酶",
    "stem": "属于Ⅱ型限制性核酸内切酶特点的是( )",
    "options": [
      {
        "key": "A",
        "text": "无特异酶解位点"
      },
      {
        "key": "B",
        "text": "同时有连接酶活性"
      },
      {
        "key": "C",
        "text": "识别序列呈回文结构"
      },
      {
        "key": "D",
        "text": "同时有聚合酶活性"
      },
      {
        "key": "E",
        "text": "同时有磷酸化酶活性"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "Ⅱ型酶具有特异识别位点",
      "B": "无连接酶活性",
      "C": "典型特征是识别回文序列",
      "D": "无聚合酶活性",
      "E": "无磷酸化酶活性"
    }
  },
  {
    "id": "q008",
    "topic": "分子生物学核心调控",
    "stem": "The most crucial aspect in the regulation of eukaryotic gene expression is( )",
    "options": [
      {
        "key": "A",
        "text": "染色质重塑"
      },
      {
        "key": "B",
        "text": "转录起始"
      },
      {
        "key": "C",
        "text": "mRNA加工修饰"
      },
      {
        "key": "D",
        "text": "翻译延长"
      },
      {
        "key": "E",
        "text": "翻译起始"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "重要但不如转录起始核心",
      "B": "真核基因表达最关键调控点",
      "C": "转录后调控",
      "D": "翻译阶段调控",
      "E": "翻译起始重要但次于转录起始"
    }
  },
  {
    "id": "q009",
    "topic": "转录后调控",
    "stem": "Among the following descriptions, the one that does not belong to post-transcriptional regulation is( )",
    "options": [
      {
        "key": "A",
        "text": "mRNA加工修饰"
      },
      {
        "key": "B",
        "text": "mRNA转运"
      },
      {
        "key": "C",
        "text": "mRNA细胞质定位"
      },
      {
        "key": "D",
        "text": "mRNA稳定性"
      },
      {
        "key": "E",
        "text": "mRNA磷酸化"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "典型转录后调控",
      "B": "mRNA转运属于转录后调控",
      "C": "定位调控属于转录后",
      "D": "稳定性调控属于转录后",
      "E": "mRNA不存在“磷酸化调控”概念"
    }
  },
  {
    "id": "q010",
    "topic": "真核基因调控",
    "stem": "The correct description of enhancer characteristics is( )",
    "options": [
      {
        "key": "A",
        "text": "距离转录起始点不能太远"
      },
      {
        "key": "B",
        "text": "仅存在于启动子上游"
      },
      {
        "key": "C",
        "text": "作用依赖启动子"
      },
      {
        "key": "D",
        "text": "位于结构基因5′端"
      },
      {
        "key": "E",
        "text": "较短的能增强转录的DNA序列"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "增强子可远距离作用",
      "B": "可位于上下游甚至内含子",
      "C": "不严格依赖启动子方向和位置",
      "D": "不局限于5′端",
      "E": "增强子为短DNA调控序列"
    }
  },
  {
    "id": "q011",
    "topic": "转录因子结构与功能",
    "stem": "The incorrect description regarding transcription factors is( )",
    "options": [
      {
        "key": "A",
        "text": "通常属反式调节"
      },
      {
        "key": "B",
        "text": "通过蛋白-蛋白或蛋白-DNA作用发挥功能"
      },
      {
        "key": "C",
        "text": "可为DNA依赖或非依赖调节"
      },
      {
        "key": "D",
        "text": "指具有激活功能的特异性调节蛋白"
      },
      {
        "key": "E",
        "text": "可含激活域和DNA结合域"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "正确",
      "B": "正确",
      "C": "表述错误，转录因子作用机制分类不是DNA依赖/非依赖",
      "D": "正确",
      "E": "正确"
    }
  },
  {
    "id": "q012",
    "topic": "miRNA介导基因调控",
    "stem": "The mechanism that does not belong to the regulation of gene expression by miRNAs is( )",
    "options": [
      {
        "key": "A",
        "text": "影响组蛋白修饰"
      },
      {
        "key": "B",
        "text": "调控DNA甲基化"
      },
      {
        "key": "C",
        "text": "促进mRNA降解"
      },
      {
        "key": "D",
        "text": "使蛋白进入泛素化降解途径"
      },
      {
        "key": "E",
        "text": "AGO2介导mRNA切割"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "miRNA可间接影响表观遗传",
      "B": "可参与DNA甲基化调控网络",
      "C": "典型机制",
      "D": "泛素化属于蛋白降解系统，不是miRNA直接机制",
      "E": "RISC复合体可切割mRNA"
    }
  },
  {
    "id": "q013",
    "topic": "原核基因表达调控",
    "stem": "prokaryotic promoters正确的是( )",
    "options": [
      {
        "key": "A",
        "text": "位于操纵子第一个结构基因处"
      },
      {
        "key": "B",
        "text": "负性顺式调控元件"
      },
      {
        "key": "C",
        "text": "编码阻遏蛋白"
      },
      {
        "key": "D",
        "text": "作用方向无关"
      },
      {
        "key": "E",
        "text": "能与RNA聚合酶结合"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "启动子不在结构基因内",
      "B": "启动子为正向调控元件",
      "C": "不编码蛋白",
      "D": "具有方向性",
      "E": "核心功能是结合RNA聚合酶"
    }
  },
  {
    "id": "q014",
    "topic": "生物化学与分子生物学-信号转导",
    "stem": "The correct statement regarding signal transduction, the correct statement is(    )",
    "options": [
      {
        "key": "A",
        "text": "每种信号只能触发一条信号转导通路"
      },
      {
        "key": "B",
        "text": "生长因子、胰岛素、促性腺激素和甲状腺素均与膜受体结合"
      },
      {
        "key": "C",
        "text": "乙酰胆碱的效应在不同的组织细胞中不同"
      },
      {
        "key": "D",
        "text": "小分子信使能够迅速传递信号的原因是结合配体"
      },
      {
        "key": "E",
        "text": "信号转导一般起始于配体与受体的特异性识别"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "错误，单一信号可激活多条信号通路。",
      "B": "错误，甲状腺素受体为胞内受体。",
      "C": "正确但不是“信号转导基本原则”的标准表述点。",
      "D": "错误，小分子信使快速扩散与扩散/放大有关，不是“结合配体”。",
      "E": "正确，信号转导起始于配体-受体特异性识别。"
    }
  },
  {
    "id": "q015",
    "topic": "生物化学与分子生物学-第二信使系统",
    "stem": "What is the chemical nature of second messengers?(    )",
    "options": [
      {
        "key": "A",
        "text": "糖"
      },
      {
        "key": "B",
        "text": "RNA"
      },
      {
        "key": "C",
        "text": "DNA"
      },
      {
        "key": "D",
        "text": "脂类"
      },
      {
        "key": "E",
        "text": "小分子活性物质"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "错误，糖类不是典型第二信使。",
      "B": "错误，RNA不作为第二信使。",
      "C": "错误，DNA不参与该过程。",
      "D": "错误，脂类部分信号分子参与调控但不作为典型第二信使分类。",
      "E": "正确，第二信使包括cAMP、cGMP、IP3、Ca2+等小分子。"
    }
  },
  {
    "id": "q016",
    "topic": "生物化学与分子生物学-操纵子结构（原核基因表达）",
    "stem": "An operon usually contains(    )",
    "options": [
      {
        "key": "A",
        "text": "一个启动子和一个编码基因"
      },
      {
        "key": "B",
        "text": "一个启动子和多个编码基因"
      },
      {
        "key": "C",
        "text": "数个启动子和一个编码基因"
      },
      {
        "key": "D",
        "text": "数个启动子和数个编码基因"
      },
      {
        "key": "E",
        "text": "2个启动子和数个编码基因"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误，操纵子通常包含多个结构基因。",
      "B": "正确，一个启动子控制多个结构基因。",
      "C": "错误，不符合操纵子结构。",
      "D": "错误，操纵子通常共享一个启动子。",
      "E": "错误，描述不符合经典操纵子模型。"
    }
  },
  {
    "id": "q017",
    "topic": "生物化学与分子生物学-原核基因表达调控（lac操纵子）",
    "stem": "The DNA fragment that recognizes and binds to the prokaryotic RNA polymerase is sequence(    )",
    "options": [
      {
        "key": "A",
        "text": "O序列"
      },
      {
        "key": "B",
        "text": "I基因"
      },
      {
        "key": "C",
        "text": "CAP结合位点"
      },
      {
        "key": "D",
        "text": "Z基因"
      },
      {
        "key": "E",
        "text": "P基因"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "错误，O序列是阻遏蛋白结合位点。",
      "B": "错误，I基因编码阻遏蛋白。",
      "C": "错误，CAP位点是调控蛋白结合位点。",
      "D": "错误，Z基因是结构基因。",
      "E": "正确，P（promoter）是RNA聚合酶结合位点。"
    }
  },
  {
    "id": "q018",
    "topic": "生物化学与分子生物学-原核基因表达调控（lac操纵子）",
    "stem": "The key regulatory factor of β-galactosidase expression in Escherichia coli is(    )",
    "options": [
      {
        "key": "A",
        "text": "基础转录因子"
      },
      {
        "key": "B",
        "text": "特异转录因子"
      },
      {
        "key": "C",
        "text": "起始因子"
      },
      {
        "key": "D",
        "text": "阻遏蛋白"
      },
      {
        "key": "E",
        "text": "p因子"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "错误，不特指lac调控核心。",
      "B": "错误，范围过泛。",
      "C": "错误，不是lac操纵子关键调控因子。",
      "D": "正确，lacI编码的阻遏蛋白是核心调控因子。",
      "E": "错误，不是标准调控元件。"
    }
  },
  {
    "id": "q019",
    "topic": "生物化学与分子生物学-原核基因表达调控（trp操纵子）",
    "stem": "The incorrect description of the tryptophan operon is(    )",
    "options": [
      {
        "key": "A",
        "text": "核糖体参与转录终止"
      },
      {
        "key": "B",
        "text": "转录与翻译偶联是其转录调控的分子基础"
      },
      {
        "key": "C",
        "text": "色氨酸不足时，转录提前终止"
      },
      {
        "key": "D",
        "text": "衰减子是关键的调控元件"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "基本正确（细菌中转录-翻译偶联影响终止机制）。",
      "B": "正确，原核中转录翻译偶联是基础。",
      "C": "错误，色氨酸不足时应减少提前终止（反而利于转录延伸）。",
      "D": "正确，衰减子（attenuator）是核心调控结构。"
    }
  },
  {
    "id": "q020",
    "topic": "生物化学与分子生物学-第二信使系统",
    "stem": "The biological function of the second messenger IP3 is to induce the endoplasmic reticulum to release(    )",
    "options": [
      {
        "key": "A",
        "text": "Ca2+"
      },
      {
        "key": "B",
        "text": "K+"
      },
      {
        "key": "C",
        "text": "Na+"
      },
      {
        "key": "D",
        "text": "Mg2+"
      },
      {
        "key": "E",
        "text": "H+"
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "正确，IP3作用于ER释放Ca2+。",
      "B": "错误，不是IP3调控对象。",
      "C": "错误。",
      "D": "错误。",
      "E": "错误。"
    }
  },
  {
    "id": "q021",
    "topic": "生物化学与分子生物学-膜受体与G蛋白",
    "stem": "The number of transmembrane helices contained in a G protein–coupled receptor is(    )",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "3"
      },
      {
        "key": "C",
        "text": "5"
      },
      {
        "key": "D",
        "text": "7"
      },
      {
        "key": "E",
        "text": "数目不定"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "错误。",
      "B": "错误。",
      "C": "错误。",
      "D": "正确，GPCR典型为7次跨膜结构。",
      "E": "错误，GPCR结构相对保守。"
    }
  },
  {
    "id": "q022",
    "topic": "生物化学与分子生物学-信号转导（第二信使）",
    "stem": "What substance is intracellular cAMP converted from?(    )",
    "options": [
      {
        "key": "A",
        "text": "ATP"
      },
      {
        "key": "B",
        "text": "ADP"
      },
      {
        "key": "C",
        "text": "AMP"
      },
      {
        "key": "D",
        "text": "5'-AMP"
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "正确，ATP在腺苷酸环化酶作用下生成cAMP。",
      "B": "错误。",
      "C": "错误。",
      "D": "错误。"
    }
  },
  {
    "id": "q023",
    "topic": "生物化学与分子生物学-蛋白质翻译后修饰（磷酸化）",
    "stem": "Which of the following are the main amino acid residues that undergo reversible phosphorylation modification in the body?(    )",
    "options": [
      {
        "key": "A",
        "text": "Gly、Ser、Val"
      },
      {
        "key": "B",
        "text": "Thr、Ser、Tyr"
      },
      {
        "key": "C",
        "text": "Ala、Ile、Leu"
      },
      {
        "key": "D",
        "text": "Phe、Thr、Val"
      },
      {
        "key": "E",
        "text": "Tyr、Val、Gly"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误，Gly/Val不参与主要磷酸化。",
      "B": "正确，Ser/Thr/Tyr是主要可逆磷酸化位点。",
      "C": "错误。",
      "D": "错误。",
      "E": "错误。"
    }
  },
  {
    "id": "q024",
    "topic": "生物化学与分子生物学-蛋白质修饰（磷酸化）",
    "stem": "What is the protein modification reaction catalyzed by protein kinases?(    )",
    "options": [
      {
        "key": "A",
        "text": "糖基化"
      },
      {
        "key": "B",
        "text": "磷酸化"
      },
      {
        "key": "C",
        "text": "乙酰化"
      },
      {
        "key": "D",
        "text": "泛素化"
      },
      {
        "key": "E",
        "text": "甲基化"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误，糖基化由糖基转移酶催化。",
      "B": "正确，蛋白激酶催化磷酸化反应。",
      "C": "错误。",
      "D": "错误。",
      "E": "错误。"
    }
  },
  {
    "id": "q025",
    "topic": "生物化学与分子生物学-蛋白质翻译后修饰（磷酸化作用）",
    "stem": "The following statement about the effects of protein phosphorylation modification is incorrect(    )",
    "options": [
      {
        "key": "A",
        "text": "可提高分子活性"
      },
      {
        "key": "B",
        "text": "可降低分子活性"
      },
      {
        "key": "C",
        "text": "引起分子降解"
      },
      {
        "key": "D",
        "text": "改变其空间构象"
      },
      {
        "key": "E",
        "text": "导致功能不可逆改变"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "正确，磷酸化可激活蛋白。",
      "B": "正确，也可抑制蛋白活性。",
      "C": "正确，部分情况下可促进降解。",
      "D": "正确，会改变构象。",
      "E": "错误，磷酸化通常是可逆修饰。"
    }
  },
  {
    "id": "q026",
    "topic": "细胞信号转导与蛋白激酶",
    "stem": "The physiological function of intracellular protein kinase is",
    "options": [
      {
        "key": "A",
        "text": "水解蛋白质"
      },
      {
        "key": "B",
        "text": "使蛋白质或酶发生磷酸化"
      },
      {
        "key": "C",
        "text": "使酶降解失活"
      },
      {
        "key": "D",
        "text": "去磷酸化蛋白质"
      },
      {
        "key": "E",
        "text": "水解ATP"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误：蛋白激酶不负责蛋白质水解",
      "B": "正确：蛋白激酶通过转移磷酸基团使底物蛋白/酶磷酸化",
      "C": "错误：不以降解方式调控",
      "D": "错误：去磷酸化由磷酸酶完成",
      "E": "错误：ATP提供磷酸基团但不是水解ATP本身的功能"
    }
  },
  {
    "id": "q027",
    "topic": "受体与蛋白激酶功能",
    "stem": "The following protein kinases can serve as receptors",
    "options": [
      {
        "key": "A",
        "text": "蛋白质酪氨酸激酶"
      },
      {
        "key": "B",
        "text": "cGMP依赖的蛋白质激酶"
      },
      {
        "key": "C",
        "text": "cAMP依赖的蛋白质激酶"
      },
      {
        "key": "D",
        "text": "Ca2+磷脂依赖的蛋白质激酶"
      },
      {
        "key": "E",
        "text": "Ca2+钙调蛋白依赖的蛋白质激酶"
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "正确：受体酪氨酸激酶本身兼具受体与酶活性",
      "B": "错误：均为胞内依赖型蛋白激酶，不具受体功能",
      "C": "错误：均为胞内依赖型蛋白激酶，不具受体功能",
      "D": "错误：均为胞内依赖型蛋白激酶，不具受体功能",
      "E": "错误：均为胞内依赖型蛋白激酶，不具受体功能"
    }
  },
  {
    "id": "q028",
    "topic": "受体结构与信号转导",
    "stem": "Which statement about enzyme-linked receptors is incorrect",
    "options": [
      {
        "key": "A",
        "text": "属于单跨膜受体"
      },
      {
        "key": "B",
        "text": "通过蛋白质激酶传递信号"
      },
      {
        "key": "C",
        "text": "直接通过G蛋白活化传递信号"
      },
      {
        "key": "D",
        "text": "有些受体具有蛋白质激酶活性"
      },
      {
        "key": "E",
        "text": "配体主要是生长因子和细胞因子"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "正确：典型为单跨膜",
      "B": "正确：通过激酶级联传递信号",
      "C": "错误：这是G蛋白偶联受体机制",
      "D": "正确：如RTK具有自身激酶活性",
      "E": "正确：配体多为生长因子/细胞因子"
    }
  },
  {
    "id": "q029",
    "topic": "信号转导网络",
    "stem": "The following statement about signal transduction networks is incorrect",
    "options": [
      {
        "key": "A",
        "text": "不同信号通路可协同调节基因表达"
      },
      {
        "key": "B",
        "text": "不同通路可拮抗调控"
      },
      {
        "key": "C",
        "text": "一条信号通路只调节一种转录因子"
      },
      {
        "key": "D",
        "text": "多通路可作用于同一转录因子"
      },
      {
        "key": "E",
        "text": "一条通路可调节多个转录因子"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "正确：信号整合常见",
      "B": "正确：通路可相互拮抗",
      "C": "错误：一条通路可作用多个转录因子",
      "D": "正确：存在信号汇聚",
      "E": "正确：可多靶点调控"
    }
  },
  {
    "id": "q030",
    "topic": "信号转导与疾病",
    "stem": "abnormal signal transduction and diseases is correct",
    "options": [
      {
        "key": "A",
        "text": "霍乱毒素降低cAMP"
      },
      {
        "key": "B",
        "text": "百日咳毒素持续激活Gi使cAMP升高"
      },
      {
        "key": "C",
        "text": "胰岛素信号仅与1型糖尿病有关"
      },
      {
        "key": "D",
        "text": "Ca2+信号异常可参与心肌肥厚与心衰"
      },
      {
        "key": "E",
        "text": "所有异常均由单基因突变引起"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "错误：霍乱毒素升高cAMP",
      "B": "错误：Gi抑制cAMP",
      "C": "错误：与1型和2型均相关",
      "D": "正确：Ca2+信号异常参与心血管病",
      "E": "错误：环境与多因素也重要"
    }
  },
  {
    "id": "q031",
    "topic": "生长因子",
    "stem": "incorrect statement about growth factors",
    "options": [
      {
        "key": "A",
        "text": "多为肽类或蛋白质"
      },
      {
        "key": "B",
        "text": "正调节靶细胞生长"
      },
      {
        "key": "C",
        "text": "具有内分泌、旁分泌、自分泌"
      },
      {
        "key": "D",
        "text": "主要通过细胞内信号转导发挥作用"
      },
      {
        "key": "E",
        "text": "多数生长因子受体具有丝/苏氨酸激酶活性"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "正确：多数为蛋白/多肽",
      "B": "正确：促进细胞生长",
      "C": "正确：三种作用方式",
      "D": "正确：通过信号转导实现功能",
      "E": "错误：多数为受体酪氨酸激酶而非丝苏氨酸激酶"
    }
  },
  {
    "id": "q032",
    "topic": "癌基因与肿瘤分子机制",
    "stem": "Burkitt lymphoma main molecular mechanism",
    "options": [
      {
        "key": "A",
        "text": "RAS点突变"
      },
      {
        "key": "B",
        "text": "MYB扩增"
      },
      {
        "key": "C",
        "text": "MYC易位至Ig增强子附近"
      },
      {
        "key": "D",
        "text": "ABL形成融合基因"
      },
      {
        "key": "E",
        "text": "RB失活"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "错误：常见于其他肿瘤",
      "B": "错误：不是Burkitt特征",
      "C": "正确：t(8;14)导致MYC过表达",
      "D": "错误：见于CML",
      "E": "错误：见于视网膜母细胞瘤"
    }
  },
  {
    "id": "q033",
    "topic": "抑癌基因",
    "stem": "gene closely associated with retinoblastoma",
    "options": [
      {
        "key": "A",
        "text": "TP53"
      },
      {
        "key": "B",
        "text": "RB"
      },
      {
        "key": "C",
        "text": "PTEN"
      },
      {
        "key": "D",
        "text": "APC"
      },
      {
        "key": "E",
        "text": "EGFR"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误：多肿瘤相关但非核心",
      "B": "正确：RB1是经典抑癌基因",
      "C": "错误：前列腺/胶质瘤相关",
      "D": "错误：结直肠癌相关",
      "E": "错误：原癌基因"
    }
  },
  {
    "id": "q034",
    "topic": "TP53基因功能",
    "stem": "TP53 gene incorrect statement",
    "options": [
      {
        "key": "A",
        "text": "转录因子"
      },
      {
        "key": "B",
        "text": "常在肿瘤中突变失活"
      },
      {
        "key": "C",
        "text": "突变型p53抑制正常p53"
      },
      {
        "key": "D",
        "text": "p53促进p21表达使细胞周期阻滞"
      },
      {
        "key": "E",
        "text": "p53参与DNA损伤修复"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "正确：p53为转录因子",
      "B": "正确：高频突变",
      "C": "正确：显性负效应",
      "D": "错误：阻滞于G1/S或G2/M，不是该表述方式",
      "E": "正确：参与修复与凋亡调控"
    }
  },
  {
    "id": "q035",
    "topic": "抑癌基因失活机制",
    "stem": "inactivation mechanisms of tumour suppressor genes",
    "options": [
      {
        "key": "A",
        "text": "基因扩增"
      },
      {
        "key": "B",
        "text": "获得强启动子"
      },
      {
        "key": "C",
        "text": "获得增强子"
      },
      {
        "key": "D",
        "text": "染色体易位"
      },
      {
        "key": "E",
        "text": "杂合性丢失"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "错误：激活癌基因方式",
      "B": "错误：增强表达非失活",
      "C": "错误：增强表达",
      "D": "错误：可激活或融合癌基因",
      "E": "正确：LOH是经典抑癌基因失活机制"
    }
  },
  {
    "id": "q036",
    "topic": "原癌基因激活机制",
    "stem": "Not belonging to activation mechanism of proto-oncogenes",
    "options": [
      {
        "key": "A",
        "text": "基因扩增"
      },
      {
        "key": "B",
        "text": "启动子区高度甲基化"
      },
      {
        "key": "C",
        "text": "基因突变"
      },
      {
        "key": "D",
        "text": "染色体易位"
      },
      {
        "key": "E",
        "text": "获得启动子或增强子"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "正确机制",
      "B": "错误：甲基化通常抑制表达",
      "C": "正确机制",
      "D": "正确机制",
      "E": "正确机制"
    }
  },
  {
    "id": "q037",
    "topic": "RB蛋白功能",
    "stem": "RB protein",
    "options": [
      {
        "key": "A",
        "text": "转录因子"
      },
      {
        "key": "B",
        "text": "与E2F结合抑制其功能"
      },
      {
        "key": "C",
        "text": "增强E2F功能"
      },
      {
        "key": "D",
        "text": "抑制EGF功能"
      },
      {
        "key": "E",
        "text": "增强EGF功能"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误：非典型转录因子",
      "B": "正确：阻止G1/S推进",
      "C": "错误：相反作用",
      "D": "错误：与EGF无直接结合",
      "E": "错误：与EGF无直接结合"
    }
  },
  {
    "id": "q038",
    "topic": "癌基因激活",
    "stem": "Oncogene activation",
    "options": [
      {
        "key": "A",
        "text": "功能失活突变"
      },
      {
        "key": "B",
        "text": "病毒基因转变为癌基因"
      },
      {
        "key": "C",
        "text": "正常原癌基因转变为癌基因"
      },
      {
        "key": "D",
        "text": "正常癌基因形成过程"
      },
      {
        "key": "E",
        "text": "抗癌基因激活"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "错误：属于抑癌基因",
      "B": "错误表述",
      "C": "正确：核心定义",
      "D": "错误：概念不成立",
      "E": "错误：抑癌基因相关"
    }
  },
  {
    "id": "q039",
    "topic": "RB基因",
    "stem": "RB protein/gene",
    "options": [
      {
        "key": "A",
        "text": "转录因子"
      },
      {
        "key": "B",
        "text": "结合E2F抑制其功能"
      },
      {
        "key": "C",
        "text": "增强E2F功能"
      },
      {
        "key": "D",
        "text": "结合EGF"
      },
      {
        "key": "E",
        "text": "增强EGF功能"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误",
      "B": "正确：G1/S检查点关键调控",
      "C": "错误",
      "D": "错误",
      "E": "错误"
    }
  },
  {
    "id": "q040",
    "topic": "癌基因功能",
    "stem": "proto-oncogenes function",
    "options": [
      {
        "key": "A",
        "text": "促进细胞生长并诱发凋亡"
      },
      {
        "key": "B",
        "text": "促进生长并抑制分化"
      },
      {
        "key": "C",
        "text": "抑制生长促进分化"
      },
      {
        "key": "D",
        "text": "抑制生长阻止分化"
      },
      {
        "key": "E",
        "text": "促进生长促进分化并抗凋亡"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误：表述矛盾",
      "B": "正确：原癌基因促进生长信号",
      "C": "错误：抑癌基因特征",
      "D": "错误：抑癌基因特征",
      "E": "错误：部分正确但不规范定义"
    }
  },
  {
    "id": "q041",
    "topic": "分子生物学-原核转录与翻译机制",
    "stem": "The σ subunit is an essential component of the prokaryotic RNA polymerase holoenzyme, playing a crucial role in transcription initiation by recognizing the transcription start site. So, what changes will the σ subunit undergo before entering the transcription elongation phase?",
    "options": [
      {
        "key": "A",
        "text": "The holoenzyme moves forward on the template."
      },
      {
        "key": "B",
        "text": "It acts as a termination factor and functions again during transcription termination."
      },
      {
        "key": "C",
        "text": "The σ subunit remains at the transcription initiation site."
      },
      {
        "key": "D",
        "text": "The σ subunit is released."
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "错误。核心酶才负责延伸，σ不参与移动功能变化。",
      "B": "错误。σ因子不作为终止因子。",
      "C": "错误。σ不会留在起始位点持续参与。",
      "D": "正确。σ因子在起始完成后从RNA聚合酶复合体中解离，进入延伸阶段。"
    }
  },
  {
    "id": "q042",
    "topic": "分子生物学-DNA转录与RNA合成",
    "stem": "The base sequence of a certain template strand on DNA is 5’-CGGTA-3’. What is the corresponding base sequence on the transcribed mRNA?",
    "options": [
      {
        "key": "A",
        "text": "5’-UACCG-3’"
      },
      {
        "key": "B",
        "text": "5’-GCCAU-3’"
      },
      {
        "key": "C",
        "text": "5’-GCCUU-3’"
      },
      {
        "key": "D",
        "text": "5’-AUCCG-3’"
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "正确。mRNA与模板链互补配对并反向合成，得到UACCG。",
      "B": "错误。方向与互补关系不符合。",
      "C": "错误。碱基配对错误（出现U/C错配）。",
      "D": "错误。序列方向及配对关系错误。"
    }
  },
  {
    "id": "q043",
    "topic": "分子生物学-RNA转录底物",
    "stem": "RNA polymerase catalyzes transcription, and its substrates are?",
    "options": [
      {
        "key": "A",
        "text": "ATP, GTP, TTP, CTP"
      },
      {
        "key": "B",
        "text": "AMP, GMP, TMP, CMP"
      },
      {
        "key": "C",
        "text": "dATP, dGTP, dUTP, dCTP"
      },
      {
        "key": "D",
        "text": "ATP, GTP, UTP, CTP"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "错误。TTP用于DNA合成，不用于RNA。",
      "B": "错误。AMP/GMP为单磷酸形式，不作为直接底物。",
      "C": "错误。dNTP用于DNA复制。",
      "D": "正确。RNA合成使用ATP、GTP、UTP、CTP。"
    }
  },
  {
    "id": "q044",
    "topic": "分子生物学-原核转录启动子",
    "stem": "What is the Pribnow box sequence?",
    "options": [
      {
        "key": "A",
        "text": "AATAAA"
      },
      {
        "key": "B",
        "text": "TAAGGC"
      },
      {
        "key": "C",
        "text": "TATAAT"
      },
      {
        "key": "D",
        "text": "TTGACA"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "错误。为polyadenylation信号（真核）。",
      "B": "错误。不符合-10区保守序列。",
      "C": "正确。原核启动子-10区保守序列为TATAAT。",
      "D": "错误。为-35区类似序列（TTGACA），非Pribnow box。"
    }
  },
  {
    "id": "q045",
    "topic": "分子生物学-原核转录起始",
    "stem": "The enzyme involved in the initiation of transcription in prokaryotes is?",
    "options": [
      {
        "key": "A",
        "text": "Helicase"
      },
      {
        "key": "B",
        "text": "RNA polymerase II"
      },
      {
        "key": "C",
        "text": "RNA polymerase holoenzyme"
      },
      {
        "key": "D",
        "text": "RNA polymerase core enzyme"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "错误。解旋酶参与DNA复制。",
      "B": "错误。RNA polymerase II为真核mRNA转录酶。",
      "C": "正确。原核转录起始需要全酶（核心酶+σ因子）。",
      "D": "错误。核心酶缺乏启动子识别能力。"
    }
  },
  {
    "id": "q046",
    "topic": "分子生物学-蛋白质合成场所",
    "stem": "The site of protein synthesis is the( )",
    "options": [
      {
        "key": "A",
        "text": "核糖体"
      },
      {
        "key": "B",
        "text": "内质网"
      },
      {
        "key": "C",
        "text": "高尔基体"
      },
      {
        "key": "D",
        "text": "线粒体"
      },
      {
        "key": "E",
        "text": "细胞核"
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "正确。核糖体是蛋白质翻译的直接场所。",
      "B": "错误。粗面内质网仅作为附着平台。",
      "C": "错误。高尔基体负责加工与修饰。",
      "D": "错误。线粒体参与能量代谢。",
      "E": "错误。细胞核进行转录，不进行翻译。"
    }
  },
  {
    "id": "q047",
    "topic": "分子生物学-翻译模板",
    "stem": "The direct template for protein synthesis is which of the following substances?",
    "options": [
      {
        "key": "A",
        "text": "DNA"
      },
      {
        "key": "B",
        "text": "mRNA"
      },
      {
        "key": "C",
        "text": "tRNA"
      },
      {
        "key": "D",
        "text": "rRNA"
      },
      {
        "key": "E",
        "text": "snRNA"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误。DNA为转录模板。",
      "B": "正确。mRNA直接指导翻译。",
      "C": "错误。tRNA为适配分子。",
      "D": "错误。rRNA构成核糖体。",
      "E": "错误。snRNA参与剪接。"
    }
  },
  {
    "id": "q048",
    "topic": "分子生物学-遗传密码特性",
    "stem": "Characteristics of the genetic code do not include( )",
    "options": [
      {
        "key": "A",
        "text": "通用性"
      },
      {
        "key": "B",
        "text": "连续性"
      },
      {
        "key": "C",
        "text": "特异性"
      },
      {
        "key": "D",
        "text": "简并性"
      },
      {
        "key": "E",
        "text": "摆动性"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "正确特性（通用性）。",
      "B": "正确特性（无逗号间隔读取）。",
      "C": "错误。特异性属于错误选项（遗传密码本身强调“一一对应”但并非该分类特征选项）。",
      "D": "正确特性（简并性）。",
      "E": "正确特性（摆动性）。"
    }
  },
  {
    "id": "q049",
    "topic": "分子生物学-终止密码子",
    "stem": "Which of the following groups is the termination codon in the process of protein biosynthesis?",
    "options": [
      {
        "key": "A",
        "text": "UCC, UCA, UAC"
      },
      {
        "key": "B",
        "text": "UAA, UAG, UCC"
      },
      {
        "key": "C",
        "text": "UAA, UAG, UGA"
      },
      {
        "key": "D",
        "text": "UGG, UAG, UGA"
      },
      {
        "key": "E",
        "text": "UAA, UAC, UCA"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "错误。均非终止密码子。",
      "B": "错误。UCC不是终止密码子。",
      "C": "正确。标准终止密码子为UAA/UAG/UGA。",
      "D": "错误。UGG为Trp编码。",
      "E": "错误。含非终止密码子。"
    }
  },
  {
    "id": "q050",
    "topic": "分子生物学-tRNA氨基酸活化",
    "stem": "In the biosynthesis of proteins, the activation of amino acids and their binding to tRNA require( )",
    "options": [
      {
        "key": "A",
        "text": "氨基酸-tRNA合成酶"
      },
      {
        "key": "B",
        "text": "ATP合成酶"
      },
      {
        "key": "C",
        "text": "转肽酶"
      },
      {
        "key": "D",
        "text": "GTP"
      },
      {
        "key": "E",
        "text": "氨基酰-tRNA合成酶"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "错误表述（不完整/不规范名称）。",
      "B": "错误。ATP合成酶参与能量代谢。",
      "C": "错误。转肽酶参与肽键形成。",
      "D": "错误。GTP提供能量但不负责连接。",
      "E": "正确。氨基酰-tRNA合成酶催化氨基酸活化并连接tRNA。"
    }
  },
  {
    "id": "q051",
    "topic": "分子生物学-核糖体功能",
    "stem": "Which of the following functions is not possessed by the large ribosomal subunit? Peptidyl transferase activity",
    "options": [
      {
        "key": "A",
        "text": "转肽酶活性"
      },
      {
        "key": "B",
        "text": "结合氨基酰-tRNA"
      },
      {
        "key": "C",
        "text": "结合肽酰-tRNA"
      },
      {
        "key": "D",
        "text": "结合mRNA"
      },
      {
        "key": "E",
        "text": "结合蛋白因子"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "正确功能（大亚基催化肽键形成）。",
      "B": "正确。参与A位结合。",
      "C": "正确。P位相关结合。",
      "D": "错误。mRNA结合主要发生在小亚基。",
      "E": "正确。延伸因子等作用于大亚基。"
    }
  },
  {
    "id": "q052",
    "topic": "分子生物学-翻译终止机制",
    "stem": "What causes the termination of peptide chain synthesis?",
    "options": [
      {
        "key": "A",
        "text": "终止密码子不被任何因子识别"
      },
      {
        "key": "B",
        "text": "核糖体解聚肽链"
      },
      {
        "key": "C",
        "text": "特异tRNA进入A位"
      },
      {
        "key": "D",
        "text": "到达mRNA末端"
      },
      {
        "key": "E",
        "text": "释放因子识别终止密码子并进入A位"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "错误。终止密码子由释放因子识别。",
      "B": "错误。结果而非原因。",
      "C": "错误。终止密码子不对应tRNA。",
      "D": "错误。翻译不依赖mRNA末端。",
      "E": "正确。释放因子识别终止密码子并终止翻译。"
    }
  },
  {
    "id": "q053",
    "topic": "分子生物学-翻译后修饰",
    "stem": "Which of the following processes is not included in post-translational modification?",
    "options": [
      {
        "key": "A",
        "text": "新生肽链折叠"
      },
      {
        "key": "B",
        "text": "N端甲酰甲硫氨酸/甲硫氨酸切除"
      },
      {
        "key": "C",
        "text": "氨基酸残基侧链修饰"
      },
      {
        "key": "D",
        "text": "亚基聚合"
      },
      {
        "key": "E",
        "text": "变构剂引起分子构象改变"
      }
    ],
    "answer": "E",
    "explanations": {
      "A": "正确属于翻译后折叠过程。",
      "B": "正确属于翻译后加工。",
      "C": "正确属于翻译后修饰。",
      "D": "正确属于蛋白复合体形成。",
      "E": "错误，不属于经典翻译后修饰过程（变构效应属于调控现象）。"
    }
  },
  {
    "id": "q054",
    "topic": "分子生物学-抗生素与蛋白质合成",
    "stem": "Which of the following antibiotics can simultaneously inhibit protein synthesis in both prokaryotic and eukaryotic organisms?",
    "options": [
      {
        "key": "A",
        "text": "青霉素"
      },
      {
        "key": "B",
        "text": "嘌呤霉素"
      },
      {
        "key": "C",
        "text": "链霉素"
      },
      {
        "key": "D",
        "text": "氯霉素"
      },
      {
        "key": "E",
        "text": "四环素"
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误。作用于细胞壁合成。",
      "B": "正确。嘌呤霉素可作用于两类核糖体，导致链终止。",
      "C": "错误。主要作用于原核30S亚基。",
      "D": "错误。主要作用于原核50S亚基。",
      "E": "错误。主要作用于30S抑制tRNA结合。"
    }
  },
  {
    "id": "q055",
    "topic": "分子生物学-真核基因转录与RNA聚合酶",
    "stem": "In eukaryotes, the transcription products catalyzed by RNA polymerase II are ?(    )",
    "options": [
      {
        "key": "A",
        "text": "mRNA"
      },
      {
        "key": "B",
        "text": "18S rRNA"
      },
      {
        "key": "C",
        "text": "28S rRNA"
      },
      {
        "key": "D",
        "text": "tRNA"
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "正确。RNA polymerase II 主要合成mRNA。",
      "B": "错误。18S rRNA由RNA polymerase I转录（rRNA前体）。",
      "C": "错误。28S rRNA由RNA polymerase I转录。",
      "D": "错误。tRNA由RNA polymerase III转录。"
    }
  },
  {
    "id": "q056",
    "topic": "分子生物学-真核RNA聚合酶功能分工",
    "stem": "Which enzyme catalyzes the transcription of tRNA and 5S rRNA in eukaryotes? (    )",
    "options": [
      {
        "key": "A",
        "text": "RNA polymerase I"
      },
      {
        "key": "B",
        "text": "RNA polymerase"
      },
      {
        "key": "C",
        "text": "RNA polymerase holoenzyme"
      },
      {
        "key": "D",
        "text": "RNA polymerase III"
      }
    ],
    "answer": "D",
    "explanations": {
      "A": "错误。RNA polymerase I主要转录28S/18S/5.8S rRNA。",
      "B": "错误。表述不完整，非特定类型。",
      "C": "错误。holoenzyme概念主要用于原核。",
      "D": "正确。RNA polymerase III负责tRNA和5S rRNA转录。"
    }
  },
  {
    "id": "q057",
    "topic": "分子生物学-转录延伸机制",
    "stem": "What are the characteristics of RNA polymerase binding to the DNA template during transcription elongation ? (    )",
    "options": [
      {
        "key": "A",
        "text": "Binding of the holoenzyme to the template"
      },
      {
        "key": "B",
        "text": "Binding of the core enzyme to a specific site on the template"
      },
      {
        "key": "C",
        "text": "Relatively loose to facilitate the forward movement of RNA polymerase"
      },
      {
        "key": "D",
        "text": "Relatively stable and firm"
      }
    ],
    "answer": "C",
    "explanations": {
      "A": "错误。holoenzyme用于起始阶段。",
      "B": "错误。特异位点结合属于启动子识别阶段。",
      "C": "正确。延伸阶段结合较松散以利于沿DNA移动。",
      "D": "错误。过于稳定会阻碍RNA聚合酶前进。"
    }
  },
  {
    "id": "q058",
    "topic": "分子生物学-真核转录终止与RNA加工",
    "stem": "The correct statement regarding the transcription termination of eukaryotic mRNA is ?(    )",
    "options": [
      {
        "key": "A",
        "text": "It requires the Rho factor."
      },
      {
        "key": "B",
        "text": "It occurs synchronously with polyadenylation."
      },
      {
        "key": "C",
        "text": "It requires the release factor RR."
      },
      {
        "key": "D",
        "text": "It requires the formation of a hammerhead structure."
      }
    ],
    "answer": "B",
    "explanations": {
      "A": "错误。Rho因子仅存在于原核转录终止。",
      "B": "正确。真核mRNA转录终止与polyadenylation过程偶联。",
      "C": "错误。释放因子用于翻译终止，不是转录。",
      "D": "错误。hammerhead结构为核酶相关结构，不是该过程必需。"
    }
  },
  {
    "id": "q059",
    "topic": "分子生物学-核酶与RNA催化",
    "stem": "The correct statement about ribozymes is ?(    )",
    "options": [
      {
        "key": "A",
        "text": "It can catalyze the self-splicing of RNA."
      },
      {
        "key": "B",
        "text": "It is a protein with catalytic activity."
      },
      {
        "key": "C",
        "text": "It has a stem-loop structure followed by an oligouridine tail."
      },
      {
        "key": "D",
        "text": "It is composed of snRNA and proteins."
      }
    ],
    "answer": "A",
    "explanations": {
      "A": "正确。核酶具有RNA催化活性，可进行自剪接。",
      "B": "错误。核酶是RNA，不是蛋白质。",
      "C": "错误。该描述类似转录终止信号结构，不是核酶定义。",
      "D": "错误。snRNA+蛋白是snRNP，不是核酶。"
    }
  }
] as Question[]
