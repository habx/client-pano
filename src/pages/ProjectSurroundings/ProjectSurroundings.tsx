import * as React from 'react'

import { Loader } from '@habx/ui-core'

import {
  PanoramaManifest,
  SurroundingsPanoViewer,
} from '@/components/molecules/SurroundingsPanoViewer'

const TEST_PROJECT_SLUG = 'caen-detolle'
export const ProjectSurroundings: React.FunctionComponent = () => {
  const [manifest, setManifest] = React.useState<PanoramaManifest>()
  React.useEffect(() => {
    const getManifest = async () => {
      const res = await fetch(
        `${import.meta.env.BASE_URL}/${TEST_PROJECT_SLUG}/manifest.json`
      )
      setManifest(await res.json())
    }
    getManifest()
  }, [])

  if (!manifest) {
    return <Loader />
  }
  return (
    <SurroundingsPanoViewer
      manifest={manifest}
      projectSlug={TEST_PROJECT_SLUG}
    />
  )
}
