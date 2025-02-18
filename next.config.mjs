import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: {
    renderer: 'katex',
    options: {
      // suppress warnings from katex for `\\`
      strict: false,
      // macros: {
      //   '\\RR': '\\mathbb{R}'
      // }
    }
  }
})

export default withNextra({
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // optimize memory usage: https://nextjs.org/docs/app/building-your-application/optimizing/memory-usage
    webpackMemoryOptimizations: true,
  },})

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })