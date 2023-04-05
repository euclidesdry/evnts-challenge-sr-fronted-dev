import { Tags } from "./components";
import { Id, Container, Name, Sprite } from "./styles";

type PokemonCardProps = {
	id: number;
	name: string;
	sprite: string;
	types: string[];
};

export default function PokemonCard({ name, id, sprite, types }: PokemonCardProps) {
	return (
		<Container key={name}>
			<Sprite src={sprite} alt="Poke icon" />
			<Id>#{id}</Id>
			<Name>{name}</Name>
			<Tags types={types} />
		</Container>
	);
}
