function buscarImagem() {
  let data = $('#data').val()
  let imagens = $('#imagens')
  let titulo = $('#titulo-imagem')
  let texto = $('#texto-imagem')
  let dataValor = $('#data-valor')


  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=XnAgwqooFbXp4A6DFWFzbjxwI8VfeehnZvtKtCLt&date=${data}`,
    success: function (response) {
      imagens.attr('src', response.url)
      titulo.text(response.title)
      texto.text(response.explanation)
      dataValor.text(data)
      
    },
    error: function (error) {
      console.log(error);
    }
  })


}
let botao = $('#botao')
botao.click(()=>{
  let rodape = $('#rodape')
  rodape.css('display', 'flex')
  return buscarImagem()
}) 
