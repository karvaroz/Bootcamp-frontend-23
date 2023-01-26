function checkPowerPoint(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	const method = descriptor.value;
	descriptor.value = function (move: Imove) {
		if (move.power == 0) {
			console.log(
				` The Pokemon does not have any Power Points:${move?.power} to use ${move?.name}!`
			);
		} else {
			console.log(
				` The Pokemon has ${move?.power} Power Points to use ${move?.name}!`
			);
		}

		method.apply(this, [move]);
	};
}

interface Imove {
	name: string;
	power: number;
}

class Pokemon {
	name: string;
	ppAvailable = 1;

	constructor(name: string, ppAvailable: number) {
		this.name = name;
		this.ppAvailable = ppAvailable;
	}

	@checkPowerPoint
	figth(move: Imove) {
		console.log(`${this.name} used ${move?.name}!`);
		this.ppAvailable -= 1;
	}
}

const move = { name: "thunderbolt", power: 90 };
const pikachu = new Pokemon("pikachu", 1);
pikachu.figth(move);
pikachu.figth(move);

// tsc --target ES5 --experimentalDecorators ./pokemon.ts
// tsc ./src/app.ts --target ES5 --experimentalDecorators --emitDecoratorMetadata --lib \"es2016, dom\" && node ./src/app.js

// Tarea
// Crear decorador getPokemonsId - tipo clase
// Generar ids randoms de 5 - 10 
// Con esos ids hacer la consulta al api - promesas
