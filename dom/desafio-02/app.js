new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Alerta de botao pressionado!')
        },
        escutaValor(event) {
            this.valor = event.target.value
        }
    },
})