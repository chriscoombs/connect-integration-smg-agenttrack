var pushToSmgLambda = require('../functions/source/SmgPushToSmgLambda/index');
var fs = require("fs");

process.env.API_HOST='smg-s-loadb-1w7j39tp4hc51-1561128529.us-east-1.elb.amazonaws.com';
process.env.API_KEY='2fee1c1f-9d48-42f9-99ee-d129e70dd33f';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;


function test(){
    console.log('Validate that we can post data to the push to smg endpoint');

    var data = fs.readFileSync('ctr.json');

    pushToSmgLambda.sendData(data.toString());
}
test();