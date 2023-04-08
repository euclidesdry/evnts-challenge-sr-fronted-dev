import { useForm } from "react-hook-form";
import PokeLogo from "../../../../assets/icons/pokemon-logo.svg";
import { ClearSearchBarButton, Container, SearchButton, SearchInput } from "./styles";
import { useAppContext } from "~/contexts/App";

export default function SearchBar() {
	const { searchTerm, setSearchTerm } = useAppContext();

	const { register, handleSubmit, setValue, getValues } = useForm();

	function handleSearch(values: any) {
		setSearchTerm(values.searchBar as string);
	}

	function handleClearSearch() {
		setValue("searchBar", "");
		setSearchTerm("");
	}

	return (
		<Container>
			<SearchInput {...register("searchBar")} type="search" placeholder="Search your Pokemon!" />
			{searchTerm?.length > 0 && <ClearSearchBarButton onClick={handleClearSearch}>X</ClearSearchBarButton>}
			<SearchButton onClick={handleSubmit(handleSearch)}>
				<img src={PokeLogo} alt="Search Pokemon Logo" />
			</SearchButton>
		</Container>
	);
}
