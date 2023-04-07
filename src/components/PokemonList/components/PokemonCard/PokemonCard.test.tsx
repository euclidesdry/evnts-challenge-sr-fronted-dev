import { render, waitFor } from "~/utils/test/setup";
import { pikachuMock } from "~/__mocks__/pokemon";
import { getPokemonDetails } from "~/__mocks__/utils";

import { BASE_URL } from "~/services";

import * as hooks from "~/hooks/pokemon";

import { Tags } from "./components";
import PokemonCard from "./PokemonCard";

jest.mock("./components", () => ({
	Tags: jest.fn(() => null), // Mock the Tags component
}));

const mockPokemonData = getPokemonDetails(pikachuMock);

describe("PokemonCard", () => {
	const name = mockPokemonData.name as string;
	const id = mockPokemonData.id as number;
	const sprite = mockPokemonData.sprite as string;
	const types = mockPokemonData.types as string[];

	beforeEach(() => {
		jest.spyOn(hooks, "usePokemonDetails").mockReturnValue({
			id,
			name,
			sprite,
			types,
			image: "",
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it("renders the Pokemon details correctly", async () => {
		const { getByAltText, getByText } = render(<PokemonCard name={name} url={`${BASE_URL}/pokemon/${id}/`} />);

		await waitFor(() => expect(getByText(name)).toBeTruthy());

		expect(getByAltText("Pokemon icon").getAttribute("src")).toBe(sprite);
		expect(getByText(`#${id}`)).toBeTruthy();
		expect(getByText(name)).toBeTruthy();

		expect(Tags).toHaveBeenCalledWith({ types: mockPokemonData.types }, {});
	});
});
