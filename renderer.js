require('whatwg-fetch')

const { clipboard } = require('electron')
const apiKey = 'YOUR_KEY'

const apiURL = (query) => {
  return 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=' + apiKey + '&rating=pg'
}

const copyImageURL = (url) => {
  clipboard.writeText(url)
  document.querySelector('.copy').classList.add('show')
  setTimeout(function(){ document.querySelector('.copy').classList.remove('show') }, 1000);
}

const bindImageSelectors = () => {
  var list = document.querySelectorAll('.results img')
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function(e) {
      copyImageURL(this.dataset.url)
    })
  }
}

const clearImages = () => {
  document.querySelector('.results').innerHTML = ""
}

const renderImages = (json) => {
  json.data.map(function(gifResult, i) {
    var content = ""

    content += "<img data-url='" + gifResult.images.original.url + "' "
    content += "src='" + gifResult.images.preview_gif.url + "'/>"

    document.querySelector('.results').innerHTML += content
  })
}

document.querySelector('#search').addEventListener('keyup', function(){
  fetch(apiURL(this.value)).then(function(response) {
    return response.json()
  }).then(function(json) {
    clearImages()
    renderImages(json)
    bindImageSelectors()
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
})
