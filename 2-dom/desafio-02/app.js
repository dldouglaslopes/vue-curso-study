new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        enviarAlerta() {
            alert('Alerta')
        },
        modificarValor(event){
            this.valor = event.target.value
        }
    }
})