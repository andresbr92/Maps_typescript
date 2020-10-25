"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
var faker_1 = __importDefault(require("faker"));
var person_1 = require("./person");
var Passenger = /** @class */ (function (_super) {
    __extends(Passenger, _super);
    function Passenger() {
        return _super.call(this, faker_1.default.name.firstName(), {
            lat: faker_1.default.address.latitude(),
            lng: faker_1.default.address.longitude(),
        }) || this;
    }
    return Passenger;
}(person_1.Person));
exports.Passenger = Passenger;
