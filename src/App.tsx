import styled from "styled-components";
import { Header } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home/Home";

const queryClient = new QueryClient();

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
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Header />
				<Main>
					<Home />
				</Main>
				<Footer className="App-footer">©2023 All Rights Reserved to @euclidesdry</Footer>
			</div>
		</QueryClientProvider>
	);
}

export default App;
