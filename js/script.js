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
            message: "Hello World!"
        }

    }
)