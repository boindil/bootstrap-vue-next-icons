import type {ComponentResolver} from 'unplugin-vue-components/types'

export interface BootstrapVueNextIconsResolverOptions {
  /**
   * Auto import for directives.
   *
   * @default true
   */
  directives?: boolean
}

/**
 * Resolver for BootstrapVueNextIcons
 */
export const BootstrapVueNextIconsResolver = (
  _options: BootstrapVueNextIconsResolverOptions = {}
): Array<ComponentResolver> => {
  const options = {directives: true, ..._options}
  const resolvers: Array<ComponentResolver> = [
    {
      type: 'component',
      resolve: (name: string) => {
        if (name.match(/^BIcon[A-Z]/)) return {name, from: '@boindil/bootstrap-vue-next-icons'}
      },
    },
  ]

  if (options.directives) {
    resolvers.push({
      type: 'directive',
      resolve: (name: string) => {
        if (name.match(/^BIcon[A-Z]/))
          return {name: `v${name}`, from: '@boindil/bootstrap-vue-next-icons'}
      },
    })
  }

  return resolvers
}
