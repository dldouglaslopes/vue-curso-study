import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('evento', {
	bind(el, binding, vnode) {
		el.onclick = function () {
			binding.value();
		}
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
