var pubsJson=require('../../mocks/pubs.json');
import * as Pub from '../pub.js'
var moment = require('moment');

function listerPubs() {
  var listePubs=[];
  pubsJson.forEach(pub =>{
  var pub= new Pub.Pub(pub.name, pub.owner.fisrtName, pub.owner.lastname, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers);
  listePubs.push(pub);
  })
  return listePubs;  
}

function listerPubsOuverts(){
  var pubsOuverts=[];
  pubsJson.forEach(pub=>{
    if(pub['openDays'].includes(moment().format('dddd'))){
      pubsOuverts.push(new Pub.Pub(pub.name, pub.owner.fisrtName, pub.owner.lastname, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end));
    }
  });
    return pubsOuverts;
}



module.exports = {
listerPubs: listerPubs,
listerPubsOuverts: listerPubsOuverts
}