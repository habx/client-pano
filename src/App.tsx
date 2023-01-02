import { Providers } from '@/components/structure'
import { ProjectSurroundings } from '@/pages/ProjectSurroundings'
import { GlobalStyle } from '@/style/global'

export const App = () => {
  return (
    <Providers>
      <ProjectSurroundings />
      <GlobalStyle />
    </Providers>
  )
}
