console.log('\nDesafío 06 - Punto a')

var cantidadDeGatos = 10

for (nGatos = 1; nGatos <= cantidadDeGatos; nGatos++) {


  var resultadoModuloDeNgatos = (nGatos % 3)

  var carita = ''

  switch (resultadoModuloDeNgatos) {
    case 1:
      carita = "😺"
      break
    case 2:
      carita = "😸"
      break
    case 0:
      carita = "😹"
      break

  }


  console.log('Gato #' + nGatos + ': ' + carita)

}

// Otra solución posible

/*   if (resultadoModuloDeNgatos === 0) carita = '😹'
  else if (resultadoModuloDeNgatos === 1) carita = '😺'
  else if (resultadoModuloDeNgatos === 2) carita = '😸' */