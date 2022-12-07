class Pokemon {
	constructor(
		private _name: string,
		private _type: string[],
		private _evolutions: number
	) {}

	get name() {
		return this._name;
	}
	get type() {
		return this._type;
	}
	get evolutions() {
		return this._evolutions;
	}

	set name(name: string) {
		this._name = name;
	}

	set type(type: string[]) {
		this._type = type;
	}

	set evolutions(evolutions: number) {
		this._evolutions = evolutions;
	}

	attack() {
		return console.log(`${this._name} attack!`);
	}

	evolve() {
		return console.log(`${this._name} evolve!`);
	}

	showData() {
		return console.log(
			`
            - NAME: ${this._name} 
            - TYPE: ${this._type} 
            - EVOLUTIONS: ${this._evolutions}
            `
		);
    }
}

const createPokemon = new Pokemon("Pikachu", ["type"], 1)
createPokemon.attack();
createPokemon.evolve()