//1. create a request variable
var req = new XMLHttpRequest();
//2. create a new connection
req.open("GET", "https://restcountries.eu/rest/v2/all", true); //true flag to handle the errors during the access of of URL
//3.Send the request
req.send();
//4. Load response
req.onload = function () {
  var data = JSON.parse(this.response); //String to JSON
  for (var i in data) {
    console.log(data[i].name);
  }
}; //onload will trigger the function when the data is ready
