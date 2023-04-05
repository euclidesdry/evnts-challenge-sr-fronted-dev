import PokeLogo from "../../../../assets/pokemon-logo.svg";
import { Container, SearchButton, SearchInput } from "./styles";

export default function SearchBar() {
	return (
		<Container>
			<SearchInput type="text" name="search-pokemon" placeholder="Search your Pokemon!" />
			<SearchButton>
				<img src={PokeLogo} alt="Search Pokemon Logo" />
			</SearchButton>
		</Container>
	);
}
