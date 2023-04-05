import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { listPokemons } from "../../../services/pokemon";

const ITEMS_PER_PAGE = 20;

export default function usePokemon() {
	const [offset, setOffset] = useState(0);

	const { data: pokemonList } = useQuery(["pokemon", offset], () => listPokemons(ITEMS_PER_PAGE, offset), {
		keepPreviousData: true,
		staleTime: 1000 * 60 * 60 * 1, // 1000ms * 60 seconds * 60min * 1h
	});

	const pageCount = pokemonList?.count ? Math.ceil(pokemonList?.count / ITEMS_PER_PAGE) : 0;
	const totalItems = pokemonList?.count || 0;

	const handlePageChange = (event: { selected: number }) => {
		const newOffset = (event.selected * ITEMS_PER_PAGE) % totalItems;
		setOffset(newOffset);
	};

	return {
		pokemonList,
		pageCount,
		handlePageChange,
	};
}
