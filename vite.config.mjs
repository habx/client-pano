import { defineConfig, mergeConfig } from 'vite'

import buildDefaultConfig from '@habx/config-ci-front/vite/client.mjs'

export default defineConfig(async (params) => mergeConfig(await buildDefaultConfig(params), {
  server: {
    port: 3000,
  },
}, true))
