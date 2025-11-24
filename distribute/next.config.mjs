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

  // static export start
  output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  // static export end
  
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // compiler: {
  //   // enable console log in production
  //   removeConsole: false,
  // },
  // experimental: {    
  //   webpackMemoryOptimizations: true,
  //   staticGenerationMaxConcurrency: 2,   // try 1–3, default is 8
  //   staticGenerationMinPagesPerWorker: 1 // keep small, default is 25
  // }
}))