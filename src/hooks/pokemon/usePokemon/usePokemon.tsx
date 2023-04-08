import { useAppContext } from "~/contexts/App";
import { paginatePokemonByType } from "~/helpers/filters";
import { usePokemonByNameService, usePokemonByTypeService, usePokemonService } from "~/hooks/services";

const ITEMS_PER_PAGE = 20;

export default function usePokemon() {
	const { offset, searchTerm, selectedType, setOffset } = useAppContext();

	const { data: pokemonList, isFetching } = usePokemonService(ITEMS_PER_PAGE, offset);
	const { data: pokemonListByType, isFetching: isFetchingByType } = usePokemonByTypeService(selectedType);
	const { searchResult, isFetching: isFetchingByName, isError } = usePokemonByNameService(searchTerm);

	const count = selectedType && pokemonListByType ? pokemonListByType.length : pokemonList?.count;
	const totalItems = count || 0;
	const pageCount = count ? Math.ceil(count / ITEMS_PER_PAGE) : 0;

	const paginatedPokemonListByType = paginatePokemonByType(ITEMS_PER_PAGE, offset, pokemonListByType);
	const currentPokemonList =
		(searchResult.length && searchResult) || (selectedType ? paginatedPokemonListByType : pokemonList?.results);

	const handlePageChange = (event: { selected: number }) => {
		const newOffset = (event.selected * ITEMS_PER_PAGE) % totalItems;
		setOffset(newOffset);
	};

	return {
		pokemonList: currentPokemonList,
		pageCount,
		handlePageChange,
		isLoading: isFetching || isFetchingByType || isFetchingByName,
		isSearchError: isError,
	};
}
