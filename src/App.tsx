import { Routes, Route } from 'react-router-dom'

import { launchSentry } from '@habx/lib-client-reporting'

import {
  Providers,
  RedirectIfNotLoggedIn,
  NavBar,
} from '@/components/structure'
import { config } from '@/config'
import { Template } from '@/pages/Template'
import { GlobalStyle } from '@/style/global'

import { IntlProvider } from './lib/useTranslate'

if (config.get('sentry.enabled')) {
  console.warn('Don\'t forget to configure Sentry !') // eslint-disable-line
  launchSentry({
    dsn: '',
    release: window.VERSION,
    environment: window.HABX_ENV,
  })
}

export const App = () => {
  return (
    <IntlProvider locale="fr" messages={{}}>
      <Providers>
        <RedirectIfNotLoggedIn>
          <NavBar />
          <Routes>
            <Route path="/" element={<Template />} />
          </Routes>
        </RedirectIfNotLoggedIn>
        <GlobalStyle />
      </Providers>
    </IntlProvider>
  )
}
