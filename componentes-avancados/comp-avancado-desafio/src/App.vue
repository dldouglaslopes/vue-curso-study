<template>
	<div id="app">
		<span>
			<button class="vermelho" @click="ativarVermelho">{{vermelho}}</button>
			<button class="verde" @click="ativarVerde">{{verde}}</button>
			<button class="azul" @click="ativarAzul">{{azul}}</button>
		</span>
		
		<Vermelho v-if="flagVermelho"> 
			<div slot="vermelho"> {{vermelho}} </div> 
		</Vermelho>

		<Verde v-else-if="flagVerde">
			<div slot="verde"> {{verde}} </div> 
		</Verde>

		<Azul v-else-if="flagAzul">
			<div slot="azul"> {{azul}} </div> 
		</Azul>
	</div>
</template>

<script>
import Vermelho from './components/Vermelho.vue'
import Verde from './components/Verde.vue'
import Azul from './components/Azul.vue'

export default {
	name: 'app',
	components: { Vermelho, Verde, Azul },
	data(){
		return {
			vermelho: 'Conteúdo Componente Vermelho',
			verde: 'Conteúdo Componente Verde',
			azul: 'Conteúdo Componente Azul',
			flagVermelho: false,
			flagVerde: false,
			flagAzul: false
		}
	},
	methods:{
		ativarVermelho(){
			this.flagVermelho = true
			this.flagVerde = false
			this.flagAzul = false
		},
		ativarVerde(){
			this.flagVermelho = false
			this.flagVerde = true
			this.flagAzul = false
		},
		ativarAzul(){
			this.flagVermelho = false
			this.flagVerde = false
			this.flagAzul = true
		}
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

	.vermelho {
        border: 2px solid red;
        background-color: #f54235;
    }

	.verde {
        border: 2px solid green;
        background-color: #49b057;
    }

	.azul {
        border: 2px solid blue;
        background-color: #2594f0;
    }
</style>
