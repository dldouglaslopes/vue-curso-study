new Vue({
	el: '#projeto',
	data: {
        widthJogador: '100%',
        widthMonstro: '100%',
        barraJogador: 100,
        barraMonstro: 100,
        fimDeJogo: true,
        vencedor: '',
        messages: []
    },
    methods: {
        novoJogo() {
            this.widthJogador = '100%'
            this.widthMonstro = '100%'
            this.barraJogador = 100
            this.barraMonstro = 100
            this.fimDeJogo = false
            this.vencedor = ''
            this.messages = []
        },
        desistir() {
            this.fimDeJogo = true
        },
        curar() {
            let valorJogador =  Math.floor((Math.random() * 10) + 1)
            let cura = Math.floor((Math.random() * 10) + 1)
            
            this.barraJogador = this.barraJogador - valorJogador + cura
            this.messages.unshift('MONSTRO ATINGIU JOGADOR COM ' + valorJogador)

            this.messages.unshift('JOGADOR GANHOU FORÇA DE ' + cura)

            this.widthJogador = this.barraJogador + "%"
            this.widthMonstro = this.barraMonstro + "%"

            if (this.barraJogador < 0) {
                this.widthJogador = 0 + "%"
                this.barraJogador = 0
            }
            
            if (this.barraMonstro < 0) {
                this.widthMonstro = 0 + "%"
                this.barraMonstro = 0
            }

            if (this.barraJogador == 0) {
                this.vencedor = 'VOCÊ PERDEU'
                this.fimDeJogo = true
            }
            else if(this.barraMonstro == 0){
                this.vencedor = 'VOCÊ VENCEU'
                this.fimDeJogo = true
            }
        },
        ataqueEspecial() {
            let valorJogador =  Math.floor((Math.random() * 10) + 1)
            let valorMonstro =  Math.floor((Math.random() * 10) + 5)
            
            this.barraJogador = this.barraJogador - valorJogador
            this.messages.unshift('MONSTRO ATINGIU JOGADOR COM ' + valorJogador)

            this.barraMonstro = this.barraMonstro - valorMonstro
            this.messages.unshift('JOGADOR ATINGIU MONSTRO COM ' + valorMonstro)

            this.widthJogador = this.barraJogador + "%"
            this.widthMonstro = this.barraMonstro + "%"

            if (this.barraJogador < 0) {
                this.widthJogador = 0 + "%"
                this.barraJogador = 0
            }
            
            if (this.barraMonstro < 0) {
                this.widthMonstro = 0 + "%"
                this.barraMonstro = 0
            }

            if (this.barraJogador == 0) {
                this.vencedor = 'VOCÊ PERDEU'
                this.fimDeJogo = true
            }
            else if(this.barraMonstro == 0){
                this.vencedor = 'VOCÊ VENCEU'
                this.fimDeJogo = true
            }
        },
        ataque() {	
            let valorJogador =  Math.floor((Math.random() * 10) + 1)
            let valorMonstro =  Math.floor((Math.random() * 10) + 1)
            
            this.barraJogador = this.barraJogador - valorJogador
            this.messages.unshift('MONSTRO ATINGIU JOGADOR COM ' + valorJogador)

            this.barraMonstro = this.barraMonstro - valorMonstro
            this.messages.unshift('JOGADOR ATINGIU MONSTRO COM ' + valorMonstro)

            this.widthJogador = this.barraJogador + "%"
            this.widthMonstro = this.barraMonstro + "%"

            if (this.barraJogador < 0) {
                this.widthJogador = 0 + "%"
                this.barraJogador = 0
            }
            
            if (this.barraMonstro < 0) {
                this.widthMonstro = 0 + "%"
                this.barraMonstro = 0
            }

            if (this.barraJogador == 0) {
                this.vencedor = 'VOCÊ PERDEU'
                this.fimDeJogo = true
            }
            else if(this.barraMonstro == 0){
                this.vencedor = 'VOCÊ VENCEU'
                this.fimDeJogo = true
            }
		}
    }    
});