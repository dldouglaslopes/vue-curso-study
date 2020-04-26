new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito: false
	},
	methods: {
		iniciarEfeito() {
			this.aplicarEfeito = !aplicarEfeito
			return {
				destaque: this.aplicarEfeito, encolher: !this.aplicarEfeito
			}
		},
		iniciarProgresso() {

		}
	}
})
