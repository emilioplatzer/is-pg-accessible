
var isPgAccessible=require('./connector.js');

isPgAccessible("local-connect-info.json",function(){
    console.log('end of tests');
    process.exit();
});
