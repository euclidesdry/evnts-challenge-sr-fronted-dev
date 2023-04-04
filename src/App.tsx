import styled from "styled-components";
import { Header } from "./components";

const BASE_BORDER_RADIUS = "32px";

const PokemonList = styled.div``;

function App() {
	return (
		<div className="App">
			<Header />
			<main className="App-main">
				<PokemonList>List</PokemonList>
			</main>

			<footer className="App-footer">footer</footer>
		</div>
	);
}

export default App;
