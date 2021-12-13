function buscarImagem() {
  let data = $('#data').val()
  let imagens = $('#imagens')
  let titulo = $('#titulo-imagem')
  let texto = $('#texto-imagem')
  let dataValor = $('#data-valor')
  let video = $('#video')
  let cop = $('#copyright')


  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=XnAgwqooFbXp4A6DFWFzbjxwI8VfeehnZvtKtCLt&date=${data}`,
    type: 'GET', 
    contentType: 'application/json',
     success: function (response) {
      titulo.text(response.title)
      texto.text(response.explanation)
      dataValor.text(data)

      let verificaVideo = function () {
        if (response.media_type == 'video') {
          imagens.css('display', 'none')
          video.css('display', 'flex')
          video.attr('src', response.url)
        } else{
          video.css('display', 'none')
          imagens.css('display', 'flex')
          imagens.attr('src', response.url)
        }
      }
      verificaVideo()

     let verificaAutor = function() {
      if (typeof response.copyright === 'undefined' ) {
        cop.text(`Image Credit & Copyright: Autor Desconhecido`)
      } else {
        cop.text(`Image Credit & Copyright: ${response.copyright}`)
      }
     }
     verificaAutor()
      
      
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

