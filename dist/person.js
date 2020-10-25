"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, location) {
        this.name = name,
            this.location = {
                lat: location.lat,
                lng: location.lng
            };
    }
    return Person;
}());
exports.Person = Person;
