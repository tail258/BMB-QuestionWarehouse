import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 项目站点部署在仓库同名子路径下；本地开发仍使用根路径。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/BMB-QuestionWarehouse/' : '/',
  plugins: [react()],
}))
