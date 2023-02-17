<script lang="ts">
import {defineComponent, h, type PropType, type VNode, type VNodeArrayChildren} from 'vue'
import normalizeSlot from '../../utils/normalizeSlot'
import {type TextColorVariant} from '../../types'
import {ICON_COMMON_PROPS} from '../../constants/icon'
import BIconBase from './BIconBase.vue'

export default /* #__PURE__ */ defineComponent({
  name: 'BIconstack',
  components: {BIconBase},
  props: {
    ...ICON_COMMON_PROPS,
    content: {
      type: [String, Object] as PropType<string | number | boolean | VNode | VNodeArrayChildren>,
      required: false,
    },
    title: {type: String, required: false, default: ''},
    variant: {type: String as PropType<TextColorVariant>, required: false, default: ''},
  },
  setup(props, {slots}) {
    return () =>
      h(
        BIconBase,
        {
          ...props,
          class: 'b-icon-stack',
        },
        {
          default: () => normalizeSlot('default', {}, slots) || '',
        }
      )
  },
})
</script>
