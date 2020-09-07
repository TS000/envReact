import { addParameters, addDecorator } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { contexts } from './contexts'

addParameters({
  backgrounds: [
    { name: 'Default Theme', value: '#fff', default: true },
    { name: 'Dark Theme ', value: '#000' }
  ]
})

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(withContexts(contexts))
