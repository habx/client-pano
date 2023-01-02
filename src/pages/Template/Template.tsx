import * as React from 'react'

import { Title } from '@habx/ui-core'

export const Template: React.FunctionComponent<TemplateInterface> = () => {
  return (
    <Title type="section" style={{ margin: 'auto' }}>
      Hello world !{' '}
      <span role="img" aria-label={'hello'}>
        🌞
      </span>
    </Title>
  )
}

interface TemplateInterface {}
