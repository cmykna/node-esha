var http = require('http')
  , qs = require('querystring')
  , _ = require('underscore')
  , units = require('./lib/units')

var api_key = '3gydgk8hnvvxye9ppj7vn8f9'
var options = { host: 'api.esha.com', port: 80 };
var response_times = [];

function search (food) {
  var start, end;
  var query = qs.stringify({ query: food, apikey: api_key });
  options.path = '/foods?' + query;
  start = new Date();
  http.get(options, function (res) {
    var data = '';
    console.log(res.statusCode, res.headers);
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
      end = new Date();
      response_times.push(end-start);

      console.log(results_display);
      console.log("Query: " + results.query + " took " + (end - start) + "ms, displaying " +
        results.items.length + " of " + results.total + " results.");
    });
  });
}

function timing () {
  var count = 100;
  var avg_res_time, total_res_time;

  setInterval(function () {
    var start, end;
    if (count == 0) {
      // search one more time, then we're dunzo
      search('broccoli');
      clearInterval(this);
      total_res_time = _.reduce(response_times, function (m, n) { return m + n }, 0);
      avg_res_time = total_res_time / response_times.length;
      console.log('\x1b[36mAverage: '+ ~~avg_res_time +'ms\x1b[39m');
    }
    search('broccoli');
    response_times.length < 0 && console.log(response_times);
    --count;
  }, 5000);
}

// timing();
search(process.argv[2]);



