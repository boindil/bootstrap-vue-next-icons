<h1 align="center">BootstrapVue 3 icons</h1>
<p align="center">Implementation of Vue 3, BootstrapIcons and Typescript</p>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/@boindil/bootstrap-vue-next-icons">
    <img src="https://flat.badgen.net/npm/v/@boindil/bootstrap-vue-next-icons" alt="Current version">
  </a>
  <a href="https://v3.vuejs.org/">
    <img src="https://flat.badgen.net/badge/vue.js/3.0.x/4fc08d" alt="Vue.js version">
  </a>

  <a href="https://github.com/boindil/bootstrap-vue-next-icons/actions?workflow=Tests">
    <img src="https://flat.badgen.net/github/status/boindil/bootstrap-vue-next-icons" alt="Build status">
  </a>

  <br>

  <a href="https://www.npmjs.com/package/@boindil/bootstrap-vue-next-icons">
    <img src="https://flat.badgen.net/npm/dt/@boindil/bootstrap-vue-next-icons" alt="npm downloads">
  </a>
  <a href="https://www.npmjs.com/package/@boindil/bootstrap-vue-next-icons">
    <img src="https://flat.badgen.net/npm/dw/@boindil/bootstrap-vue-next-icons" alt="npm weekly downloads">
  </a>
</p>

# Why BootstrapVueNextIcons?

BootstrapVueNextIcons is an attempt to have the icons from [BootstrapVue](https://bootstrap-vue.org/) components as a drop-in replacement in Vue3 and typescript. The original work of [BootstrapVueNext](https://github.com/bootstrap-vue/bootstrap-vue-next) was used as a starting point, since a lot of work was done here already.

This library is heavily inspired by **BootstrapVue** and **BootstrapVueNext**. Originally the plan was to integrate this into the original project, but that has been abandoned recently as the decision was made to use [UnpluginIcon](https://github.com/antfu/unplugin-icons) instead.

# Install

```console
# NPM
npm i --save bootstrap-icons @boindil/bootstrap-vue-next-icons

# Yarn
yarn add bootstrap-icons @boindil/bootstrap-vue-next-icons

# PNPM
pnpm add bootstrap-icons @boindil/bootstrap-vue-next-icons
```

# Usage

The recommended usage method is to use the provided resolver, which results in automatic treeshaking without any hassle.
```console
// vite.config.js/ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextIconsResolver } from '@boindil/bootstrap-vue-next-icons'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [BootstrapVueNextIconsResolver()]
    })
  ]
})
```

It seems, that vite 3.x has problems building when using the resolver. Please use vite 4.x instead.

# Contribute 🙌

If you want to contribute you can:

- submit an [issue](https://github.com/boindil/bootstrap-vue-next-icons/issues/new)
- or better, a [pull request](https://github.com/boindil/bootstrap-vue-next-icons/pulls)

Read our [Contribution Guide](https://github.com/boindil/bootstrap-vue-next-icons/blob/main/CONTRIBUTING.md) on how to start helping

# License

Released under the MIT [Licence](./LICENSE). Copyright (c) BootstrapVueNextIcons.
