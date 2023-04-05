import styled from "styled-components";
import { Header, PokemonList } from "./components";

const Main = styled.main`
	padding-top: 16px;
	max-width: 100%;
`;

function App() {
	return (
		<div className="App">
			<Header />
			<Main>
				<PokemonList />
			</Main>
			<footer className="App-footer">footer</footer>
		</div>
	);
}

export default App;
