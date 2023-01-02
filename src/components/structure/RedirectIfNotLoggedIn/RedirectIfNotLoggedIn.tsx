import { isFunction } from 'lodash'
import * as React from 'react'

import { useAuthRedirect } from '@habx/lib-client-acl'

export const RedirectIfNotLoggedIn: React.FunctionComponent<{
  children: React.ReactNode
}> = ({ children }) => {
  const { isLoading } = useAuthRedirect(
    { permissions: [] },
    { organization: 'habx' }
  )

  console.warn('useAuthRedirect is currently using habx organization') // eslint-disable-line

  if (isLoading) {
    return null
  }

  return isFunction(children) ? children() : children
}
