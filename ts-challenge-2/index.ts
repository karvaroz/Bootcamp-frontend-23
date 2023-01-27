function checkPowerPoint(target: Object, propertyKey: string, descriptor: any) {
	const method = descriptor.value;
	descriptor.value = function (move: Imove) {
		if (this.ppAvailable == 0) {
			return console.log(
				` The Pokemon does not have any Power Points: ${this.ppAvailable} to use ${move?.name}!`
			);
		} else {
			console.log(
				` The Pokemon has ${this.ppAvailable} Power Points to use ${move?.name}!`
			);
			method.apply(this, [move]);
		}
	};
}

interface Imove {
	name: string;
	power: number;
}

class Pokemon {
	name: string;
	ppAvailable: number;

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
