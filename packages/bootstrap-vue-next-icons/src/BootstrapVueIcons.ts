// --- BEGIN AUTO-GENERATED FILE ---
//
// @IconsVersion: 1.11.3
// @Generated: 2024-03-26T00:37:03.805Z
//
// This file is generated on each build. Do not edit this file!

import type {App, Plugin} from 'vue'
import * as Components from './components'
import './styles/styles.scss'

// All available components
// Keep this list in sync with /components/index.ts please
import BIcon from './components/BIcon/BIcon.vue'
import BIconstack from './components/BIcon/BIconstack.vue'

type ComponentType = keyof typeof Components

// Export components
export {BIcon, BIconstack}

// Export types
export type {Animation, ColorVariant, IconSize, TextColorVariant} from './types'

// Export resolver
export {BootstrapVueNextIconsResolver} from './resolver/bootstrap-vue-next-icons'

// Inject all components into the global @vue/runtime-core
// This allows intellisense in templates w/out direct importing
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BIcon: typeof BIcon
    BIconstack: typeof BIconstack
  }
}

// Main app plugin
const plugin: Plugin = {
  // TODO: use options in the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  install(app: App) {
    const componentKeys = Object.keys(Components) as unknown as ComponentType[]
    componentKeys.forEach((name) => {
      const component = Components[name]
      app.component(name, component)
    })
  },
}

export * from './components'
export * as Components from './components'
export {plugin as BootstrapVueNextIcons}
export default plugin

// --- END AUTO-GENERATED FILE ---
