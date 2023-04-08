import { PokemonCard } from "./components";
import { ListPokemonsType } from "../../types/services/pokemon";

import { Container, Loader, NoCards } from "./styles";
import { SpinnerCircular } from "spinners-react";

type PokemonListProps = {
	data?: ListPokemonsType["results"];
	loading?: boolean;
	searchTerm: string;
	isSearchError: boolean;
};

export default function PokemonList({ data, searchTerm, loading, isSearchError }: PokemonListProps) {
	const hasNoCards = isSearchError || Boolean(loading) || Boolean(data && data?.length <= 0);

	return (
		<Container noCards={hasNoCards}>
			{!loading && !isSearchError
				? data?.map(({ name, url }) => <PokemonCard key={name} url={url} name={name} />)
				: null}
			{loading && (
				<Loader>
					<SpinnerCircular enabled={true} color="#222222" size="38" />
					<p>Loading...</p>
				</Loader>
			)}
			{hasNoCards && !loading && (
				<NoCards>
					<p>No cards to show</p>
				</NoCards>
			)}
		</Container>
	);
}
