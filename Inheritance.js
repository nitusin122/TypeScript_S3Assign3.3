var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(animalName) {
        this._name = animalName;
    }
    Animal.prototype.move = function (distance) { };
    ;
    Animal.prototype.makeSound = function (sound) {
        return this._name + " makes sound.";
    };
    ;
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.move = function (distance) {
        if (distance === void 0) { distance = 30; }
        return this._name + " moves with speed " + distance + " km/h";
    };
    Cat.prototype.makeSound = function (sounds) {
        if (sounds === void 0) { sounds = 'Mew Mew'; }
        return this._name + " makes sound " + sounds;
    };
    ;
    return Cat;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._name = "Rocky";
        return _this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 55; }
        return this._name + " moves with speed " + distance + " km/h";
    };
    Horse.prototype.makeSound = function (sounds) {
        if (sounds === void 0) { sounds = 'Neigh'; }
        return this._name + " makes sound " + sounds;
    };
    ;
    return Horse;
}(Animal));
