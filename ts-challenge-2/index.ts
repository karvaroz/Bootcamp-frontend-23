function checkPowerPoint(value: number) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		if (value < 0) {
			return console.log("The pokemon does not have power points left!", value);
		}
		return console.log(`The pokwemon has ${value} left to play!`);
	};
}

class Pokemon {
	name: string;
	ppAvailable = 1;

	constructor(name: string, ppAvailable: number) {
		this.name = name;
		this.ppAvailable = ppAvailable;
	}

	@checkPowerPoint
	figth(move: any) {
		//console.log(`${this.name} used ${move?.name}!`);
		this.ppAvailable -= 1;
		//console.log(this.ppAvailable)
	}
}

const move = { name: "thunderbolt", power: 90 };
const pikachu = new Pokemon("pikachu", 1);
console.log(pikachu);
//pikachu.figth(move);
pikachu.figth(move);


// tsc --target ES5 --experimentalDecorators ./pokemon.ts