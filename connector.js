var fs = require('fs');
var pg = require('pg');


function isPgAccessible(configFileName,end){
    console.log(configFileName);
    var conJson = fs.readFileSync(configFileName, 'utf8');

    console.log("Parsing json");
    var conObj = JSON.parse(conJson);
    
    function handleError(err,done,end){
        if(err) {
            console.error('error, connecting:', err);
            done();
            end(err);
            return true;
        }
        return false;
    }

    console.log('Connecting with',conObj);
    pg.connect(conObj, function(err, client, done) {
        if(!handleError(err,done,end)){
            client.query('SELECT $1::int AS number', ['1'], function(err, result) {
                if(!handleError(err,done,end)){
                    console.log('all ok:',result.rows[0].number,'= 1');
                    done();
                    end(null,1);
                }
            });
        }
    });
}

exports = module.exports = isPgAccessible;