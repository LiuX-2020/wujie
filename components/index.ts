window.onload = () => {
  class WuJie extends HTMLElement {
    constructor() {
      super()
      // 创建一个 shadow ，并且设置为 open 模式，开启样式隔离,这样就不会影响到外层的样式
      const dom = this.attachShadow({ mode: 'open' })
      let template = document.querySelector('#wujie') as HTMLTemplateElement
      dom.appendChild(template.content.cloneNode(true))
      console.log(this.getAttr('url'), this.getAttr('age'))
    }
    private getAttr(attr: string) {
      return this.getAttribute(attr)
    }
    //生命周期自动触发有东西插入
    connectedCallback() {
      console.log('类似于vue 的mounted');
    }
    //生命周期卸载
    disconnectedCallback() {
      console.log('类似于vue 的destory');
    }
    //跟watch类似
    attributeChangedCallback(name: any, oldVal: any, newVal: any) {
      console.log('跟vue 的watch 类似 有属性发生变化自动触发');
    }
  }
  window.customElements.define('wu-jie', WuJie)
}