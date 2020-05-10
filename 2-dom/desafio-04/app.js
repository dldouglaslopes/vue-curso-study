new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		barra6: {
			backgroundColor:'red',
			height: '50px',
			width: '50px' 
		},
		contador6: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1== 'destaque'?
						'encolher' : 'destaque'
			},1000)
		},
		iniciarProgresso() {
			const temporizador = setInterval(() => {
				if( this.contador6 != 8){
					this.contador6++;
					this.barra6.width = 50 * this.contador6 + 'px';
				}
				else{
					clearInterval(temporizador)
				}
			},1000)
		},
		setPerigo(event){
			if(event.target.value == "true"){
				this.perigo = true
			}
			else if(event.target.value == "false"){
				this.perigo = false
			}
		}
	}
})
