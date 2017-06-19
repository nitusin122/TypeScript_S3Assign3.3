class Animal{
    _name : string;
    constructor(animalName: string){
        this._name = animalName;
    }
    move(distance: number) {}; 
    makeSound(sound: string): string {
        return this._name + " makes sound."
    };
}

class Cat extends Animal{    
    move(distance = 30) : string {
        return `${this._name} moves with speed ${distance} km/h`;
    }
    makeSound(sounds = 'Mew Mew'): string {
         return `${this._name} makes sound ${sounds}`;
    };    
}

class Horse extends Animal{
    _name = "Rocky";
    move(distance = 55) : string {
        return `${this._name} moves with speed ${distance} km/h`;
    }
    makeSound(sounds = 'Neigh'): string {
         return `${this._name} makes sound ${sounds}`;
    };  
}