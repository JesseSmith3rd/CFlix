

$(document).ready(function () {

  // jQuery methods go here...
  //TODO: What is the endpoint that I need to hit.

  $.get('http://localhost:8888/users', function(data) {
    // console.log("data loaded: " + data);
    //console.log(data[0].first_name);
    //console.log(data[1].first_name);
    for(var index = 0; index < data.length; index++){
      console.log(data[index]);
    };
  });
});
