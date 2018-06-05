export class Pub {
    constructor(name, firstName, lastName, mail, openDays, start, end, type, nameBeer){
        this.name=name
        this.owner(firstName, lastName, mail)
        this.openDays=openDays
        this.openHours(start,end)
        this.beers(type, nameBeer)
    }

    owner(firstName, lastName, mail){
        this.firstName=firstName;
        this.lastName=lastName;
        this.maisl=mail;
    }

    openHours(start, end){
        this.start=start;
        this.end=end;
    }

    beers(type, nameBeer){
        this.type=type;
        this.nameBeer=nameBeer;
    }

    set name (name){this.name=name}
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
    get nameBeer (){return this.nameBeer}



}