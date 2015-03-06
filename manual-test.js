
var isPgAccesible=require('./connector.js');

isPgAccesible("local-connect-info.json",function(){
    console.log('end of tests');
    process.exit();
});
