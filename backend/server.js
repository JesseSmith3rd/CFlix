var express = require('express');
var app = express();

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

function myFunction() {
  var x =  document.getElementsByClassName("description-box");
  x = "C:\Users\Johnny 2\Pictures\Computer-Science_10282016";
  console.log(x );
}
