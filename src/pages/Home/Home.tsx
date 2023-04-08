import ReactPaginate from "react-paginate";

import { PokemonList } from "../../components";
import { usePokemon } from "../../hooks/pokemon";
import DetailsModal from "~/components/DetailsModal";
import { useAppContext } from "~/contexts/App";

export default function Home() {
	const { searchTerm, selectedPokemon, setSelectedPokemon } = useAppContext();
	const { pokemonList, isLoading, isSearchError, pageCount, handlePageChange } = usePokemon();

	const isModalOpen = typeof selectedPokemon === "number";

	function handleCloseModal() {
		setSelectedPokemon(null);
	}

	return (
		<>
			<PokemonList data={pokemonList} loading={isLoading} searchTerm={searchTerm} isSearchError={isSearchError} />

			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageChange}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				containerClassName="app-pagination"
				pageClassName="app-pagination__item"
				pageLinkClassName="app-pagination__link"
				previousClassName="app-pagination__item"
				previousLinkClassName="app-pagination__link"
				nextClassName="app-pagination__item"
				nextLinkClassName="app-pagination__link"
				breakClassName="app-pagination__item"
				breakLinkClassName="app-pagination__link"
				activeClassName="app-pagination__item--active"
				disabledClassName="app-pagination__item--disabled"
			/>

			<DetailsModal id={selectedPokemon} isOpen={isModalOpen} onClose={handleCloseModal} />
		</>
	);
}
