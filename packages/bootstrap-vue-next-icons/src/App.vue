<template>
  <div>
    <header class="bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
      <div class="container-fluid d-flex align-items-center">
        <h1 class="d-flex align-items-center fs-4 text-white mb-0">BIcon</h1>
      </div>
    </header>
    <main class="container">
      <h2 class="my-4">
        <a name="props" />
        Props
      </h2>
      <ul class="list">
        <li>
          <a href="#icon">
            <code>icon</code>
          </a>
        </li>
        <li>
          <a href="#variant">
            <code>variant</code>
          </a>
        </li>
        <li>
          <a href="#size">
            <code>size</code>
          </a>
        </li>
        <li>
          <a href="#flip">
            <code>flip-#</code>
          </a>
        </li>
        <li>
          <a href="#rotate">
            <code>rotate</code>
          </a>
        </li>
        <li>
          <a href="#animation">
            <code>animation</code>
          </a>
        </li>
      </ul>
      <h3 class="my-4">
        <a name="icon" />
        <code>icon</code>
      </h3>
      <ul class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        <li v-for="(icon, index) in icons" :key="index" class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon :icon="icon" size="2x" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">
            {{ icon }}
          </div>
        </li>
      </ul>
      <h3 class="my-4">
        <a name="variant" />
        <code>variant</code>
      </h3>
      <ul class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        <li v-for="(variant, index) in variants" :key="index" class="col mb-4">
          <div
            class="p-3 py-4 mb-2 bg-light text-center rounded"
            :class="{'bg-light': !isDarkVariant(variant), 'bg-dark': isDarkVariant(variant)}"
          >
            <b-icon :variant="variant" size="2x" icon="exclamation-circle-fill" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">
            {{ variant }}
          </div>
        </li>
      </ul>
      <h3 class="my-4">
        <a name="size" />
        <code>size</code>
      </h3>
      <ul class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        <li v-for="(size, index) in sizes.slice().reverse()" :key="index" class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon :size="size" icon="exclamation-circle-fill" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">
            {{ size }}
          </div>
        </li>
      </ul>
      <h3 class="my-4">
        <a name="flip" />
        <code>flip-#</code>
      </h3>
      <ul class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="bar-chart-fill" size="2x" flip-h />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">flip-h</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="bar-chart-fill" size="2x" flip-v />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">flip-v</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="bar-chart-fill" size="2x" flip-h flip-v />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">flip-h + flip-v</div>
        </li>
      </ul>
      <h3 class="my-4">
        <a name="rotate" />
        <code>rotate</code>
      </h3>
      <ul class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="camera" size="2x" rotate="90" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">90</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="camera" size="2x" rotate="-90" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">-90</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="camera" size="2x" rotate="180" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">180</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="camera" size="2x" rotate="270" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">270</div>
        </li>
      </ul>
      <h3 class="my-4">
        <a name="animation" />
        <code>animation</code>
      </h3>
      <ul class="row row-cols-3 row-cols-sm-4 row-cols-lg-6 row-cols-xl-8 list-unstyled list">
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="three-dots" size="4x" animation="cylon" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">cylon</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="three-dots-vertical" size="4x" animation="cylon-vertical" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">cylon-vertical</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="star-fill" size="4x" animation="fade" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">fade</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="arrow-clockwise" size="4x" animation="spin" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">spin</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="arrow-counterclockwise" size="4x" animation="spin-reverse" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">spin-reverse</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="arrow-clockwise" size="4x" animation="spin-pulse" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">spin-pulse</div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="arrow-counterclockwise" size="4x" animation="spin-reverse-pulse" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">
            spin-reverse-pulse
          </div>
        </li>
        <li class="col mb-4">
          <div class="p-3 py-4 mb-2 bg-light text-center rounded">
            <b-icon icon="circle-fill" size="4x" animation="throb" />
          </div>
          <div class="name text-muted text-decoration-none text-center pt-1">throb</div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import * as Components from './components'
import BIcon from './components/BIcon/BIcon.vue'
import {IconSize, TextColorVariant} from './types'

export default defineComponent({
  name: 'App',
  components: {BIcon},

  setup() {
    const isDarkVariant = (variant: TextColorVariant): boolean =>
      variant === 'light' || variant.includes('white')

    return {isDarkVariant}
  },
  data: () => {
    const data: {
      icons: string[]
      variants: TextColorVariant[]
      sizes: IconSize[]
    } = {
      icons: Object.keys(Components).filter((comp) => !['BIcon', 'BIconstack'].includes(comp)),
      variants: [
        'success',
        'warning',
        'danger',
        'info',
        'primary',
        'secondary',
        'dark',
        'light',
        'white',
        'body',
        'muted',
        'black-50',
        'white-50',
        'reset',
      ],
      sizes: ['sm', 'md', 'lg', '2x', '3x', '4x', '5x'],
    }

    return data
  },
})
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>
