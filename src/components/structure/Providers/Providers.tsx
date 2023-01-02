import { ApolloProvider } from '@apollo/client'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Provider as PermissionsProvider } from '@habx/lib-client-acl'
import { ErrorBoundary, goToErrorPage } from '@habx/lib-client-reporting'
import { Provider as DesignSystemProvider } from '@habx/ui-core'

import { buildApolloClient } from '@/api'
import { Permission } from '@/lib/permissions'

import { ProviderContainer } from './Provider.style'

const apolloClient = buildApolloClient()

const INITIAL_PERMISSIONS = Array.from(
  new Set(Permission && Object.values(Permission))
)

const handleErrorSent = () => {
  if (!['local', 'dev'].includes(window.HABX_ENV)) {
    goToErrorPage({ light: true, statusCode: 500 })
  }
}

export const Providers: React.FunctionComponent<
  React.PropsWithChildren<{}>
> = ({ children }) => {
  return (
    <ErrorBoundary onErrorSent={handleErrorSent}>
      <ApolloProvider client={apolloClient}>
        <PermissionsProvider
          env={window.HABX_ENV}
          initialPermissions={INITIAL_PERMISSIONS}
          language="fr"
        >
          <DesignSystemProvider>
            <BrowserRouter basename="/tpl">
              <ProviderContainer>
                <React.Suspense fallback={null}>{children}</React.Suspense>
              </ProviderContainer>
            </BrowserRouter>
          </DesignSystemProvider>
        </PermissionsProvider>
      </ApolloProvider>
    </ErrorBoundary>
  )
}
