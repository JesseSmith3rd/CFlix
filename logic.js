

$(document).ready(function () {

  // jQuery methods go here...
  //TODO: What is the endpoint that I need to hit.

  $.get('http://localhost:8888/users', function(data) {
    alert("data loaded: " + data); 
  });
});