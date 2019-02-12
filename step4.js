var https = require('https')

function getHTML (options, callback) {
  https.get(options, function (response) {
    let dataArray = []
    response.setEncoding('utf8')
    
    response.on('data', function (chunk) {
      dataArray += chunk
    })
    
    response.on('end', function () {
      callback(dataArray)
      console.log('Response stream complete.')
    })
  })

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)