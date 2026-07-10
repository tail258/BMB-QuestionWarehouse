<div align="center">

# 🧬 生物化学与分子生物学题库

**为期末复习打造的轻量刷题工具**

109 道选择题 · 单选/多选 · 即时反馈 · 逐项解析 · 收藏夹 · 错题本

<p>
  <a href="https://tail258.github.io/BMB-QuestionWarehouse/">
    <img alt="在线使用" src="https://img.shields.io/badge/ONLINE-开始刷题-0f5c58?style=for-the-badge">
  </a>
  <img alt="题目数量" src="https://img.shields.io/badge/QUESTIONS-109-d58a35?style=for-the-badge">
  <a href="./LICENSE">
    <img alt="MIT License" src="https://img.shields.io/badge/LICENSE-MIT-162726?style=for-the-badge">
  </a>
</p>

### [▶ 点击进入在线题库](https://tail258.github.io/BMB-QuestionWarehouse/)

</div>

---

## ✨ 功能一览

<table>
  <tr>
    <td align="center" width="33%">
      <strong>⚡ 即时反馈</strong><br>
      <sub>作答后立即显示对错与正确答案</sub>
    </td>
    <td align="center" width="33%">
      <strong>📖 逐项解析</strong><br>
      <sub>每个选项均提供独立解析</sub>
    </td>
    <td align="center" width="33%">
      <strong>🔖 收藏夹</strong><br>
      <sub>随时收藏或移除重点题目</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <strong>🧠 错题本</strong><br>
      <sub>答错后自动收录，掌握后可移除</sub>
    </td>
    <td align="center" width="33%">
      <strong>📈 错误计数</strong><br>
      <sub>记录每道题的累计答错次数</sub>
    </td>
    <td align="center" width="33%">
      <strong>📱 响应式布局</strong><br>
      <sub>适配电脑、平板与手机屏幕</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <strong>✅ 多选题支持</strong><br>
      <sub>多选题可先勾选，再统一提交答案</sub>
    </td>
    <td align="center" width="33%">
      <strong>🔎 题号跳转</strong><br>
      <sub>输入题号即可快速定位目标题目</sub>
    </td>
    <td align="center" width="33%">
      <strong>🧬 PPT 题库扩充</strong><br>
      <sub>新增生化 PPT 整理题，统一并入总题库</sub>
    </td>
  </tr>
</table>

## 🌿 使用说明

1. 打开[在线题库](https://tail258.github.io/BMB-QuestionWarehouse/)。
2. 单选题点击选项后立即反馈；多选题先勾选，再点击“提交答案”。
3. 查看即时反馈、正确答案与逐项解析。
4. 需要定位题目时，可在跳题框输入题号。
5. 点击书签图标收藏重点题目。
6. 答错的题目会自动进入错题本，并累计错误次数。
7. 确认掌握后，可将题目移出收藏夹或错题本。

> [!NOTE]
> 收藏、错题、错误次数和复习进度保存在当前浏览器中，不会在不同设备之间同步。清除浏览器站点数据也会清除学习记录。

## 🧪 技术构成

<div align="center">

| 前端框架 | 开发语言 | 构建工具 | 自动部署 |
| :---: | :---: | :---: | :---: |
| React 19 | TypeScript | Vite 8 | GitHub Actions + Pages |

</div>

<details>
<summary><strong>在本地运行</strong></summary>

需要安装 Node.js 22 或更高版本。

```bash
npm install
npm run dev
```

构建与代码检查：

```bash
npm run build
npm run lint
```

</details>

<details>
<summary><strong>重新生成题库数据</strong></summary>

项目保留了 Markdown 题库转换脚本：

```bash
node scripts/generate-questions.mjs "题库 Markdown 文件路径"
```

转换器会校验题目数量、选项、正确答案和逐项解析是否完整。

</details>

## 📄 开源许可

本项目使用 [MIT License](./LICENSE) 开源。

---

<div align="center">
  <sub>愿每一次错题重逢，都比上一次更接近真正掌握。</sub>
</div>
