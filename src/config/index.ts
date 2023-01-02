import { get, has, mapValues } from 'lodash'

import { configCommon } from './config.common'
import { configDev } from './config.dev'
import { configProd } from './config.prod'

const buildConfig = () => {
  const envConfig = import.meta.env.DEV ? configDev : configProd

  const walk = (obj: Config | KeyConfig, path = ''): string | object => {
    if (typeof obj !== 'object') {
      // eslint-disable-next-line no-console
      console.error('Invalid configuration : all config keys should be objects')
    }

    if (has(obj, 'default')) {
      if (has(envConfig, path)) {
        return get(envConfig, path)
      }

      return obj.default
    }

    return mapValues(obj, (value, key) =>
      walk(value, `${path === '' ? '' : `${path}.`}${key}`)
    )
  }

  return walk(configCommon)
}

const fullConfig = buildConfig()

export const config = {
  get: (path: string) => get(fullConfig, path),
}

export interface KeyConfig {
  env?: string
  default: any
}

export interface Config {
  [key: string]: Config | KeyConfig
}
