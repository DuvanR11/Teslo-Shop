import '@/styles/globals.css'
import { lightTheme } from '@/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { UiProvider } from '@/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig 
        value={{
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <UiProvider>
          <ThemeProvider theme={ lightTheme }>
            <CssBaseline/>
              <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
    </SWRConfig>
  )
}
