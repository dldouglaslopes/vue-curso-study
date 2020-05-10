export default {
    computed: {
		trocasEspacos() {
			return this.str.split(' ').join(',')
		},
		tamanhoStr() {
			let  array = this.str.split(' ');
			for (let index = 0; index < array.length; index++) {
				const qtd = array[index].length;
				array[index] += ' (' + qtd + ') '
			}
			return array.join('')
		}
	}
}