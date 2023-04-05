import styled from "styled-components";
import { Header } from "./components";
import { BASE_BORDER_RADIUS, BASE_DROP_SHADOW } from "./constants/app";

const Main = styled.main`
	max-width: 100%;
`;

const PokemonList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 16px;
	padding: 16px 0;
`;

const ListItem = styled.span`
	background-color: #fff;
	padding: 16px;

	border-radius: ${BASE_BORDER_RADIUS};
	box-shadow: ${BASE_DROP_SHADOW};
`;

function App() {
	return (
		<div className="App">
			<Header />

			<Main>
				<PokemonList>
					{Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
						<ListItem key={i}>
							Pokemon {i}
							<img
								src="https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/dream-world/25.svg"
								alt="Poke icon"
							/>
						</ListItem>
					))}
				</PokemonList>
			</Main>

			<footer className="App-footer">footer</footer>
		</div>
	);
}

export default App;
