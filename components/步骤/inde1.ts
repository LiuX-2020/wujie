window.onload = () => { 
  class WuJie extends HTMLElement {
    constructor() {
      super()
      // 创建一个 shadow ，并且设置为 open 模式，开启样式隔离,这样就不会影响到外层的样式
      const dom = this.attachShadow({ mode: 'open' })
      let template = document.querySelector('#wujie') as HTMLTemplateElement
      dom.appendChild(template.content.cloneNode(true))
    }
  }
  window.customElements.define('wu-jie', WuJie)
}