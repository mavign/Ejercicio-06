console.log('\nDesafío 06 - Ejercicio c')


var cantidadDeGatos = 10
var cantidadDePasos = 4


for (var nGatos = 1; nGatos <= cantidadDeGatos; nGatos++) {

    var pasos = (nGatos % 2 == 0 ? '🐈⬛ ' : '🐈 ')



    for (var nPasos = 1; nPasos <= cantidadDePasos; nPasos++) {
        pasos = pasos + '🐾'

    }


    console.log('Gato #' + nGatos + ': ' + pasos)
}