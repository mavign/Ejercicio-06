console.log('\nDesafío 06 - Ejercicio b')


var cantidadDeGatos = 10
var cantidadDePasos = 4


for (var nGatos = 1; nGatos <= cantidadDeGatos; nGatos++) {

    var pasos = '🐈 '



    for (var nPasos = 1; nPasos <= cantidadDePasos; nPasos++) {
        pasos = pasos + '🐾'

    }


    console.log('Gato #' + nGatos + ': ' + pasos)
}
