const express = require('express')
const path = require('path')
//const port= process.env.PORT || 5000
//const host = process.env.HOST || 'localhost'
const port = process.env.YOUR_PORT || process.env.PORT || 80;
const host = process.env.YOUR_HOST || '0.0.0.0';
const app = express()

// serve static assets normally
app.use(express.static(__dirname))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, host)
console.log('server started on ' + host + ':' + port)
