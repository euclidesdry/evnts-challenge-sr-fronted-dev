import styled from "styled-components";
import { Header, PokemonList } from "./components";

const Main = styled.main`
	max-width: 100%;
`;

const Footer = styled.footer`
	width: 100%;
	padding: 16px;
	text-align: center;
	padding-top: 32px;
	padding-bottom: 64px;
`;

function App() {
	return (
		<div className="App">
			<Header />
			<Main>
				<PokemonList />
			</Main>
			<Footer className="App-footer">©2023 All Rights Reserved to @euclidesdry</Footer>
		</div>
	);
}

export default App;
