"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = exports.Pub = function () {
    function Pub(name, firstName, lastName, mail, openDays, start, end, type, nameBeer) {
        _classCallCheck(this, Pub);

        this.name = name;
        this.owner(firstName, lastName, mail);
        this.openDays = openDays;
        this.openHours(start, end);
        this.beers(type, nameBeer);
    }

    _createClass(Pub, [{
        key: "owner",
        value: function owner(firstName, lastName, mail) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.maisl = mail;
        }
    }, {
        key: "openHours",
        value: function openHours(start, end) {
            this.start = start;
            this.end = end;
        }
    }, {
        key: "beers",
        value: function beers(type, nameBeer) {
            this.type = type;
            this.nameBeer = nameBeer;
        }

        /*set name (name){this.name=name}
        get name (){return this.name}
        set firstName (firstName){this.firstName=firstName}
        get firstName (){return this.firstName}
        set lastName (name){this.LastName=LastName}
        get lastName (){return this.lastName}
        set mail (mail){this.mail=mail}
        get mail (){return this.mail}
        set openDays (openDays){this.openDays=openDays}
        get openDays (){return this.openDays}
        set start (start){this.start=start}
        get start (){return this.start}
        set end (end){this.end=end}
        get end (){return this.end}
        set type (type){this.type=type}
        get type (){return this.type}
        set nameBeer (nameBeer){this.nameBeer=nameBeer}
        get nameBeer (){return this.nameBeer}*/

    }]);

    return Pub;
}();