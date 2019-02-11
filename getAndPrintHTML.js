var https = require('https')

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8')
    let dataArray = []
    response.on('data', function (d) {
      dataArray.push(d)
    })

    response.on('end', function () {
      console.log(dataArray)
      console.log('Response stream complete.')
    })
  })

}

getAndPrintHTML()