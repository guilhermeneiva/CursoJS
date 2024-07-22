function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO]')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ``
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-homem-bebe.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'foto-homem-jovem.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', 'foto-homem-adulto.jpg')
      } else {
        img.setAttribute('src', 'foto-homem-idoso.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-mulher-bebe.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'foto-mulher-jovem.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', 'foto-mulher-adulta.jpg')
      } else {
        img.setAttribute('src', 'foto-mulher-idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}