const elasticsearch = require('elasticsearch');

var esclient = new elasticsearch.Client({
  host: 'http://127.0.0.1:4200',
});

module.exports.esclient = esclient;
