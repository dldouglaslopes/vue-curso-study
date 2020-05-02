import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$email('idadeMudou', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})