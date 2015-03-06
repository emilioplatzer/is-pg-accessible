var fs = require('fs');
var pg = require('pg');

console.log("Reading local-connect-info.json");
var conJson = fs.readFileSync('local-connect-info.json', 'utf8');

console.log("Parsing local-connect-info.json");
var conObj = JSON.parse(conJson);

console.log('Connecting with',conObj);
pg.connect(conObj, function(err, client, done) {
  if(err) {
    return console.error('error, connecting:', err);
  }
  client.query('SELECT $1::int AS number', ['1'], function(err, result) {
    done();
    if(err) {
      return console.error('error running query:', err);
    }
    console.log('all ok:',result.rows[0].number,'= 1');
  });
});