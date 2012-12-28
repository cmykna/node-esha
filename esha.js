var http = require('http')
  , qs = require('querystring')
  , _ = require('underscore')
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
    var results = JSON.parse(data);
    var results_display = [];
    _.each(results.items, function (r) {
      var result = {
        item: r.description
      , default_unit: units.getUnitDescription(r.unit)
      , available_units: units.getAvailableUnits(r.units)
      , product: r.product || false
      , supplier: r.supplier || false
      }
      results_display.push(result);
    });
    console.log(results_display);
    console.log("Query: " + results.query + 
                ", Total Results: " + results.total
               );
  });
});