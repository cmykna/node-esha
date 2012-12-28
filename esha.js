var http = require('http')
  , qs = require('querystring')
  , units = require('./lib/units')
  , api_key = '3gydgk8hnvvxye9ppj7vn8f9'
  , food = process.argv[2]
  , query = qs.stringify({
      query: food
    , apikey: api_key
    })
  , options = {
      host: 'api.esha.com'
    , port: 80
    , path: '/foods?' + query
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
    results = JSON.parse(data);
    console.log(results.items[0]);

  });
});