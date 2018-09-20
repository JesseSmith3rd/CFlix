var express = require('express');
var app = express();
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

 const users = [
  {
    first_name: 'John',
    last_name: 'Smith'
  },
  {
    first_name: 'Tim',
    last_name: 'Johnson'
  }
];

app.get('/users', function(req, res){
  res.send(users);
});

app.listen(8888, function () {
  console.log('Example app listening on port 8888!');
});
