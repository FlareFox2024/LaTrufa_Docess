function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //html.classList.add("dark")
  //} //else if (html.classList.contains("dark")) {
  //html.classList.remove("dark")
  //html.classList.add("light")
  //}

  //ou:

  html.classList.toggle("light")

  //se tiver light mode, adicionar a imagem light.
  //img.setAttribute('src', 'assets/light.png')
  //se tiver dark mode, manter a imagem normal.
  //img.setAttribute('src', 'assets/avatar.png')

  //Desafio: trocar o atributo "alt" da imagem por outro texto.

  //text.setAttribute('alt', 'Mesma foto de perfil.')
}
