'use strict';

var _pub = require('../pub.js');

var Pub = _interopRequireWildcard(_pub);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var pubsJson = require('../../mocks/pubs.json');

var moment = require('moment');

function listerPubs() {
  var listePubs = [];
  pubsJson.forEach(function (pub) {
    var pub = new Pub.Pub(pub.name, pub.owner.fisrtName, pub.owner.lastname, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers);
    listePubs.push(pub);
  });
  return listePubs;
}

function listerPubsOuverts() {
  var pubsOuverts = [];
  pubsJson.forEach(function (pub) {
    if (pub['openDays'].includes(moment().format('dddd'))) {
      pubsOuverts.push(new Pub.Pub(pub.name, pub.owner.fisrtName, pub.owner.lastname, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end));
    }
  });
  return pubsOuverts;
}

module.exports = {
  listerPubs: listerPubs,
  listerPubsOuverts: listerPubsOuverts
};