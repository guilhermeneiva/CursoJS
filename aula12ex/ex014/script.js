function carregar() {
  var mensagem = document.getElementById('mensagem')
  var imagem = document.getElementById("imagem")
  var data = new Date()
  var hora = data.getHours()

  mensagem.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora < 12) {
    imagem.src = 'fotomanha.jpg'
    document.body.style.background = '#A68D65'
  } else if (hora >= 12 && hora < 18) {
    imagem.src = 'fototarde.jpg'
    document.body.style.background = '#666C4A'
  } else {
    imagem.src = 'fotonoite.jpg'
    document.body.style.background = '#2C3A3D'
  }
}