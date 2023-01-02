import * as React from 'react'

import { Provider as DesignSystemProvider } from '@habx/ui-core'

import { ProviderContainer } from './Provider.style'

export const Providers: React.FunctionComponent<
  React.PropsWithChildren<{}>
> = ({ children }) => {
  return (
    <DesignSystemProvider>
      <ProviderContainer>
        <React.Suspense fallback={null}>{children}</React.Suspense>
      </ProviderContainer>
    </DesignSystemProvider>
  )
}
