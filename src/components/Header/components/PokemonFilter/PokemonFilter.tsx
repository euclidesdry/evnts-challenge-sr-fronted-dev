import { Container, List } from "./styles";

const Pokemons = [
	"all",
	"normal",
	"fire",
	"water",
	"electric",
	"grass",
	"ice",
	"fighting",
	"poison",
	"ground",
	"flying",
	"psychic",
	"bug",
	"rock",
	"ghost",
	"dragon",
	"dark",
	"steel",
	"fairy",
];

export default function PokemonFilter() {
	return (
		<Container>
			<List name="pokemon-type">
				{Array.from(Pokemons).map((item) => (
					<option key={item} value="item" style={{ textTransform: "capitalize" }}>
						{item}
					</option>
				))}
			</List>
		</Container>
	);
}
