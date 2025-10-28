/* eslint-env node */
import { Footer, Layout} from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import 'katex/dist/katex.min.css'
import AlgoliaSearch from '../components/docsearch'
import { Navbar } from '../components/navbar'

export const metadata = {
  metadataBase: new URL('https://notenextra.trance-0.com'),
  title: {
    template: '%s - NoteNextra'
  },
  
  description: 'A static note sharing site for minimum care',
  applicationName: 'NoteNextra',
  generator: 'Next.js',
  appleWebApp: {
    title: 'NoteNextra'
  },
  other: {
    'algolia-site-verification': '7303797A38EAD6FC',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://notenextra.trance-0.com'
  }
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();
  const navbar = (
    <Navbar
      pageMap={pageMap}
      logo={
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-braces-asterisk" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6M7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5z"/>
          </svg>
          <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
            NoteNextra
          </span>
        </>
      }
      projectLink="https://github.com/Trance-0/NoteNextra"
    />
  )
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{
    hue: {
      dark: 336,
      light: 164
    },
    saturation: {
      dark: 72,
      light: 49
    },
    lightness: {
      dark: 59,
      light: 35
    }
  }}/>
      <body>
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              <span>
                MIT {new Date().getFullYear()} ©{' '}
                <a href="https://github.com/Trance-0" target="_blank">
                  Trance-0
                </a>
                .
              </span>
            </Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/Trance-0/NoteNextra/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          // TODO: fix algolia search
          // search={<AlgoliaSearch/>}
        >
          {children}
          {/* SpeedInsights in vercel */}
          <SpeedInsights />
          {/* Analytics in vercel */}
          <Analytics />
        </Layout>
      </body>
    </html>
  )
}