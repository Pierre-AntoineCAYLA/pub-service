var pubService=require("pub-services");

function getPubs(){
pubService.listePubs();
}

function getPubsOuverts(){
pubService.listePubsOuverts();
}

module.exports = {
    getListPubs: getPubs,
    getListPubsOuverts: getPubsOuverts
    }