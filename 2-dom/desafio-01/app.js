new Vue({
    el: '#desafio',
    data: {
        nome: 'Douglas',
        idade: 26,
        img: 'https://www.ninha.bio.br/biologia/aves/araras/araras_parque_das_aves25.jpg'
    },
    methods: {
        aleatorio: function() {
            return Math.random()
        }
    }
})