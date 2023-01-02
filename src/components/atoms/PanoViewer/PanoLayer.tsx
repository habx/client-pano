import { includes, each } from 'lodash'
import Marzipano, { Layer } from 'marzipano'
import * as React from 'react'

import {
  PanoLevel,
  PanoSourceParams,
} from '@/hooks/useMarzipano/useMarzipano.interface'

import { PanoSceneContext, PanoSceneDataContext } from './PanoViewer.context'
import { PanoLayerProps } from './PanoViewer.interface'

export const makeMarzipanoGeometry = (levels: PanoLevel[]) =>
  new Marzipano.CubeGeometry(levels)

export const makeEquirectangularGeometry = () => {
  return new Marzipano.EquirectGeometry([{ width: 9600 }])
}

export const makeMarzipanoSource = (sourceData: PanoSourceParams = {}) => {
  const {
    baseUrl = '',
    urlFunction = '{baseUrl}/{z}/{f}/{y}/{x}.jpg',
    cubeMapPreviewUrl = '{baseUrl}/preview.jpg',
  } = sourceData

  const sourceUrl = urlFunction.replace('{baseUrl}', baseUrl)

  return Marzipano.ImageUrlSource.fromString(
    sourceUrl,
    cubeMapPreviewUrl
      ? {
          cubeMapPreviewUrl: cubeMapPreviewUrl.replace('{baseUrl}', baseUrl),
          retryDelay: 60 * 1000,
        }
      : undefined
  )
}

export const PanoLayer: React.FunctionComponent<PanoLayerProps> = (props) => {
  const { urlFunction = '', cubeMapPreviewUrl = '', geometry = 'cube' } = props

  const scene = React.useContext(PanoSceneContext)
  const sceneData = React.useContext(PanoSceneDataContext)
  const baseUrl = props.baseUrl ?? sceneData?.baseUrl ?? ''

  const currentLayer = React.useRef<Layer | null>(null)
  const loadingLayer = React.useRef<Layer | null>(null)

  const [layersToDestroy] = React.useState<any[]>([])

  const layer = React.useMemo(() => {
    if (!scene || !sceneData) {
      return null
    }

    const layerSource = makeMarzipanoSource({
      baseUrl,
      urlFunction,
      cubeMapPreviewUrl,
    })

    const layerGeometry =
      geometry === 'cube'
        ? makeMarzipanoGeometry(sceneData.levels)
        : makeEquirectangularGeometry()

    return scene.createLayer({
      source: layerSource,
      geometry: layerGeometry,
    })
  }, [scene, sceneData, baseUrl, urlFunction, cubeMapPreviewUrl, geometry])

  const { loadTimeout = 5000, onLoading, onError, maxErrors = 4 } = props

  const destroyLayer = React.useCallback(
    (layerToDestroy: Marzipano.Layer | null) => {
      !includes(layersToDestroy, layerToDestroy) &&
        layersToDestroy.push(layerToDestroy)
    },
    [layersToDestroy]
  )

  const doDestroyLayers = React.useCallback(() => {
    each(layersToDestroy, (layerToDestroy) => {
      try {
        scene && layerToDestroy && scene.destroyLayer(layerToDestroy)
      } catch (err) {
        // nothing to do
      }
    })

    layersToDestroy.length = 0
  }, [scene, layersToDestroy])

  React.useEffect(() => {
    const stage = scene?.viewer().stage()

    const stageRenderCompleteHandler = () => {
      layersToDestroy.length && doDestroyLayers()
    }

    stage?.addEventListener('renderComplete', stageRenderCompleteHandler)

    return () => {
      stage?.removeEventListener('renderComplete', stageRenderCompleteHandler)
    }
  })

  React.useEffect(() => {
    const wasLoading = !!loadingLayer.current

    if (!layer) {
      if (wasLoading) {
        onLoading && onLoading(false)
        loadingLayer.current = null
      }
      destroyLayer(currentLayer.current)
      currentLayer.current = null
    } else {
      const startedLoading = Date.now()

      let numErrors = 0

      const setLoaded = () => {
        layer.removeEventListener('renderComplete', renderCompleteHandler)
        layer.removeEventListener('networkError', networkErrorHandler)

        onLoading && onLoading(false)
      }

      const networkErrorHandler = (_asset: any, err: Error) => {
        numErrors += 1
        if (numErrors <= maxErrors) {
          return
        }

        onError && onError(err)
        setLoaded()
        destroyLayer(layer)
      }

      const renderCompleteHandler = (stable: boolean) => {
        if (loadingLayer.current !== layer) {
          destroyLayer(layer)
          layer.removeEventListener('renderComplete', renderCompleteHandler)
          return
        }

        const dT = Date.now() - startedLoading

        if (!stable && dT < loadTimeout) {
          return
        }

        destroyLayer(currentLayer.current)

        currentLayer.current = layer || null
        loadingLayer.current = null

        layer.setEffects({ opacity: 1.0 })

        setLoaded()
      }

      layer.addEventListener('renderComplete', renderCompleteHandler)
      layer.source().addEventListener('networkError', networkErrorHandler)

      if (!wasLoading) {
        onLoading && onLoading(true)
      }
      layer.setEffects({ opacity: 0.0 })
      loadingLayer.current = layer
    }
  }, [destroyLayer, layer]) // eslint-disable-line

  React.useEffect(
    () => () => {
      if (loadingLayer.current) {
        onLoading?.(false)
      }
    },
    [destroyLayer] // eslint-disable-line
  )
  return null
}
