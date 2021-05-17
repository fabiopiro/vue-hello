/*
Descrizione:
Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un'immagine, presa anch'essa da un data.
*/

var app = new Vue (
    {
        // dichiaro il container di VUE
        el: "#root",
        // dichiaro le variabili di VUE
        data: {
            message: "Hello World!",
            image:"https://vuejs.org/images/logo.png",
            
            color: "red"
        },
        // dichiaro le funzioni di VUE
        methods: {

            cambiaMessaggio: function () {

                if (this.message == "Hello World!") {
                    this.message = "Ciao Mondo!";
                } else {
                    this.message = "Hello World!";
                }
            },

            cambiaColore: function () {
                if (this.color == "red") {
                    this.color = "blue";
                } else {
                    this.color = "red";
                }
            },

            cambiaImmagine: function () {
                if (this.image == "https://vuejs.org/images/logo.png") {
                    this.image = "https://image.freepik.com/premium-vector/pixel-art-pizza-fast-food-bit-game-item-white-background_360488-32.jpg";
                } else {
                    this.image = "https://vuejs.org/images/logo.png";
                }
            }
        }
    }
)