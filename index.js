var pubService=require('./services/pub.services.js');

var jours = new Array('Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday');
var date=new Date();
var day=jours[date.getDay]
var listePubs=pubService.listerPubs();
var listePubsOuverts=pubService.listerPubsOuverts();

console.log(day+' liste pub '+JSON.stringify(listePubs)+ ', liste pubs ouverts '+JSON.stringify(listePubsOuverts));

var pubService = require('./services/pubs.service');
module.exports = {
services: {
pubService : pubService
}
}