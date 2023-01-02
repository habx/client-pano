import * as React from 'react'

import { Loader, Title } from '@habx/ui-core'

import {
  PanoramaManifest,
  SurroundingsPanoViewer,
} from '@/components/molecules/SurroundingsPanoViewer'
import { CenteredElement } from '@/pages/ProjectSurroundings/ProjectSurroundings.style'

export const ProjectSurroundings: React.FunctionComponent = () => {
  const projectSlug = new URLSearchParams(window.location.search).get(
    'projectSlug'
  )
  const [manifest, setManifest] = React.useState<PanoramaManifest>()
  React.useEffect(() => {
    const getManifest = async () => {
      const res = await fetch(
        `${import.meta.env.BASE_URL}/${projectSlug}/manifest.json`
      )
      setManifest(await res.json())
    }
    getManifest()
  }, [])

  if (!projectSlug) {
    return (
      <CenteredElement>
        <Title type="section">Missing project slug</Title>
      </CenteredElement>
    )
  }
  if (!manifest) {
    return <Loader />
  }
  return (
    <SurroundingsPanoViewer manifest={manifest} projectSlug={projectSlug} />
  )
}
