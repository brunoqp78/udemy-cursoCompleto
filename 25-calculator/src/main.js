// vue busca o main.js

import Vue from 'vue'
import App from './App'

// criar instancia do vue
new Vue({
    // render padrão, gerado pelo Vue. As opções abaixo funcionam também
    render: h => h(App)
}).$mount("#app")

// new Vue({
//  el: '#app',
//  render(createElement){
//      return createElement(App)
//}
//})

// new Vue({
//  render(createElement){
//      return createElement(App)
// }).$mount("#app")
