'use strict';

var pubService = require('./services/pub.services.js');

//function listePubs(){
console.log(' liste pub ' + JSON.stringify(pubService.listerPubs()));
//}

//function listePubsOuverts(){
console.log('liste pubs ouverts ' + JSON.stringify(pubService.listerPubsOuverts()));
//}


/*module.exports = {
    listePubs: listePubs,
    listePubsOuverts: listePubsOuverts
    }
    */