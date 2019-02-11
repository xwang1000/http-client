var http = require('http')

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  http.get(requestOptions, function (res) {
    res.setEncoding('utf8')
    res.on('data', function (data) {
      console.log(data)
      console.log('---')
    })
    res.on('end', function() {
      console.log('Response stream complete.')
    })
  })

}

getAndPrintHTMLChunks()