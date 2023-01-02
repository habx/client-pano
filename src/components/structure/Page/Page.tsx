import * as React from 'react'

import { Loader } from '@habx/ui-core'

import { PageContainer, PageContent } from './Page.style'

export const Page: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <PageContainer backgroundColor="#FFFFFF">
    <React.Suspense fallback={<Loader size="large" />}>
      <PageContent id="page-content">{children}</PageContent>
    </React.Suspense>
  </PageContainer>
)
