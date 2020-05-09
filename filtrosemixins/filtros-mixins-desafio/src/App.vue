<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{str | trocas}}</p>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{str | tamanho}}</p>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{trocasEspacos}}</p>
		<p>{{tamanhoStr}}</p>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import frasesMixin from './frasesMixin.js'

export default {
	mixins: [frasesMixin],
	filters:{
		trocas(valor){
			return valor.split(' ').join(',')
		},
		tamanho(valor) {
			let  array = valor.split(' ');
			for (let index = 0; index < array.length; index++) {
				const qtd = array[index].length;
				array[index] += ' (' + qtd + ') '
			}
			return array.join('')
		}
	},
	data(){
		return {
			str: 'Casa é amarela'
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
	font-size: 2.5rem;
}
</style>
