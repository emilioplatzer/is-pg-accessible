var expect=require('expect.js');

var isPgAccesible=require('./connector.js');

describe('is-pg-accesible',function(){
    it('should connect',function(done){
        isPgAccesible('local-connect-info.json', function(err,ok){
            expect(ok).to.eql(1);
            expect(err).to.be(null);
            done();
        });
    });
    it('should inform error',function(done){
        isPgAccesible('invalid-connect-info.json', function(err,ok){
            expect(ok).to.eql(null);
            expect(err).not.to.be(null);
            done();
        });
    });
});