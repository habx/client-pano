import { withFinalForm } from '@habx/lib-form-helper'
import { TextInput as BaseTextInput } from '@habx/ui-core'

export const TextInput = withFinalForm<string>()(BaseTextInput)
