var http = require('http')
  , qs = require('querystring')
  , api_key = '3gydgk8hnvvxye9ppj7vn8f9'
  , options = {
      host: 'api.esha.com'
    , port: 80
    , path: '/food-units?apikey='+api_key
    };

http.get(options, function (res) {
  var data = '';
  res.on('data', function (chunk) {
    data += chunk.toString();
  })
  .on('error', function (err) {
    console.err('Error retrieveing ESHA food units');
    throw err;
  })
  .on('end', function () {
    console.log(data);
  });
});