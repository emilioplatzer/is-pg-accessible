var fs = require('fs');
var pg = require('pg');

function isPgAccesible(configFileName,end){
    console.log(configFileName);
    var conJson = fs.readFileSync(configFileName, 'utf8');

    console.log("Parsing json");
    var conObj = JSON.parse(conJson);

    console.log('Connecting with',conObj);
    pg.connect(conObj, function(err, client, done) {
        if(err) {
            console.error('error, connecting:', err);
            done();
            end(err);
            return;
        }
        client.query('SELECT $1::int AS number', ['1'], function(err, result) {
            if(err) {
                console.error('error running query:', err);
                done();
                end(err);
                return;
            }
            console.log('all ok:',result.rows[0].number,'= 1');
            done();
            end(null,1);
        });
    });
}

exports = module.exports = isPgAccesible;