import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Menu from '@/components/template/Menu.vue'
import Desafio from '@/components/template/Desafio.vue'
import Fotos from '@/components/widgets/Fotos.vue'
import Curso from '@/components/template/Curso.vue'

Vue.config.productionTip = false

Vue.component('app-menu', Menu)
Vue.component('app-desafio', Desafio)
Vue.component('app-fotos', Fotos)
Vue.component('app-curso', Curso)

new Vue({
  render: h => h(App),
}).$mount('#app')
