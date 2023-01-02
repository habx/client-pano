import { Scene } from 'marzipano'
import * as React from 'react'

import { PanoLevel } from '@/hooks/useMarzipano/useMarzipano.interface'

export const PanoSceneContext = React.createContext<Scene | null>(null)
export const PanoSceneDataContext = React.createContext<{
  levels: PanoLevel[]
  baseUrl?: string
} | null>(null)
