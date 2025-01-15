import { ThemeProvider } from 'next-themes'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute='class'>
            {/* SpeedInsights in vercel */}
            <SpeedInsights />
            {/* Analytics in vercel */}
            <Analytics />
            <Component {...pageProps} />
        </ThemeProvider>
    )
  }