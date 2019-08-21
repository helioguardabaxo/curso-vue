new Vue({
    el: '#desafio',
    data: {
        nome: 'Hélio',
        idade: 33,
        imagem: 'https://pbs.twimg.com/profile_images/975512461192433664/ZthKyZPf_400x400.jpg'
    },
    methods: {
        idadePorTres: function(){
          return this.idade * 3
        },
        numeroRand() {
            return Math.random()
        }
    },
})