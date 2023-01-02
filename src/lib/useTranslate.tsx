import { buildIntl } from '@habx/lib-client-intl'

export const { useTranslate, IntlProvider } = buildIntl<string>({
  prefix: 'client',
  isRoot: true,
})

export default useTranslate
