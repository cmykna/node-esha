var http = require('http')
  , qs = require('querystring')
  , _ = require('underscore')
  , units = require('./lib/units')

var api_key = '3gydgk8hnvvxye9ppj7vn8f9'
var options = { host: 'api.esha.com', port: 80 };

function searchFoods (food) {
  var query = qs.stringify({ query: food, apikey: api_key });
  options.path = '/foods?' + query;
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
        , group: r.group
        , product: r.product || ''
        , supplier: r.supplier || ''
        , default_unit: units.getUnitDescription(r.unit)
        , available_units: units.getUnitDescription(r.units)        
        }
        results_display.push(result);
      });
      console.log(results_display);
      console.log("Query: " + results.query + ", displaying " + 
        results.items.length + " of " + results.total + " results.");
    });
  });
}

searchFoods(process.argv[2]);
