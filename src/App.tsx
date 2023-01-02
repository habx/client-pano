import { Providers } from '@/components/structure'
import { Template } from '@/pages/Template'
import { GlobalStyle } from '@/style/global'

export const App = () => {
  return (
    <Providers>
      <Template />
      <GlobalStyle />
    </Providers>
  )
}
