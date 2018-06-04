var pubs=require('../mocks/pubs.json');
var moment = require('moment');
function listerPubs() {
    return pubs;
    }

function listerPubsOuverts(){
  var pubsOuverts=[];
  pubs.forEach(pub=>{
    if(pub['openDays'].includes(moment().format('dddd'))){
      pubsOuverts.push(pub);
    }
  });
    return pubsOuverts;
}



module.exports = {
listerPubs: listerPubs,
listerPubsOuverts: listerPubsOuverts
}
