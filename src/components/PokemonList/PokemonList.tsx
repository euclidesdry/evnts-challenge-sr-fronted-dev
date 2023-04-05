import { Container, Id, ListItem, Name, Sprite, Tags, Type } from "./styles";

export function PokemonList() {
	return (
		<Container>
			{Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
				<ListItem key={i}>
					<Sprite
						src="https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/dream-world/25.svg"
						alt="Poke icon"
					/>
					<Id>#{i}</Id>
					<Name>Pokemon</Name>
					<Tags>
						<Type>grass</Type>
						<Type>electric</Type>
					</Tags>
				</ListItem>
			))}
		</Container>
	);
}
