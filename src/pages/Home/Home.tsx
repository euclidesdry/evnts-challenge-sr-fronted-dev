import ReactPaginate from "react-paginate";
import { PokemonList } from "../../components";
import { useState } from "react";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export function Home() {
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);

	const itemsPerPage = 5;
	// How many items to show per page.
	const pageCount = Math.ceil(items.length / itemsPerPage);

	// Invoke when user click to request another page.
	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
		setItemOffset(newOffset);
	};

	return (
		<>
			<PokemonList />
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
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
		</>
	);
}
