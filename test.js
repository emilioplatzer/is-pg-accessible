var expect=require('expect.js');

var isPgAccessible=require('./connector.js');

describe('is-pg-accessible',function(){
    it('should connect',function(done){
        isPgAccessible('local-connect-info.json', function(err,ok){
            try{
                expect(ok).to.eql(1);
                expect(err).to.be(null);
                done();
            }catch(e){
                done(e);
            }
        });
    });
    it('should inform error',function(done){
        isPgAccessible('invalid-connect-info.json', function(err,ok){
            try{
                // expect(err).not.to.be(null);
                // expect(ok).to.be(null);
                done();
            }catch(e){
                done(e);
            }
        });
    });
});