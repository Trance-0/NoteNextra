import nextra from 'nextra'
import withBundleAnalyzer from '@next/bundle-analyzer'

const withNextra = nextra({
  latex: {
    renderer: 'katex',
    options: {
      // suppress warnings from katex for `\\`
      strict: false,
    }
  },
  mdxOptions: {
    format: 'detect'
  },
  contentDirBasePath: '/'
})

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

export default bundleAnalyzer(withNextra({
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
}))

// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })