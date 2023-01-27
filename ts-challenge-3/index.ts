function getPokemonIds(constructor: Function): any {
	let numbersOfPokemons: number = 5
	let pokemonsId: number[] = []
	while (pokemonsId.length < numbersOfPokemons) {
		const id = Math.floor(Math.random() * 100) + 1
		if (pokemonsId.indexOf(id) === -1) {
			pokemonsId.push(id)
		}
	}
	return console.log(constructor.prototype.pokemonsId = pokemonsId)
}


@getPokemonIds
class Trainer {
	id: number;
	name: string;
	pokemonsId!: number[];

	constructor(id: number, name: string, pokemonsId?: number[]) {
		this.id = id;
		this.name = name;
		if (pokemonsId) this.pokemonsId = pokemonsId
	}

	fetchApi() {
		let requests = this.pokemonsId.map(
			pokeId => fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
		)

		Promise.all(requests)
			.then(responses => Promise.all(responses.map(res => res.json())))
			.then(pokemons => pokemons.forEach(pokemon => console.log(pokemon.name)));
	}

}

const trainer = new Trainer(1, "Pepe");
trainer.fetchApi();