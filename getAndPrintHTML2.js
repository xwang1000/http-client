var https = require('https')

function getAndPrintHTML(options) {
  
  https.get(options, function (response) {
    let dataArray = []
    response.setEncoding('utf8')
    
    response.on('data', function (chunk) {
      dataArray += chunk
    })
    
    response.on('end', function () {
      console.log(dataArray)
      console.log('Response stream complete.')
    })
  })
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions)