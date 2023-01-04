// NodeJS script to create the icon components modules:
//   src/components/BIcon/generated/icons.ts
//   src/components/BIcon/index.ts
//   src/BootstrapVueIcons.ts
//
// Source is bootstrap-icons/icons

'use strict'

const fs = require('fs').promises
const path = require('path')
const _template = require('lodash/template')
const {pascalCase} = require('../src/utils/string')

const bootstrapIconsBase = path.dirname(require.resolve('bootstrap-icons/package.json'))
const bootstrapIconsDir = path.join(bootstrapIconsBase, 'icons/')
const bsIconsMetaFile = path.join(bootstrapIconsBase, 'package.json')

const bvBase = path.resolve(__dirname, '..')
const bvSrc = path.join(bvBase, 'src')
const bvComponents = path.join(bvSrc, 'components')
const iconsFile = path.resolve(bvComponents, 'BIcon', 'generated', 'icons.ts')
const pluginFile = path.resolve(bvSrc, 'BootstrapVueIcons.ts')
const typesFile = path.resolve(bvComponents, 'index.ts')

// --- Constants ---

// Bootstrap Icons package.json
const bsIconsPkg = require(bsIconsMetaFile)

// Template for `src/components/BIcon/generated/icons.ts`
const iconsTemplateFn = _template(`// --- BEGIN AUTO-GENERATED FILE ---
//
// @IconsVersion: <%= version %>
// @Generated: <%= created %>
//
// This file is generated on each build. Do not edit this file!

/*!
 * BootstrapVue Icons, generated from Bootstrap Icons <%= version %>
 *
 * @link <%= homepage %>
 * @license <%= license %>
 * https://github.com/twbs/icons/blob/master/LICENSE.md
 */

import { makeIcon } from '../helper/makeIcon'

<% componentNames.forEach(component => { %>
// eslint-disable-next-line
export const <%= component %> = /*#__PURE__*/ makeIcon(
  '<%= icons[component].name %>',
  '<%= icons[component].content %>'
)
<% }) %>
// --- END AUTO-GENERATED FILE ---
`)

// Template for `src/BootstrapVueIcons.ts`
const pluginTemplateFn = _template(`// --- BEGIN AUTO-GENERATED FILE ---
//
// @IconsVersion: <%= version %>
// @Generated: <%= created %>
//
// This file is generated on each build. Do not edit this file!

import {App, Plugin} from 'vue'
import Components from './components'
import './styles/styles.scss'

// All available components
// Keep this list in sync with /components/index.ts please
import BIcon from './components/BIcon/BIcon.vue'
import BIconstack from './components/BIcon/BIconstack.vue'
import {
  <%= componentNames.join(', ') %>
} from './components/BIcon/generated/icons'

// Export components
export {BIcon, BIconstack, <%= componentNames.join(', ') %>}

// Export types
export type {Animation, ColorVariant, IconSize, TextColorVariant} from './types'

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
    Object.entries(Components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}

export {plugin as BootstrapVue3Icons}
export default plugin

// --- END AUTO-GENERATED FILE ---
`)

// Template for `src/components/BIcon/index.ts`
const typesTemplateFn = _template(`// --- BEGIN AUTO-GENERATED FILE ---
//
// @IconsVersion: <%= version %>
// @Generated: <%= created %>
//
// This file is generated on each build. Do not edit this file!

import BIcon from './BIcon/BIcon.vue'
import BIconstack from './BIcon/BIconstack.vue'

import {
  <%= componentNames.join(", \\n  ") %>
} from './BIcon/generated/icons'

export {
  <%= componentNames.join(', \\n  ') %>,
  BIcon,
  BIconstack,
}

// --- END AUTO-GENERATED FILE ---
`)

// --- Utility methods ---

// Parses a single SVG File
const processFile = (file, data) =>
  new Promise((resolve, reject) => {
    file = path.join(bootstrapIconsDir, file)
    if (path.extname(file) !== '.svg') {
      resolve()
      return
    }
    const name = pascalCase(path.basename(file, '.svg'))
    const componentName = `BIcon${name}`

    fs.readFile(file, 'utf8')
      .then((svg) => {
        const content = svg
          // Remove <svg ...> and </svg>
          .replace(/<svg[^>]+>/i, '')
          .replace(/<\/svg>/i, '')
          // Remove whitespace between elements
          .replace(/>\s+</g, '><')
          // Fix broken stroke colors in some components
          // Might be fixed in 1.0.0-alpha3 release
          .replace(' stroke="#000"', ' stroke="currentColor"')
          // Remove leading/trailing whitespace
          .trim()
        // Add to the iconsData object
        data.icons[componentName] = {name, content}
        data.componentNames.push(componentName)
        // Resolve
        resolve()
      })
      .catch((error) => reject(error))
  })

// --- Main process ---
const main = async () => {
  // Information needed in the templates
  const today = new Date()
  const data = {
    version: bsIconsPkg.version,
    license: bsIconsPkg.license,
    homepage: bsIconsPkg.homepage,
    created: today.toISOString(),
    componentNames: [],
    icons: {},
  }

  console.log(`  Reading SVGs from bootstrap-icons version ${data.version}`)

  // Read in the list of SVG Files
  const files = await fs.readdir(bootstrapIconsDir)

  // Process the SVG Data for all files
  await Promise.all(files.map((file) => processFile(file, data)))

  // Sort the icon component names
  data.componentNames = data.componentNames.sort()

  console.log(`  Read ${data.componentNames.length} SVGs...`)

  // Write out the files
  console.log('  Creating icon components...')
  await fs.writeFile(iconsFile, iconsTemplateFn(data), 'utf8')
  console.log(`  Wrote to ${iconsFile}`)
  console.log('  Creating icon plugin...')
  await fs.writeFile(pluginFile, pluginTemplateFn(data), 'utf8')
  console.log(`  Wrote to ${pluginFile}`)
  console.log('  Creating type declarations...')
  await fs.writeFile(typesFile, typesTemplateFn(data), 'utf8')
  console.log(`  Wrote to ${typesFile}`)
}

main()
