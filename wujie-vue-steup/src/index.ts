import { defineComponent, h, getCurrentInstance, onMounted, watch, onBeforeUnmount } from 'vue'
import type { PropType } from 'vue'
import { startApp, bus } from 'wujie'
import { Props } from './type'
const wujie = defineComponent({
  props: {
    width: { type: String, default: "" },
    height: { type: String, default: "" },
    name: { type: String, default: "", required: true },
    loading: { type: HTMLElement, default: undefined },
    url: { type: String, default: "", required: true },
    sync: { type: Boolean, default: undefined },
    prefix: { type: Object, default: undefined },
    alive: { type: Boolean, default: undefined },
    props: { type: Object, default: undefined },
    attrs: { type: Object, default: undefined },
    replace: { type: Function as PropType<Props['replace']>, default: undefined },
    fetch: { type: Function as PropType<Props['fetch']>, default: undefined },
    fiber: { type: Boolean, default: undefined },
    degrade: { type: Boolean, default: undefined },
    plugins: { type: Array as PropType<Props['plugins']>, default: null },
    beforeLoad: { type: Function as PropType<Props['beforeLoad']>, default: null },
    beforeMount: { type: Function as PropType<Props['beforeMount']>, default: null },
    afterMount: { type: Function as PropType<Props['afterMount']>, default: null },
    beforeUnmount: { type: Function as PropType<Props['beforeUnmount']>, default: null },
    afterUnmount: { type: Function as PropType<Props['afterUnmount']>, default: null },
    activated: { type: Function as PropType<Props['activated']>, default: null },
    deactivated: { type: Function as PropType<Props['deactivated']>, default: null },
  },
  setup(props, { emit }) {
    // 获取 this
    const instance = getCurrentInstance()
    const init = () => {
      // 微前端初始化方法就可以了
      startApp({
        name: props.name,
        url: props.url,
        el: instance?.refs.wujie as HTMLElement,
        loading: props.loading,
        alive: props.alive,
        fetch: props.fetch,
        props: props.props,
        attrs: props.attrs,
        replace: props.replace,
        sync: props.sync,
        prefix: props.prefix,
        fiber: props.fiber,
        degrade: props.degrade,
        plugins: props.plugins,
        beforeLoad: props.beforeLoad,
        beforeMount: props.beforeMount,
        afterMount: props.afterMount,
        beforeUnmount: props.beforeUnmount,
        afterUnmount: props.afterUnmount,
        activated: props.activated,
        deactivated: props.deactivated,
      })
    }
    const handlerEmit = (event: string, ...args: any[]) => {
      emit(event, ...args)
    }

    onMounted(() => {
      // 通过bus监听事件来触发 emit 
      bus.$onAll(handlerEmit)
      // 初始化微前端
      init()
    })

    // 监听 name、url 变化，一旦变化需要重新渲染
    watch(([props.name, props.url]), () => {
      init()
    })

    onBeforeUnmount(() => {
      // 销毁时，清除所有事件监听
      bus.$offAll(handlerEmit)
    })
    return () => h('div', {
      style: {
        width: props.width,
        height: props.height
      },
      ref: "wujie" // 方便之后读取
    })
  }
})
// 给 app.use 使用
wujie.install = function(app) {
  app.component("WujieVue", wujie);
};
export default wujie