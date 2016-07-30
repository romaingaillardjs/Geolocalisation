// geolocalisation
//https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBifxTfw8ipGi_oRYIiEPNRwn4dO_7cdYk

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendfile('./geolocalisation.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
