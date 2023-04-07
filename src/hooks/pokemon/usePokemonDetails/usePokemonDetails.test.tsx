import { empoleonMock, pikachuMock } from "~/__mocks__/pokemon";
import { getPokemonDetails } from "~/__mocks__/utils";
import { BASE_URL } from "~/services";

import usePokemonDetails from "./usePokemonDetails";
import { renderHook, waitFor } from "~/utils/test/setup";

const mockResult = getPokemonDetails(empoleonMock);
const mockPikachuResult = getPokemonDetails(pikachuMock);

const mockInitialResult = {
	...mockResult,
	image: undefined,
	sprite: undefined,
	types: [],
};

type PokemonDetailsResult = ReturnType<typeof usePokemonDetails>;
type PokemonDetailsProps = Parameters<typeof usePokemonDetails>;

const testSetup = ({ name, id }: { name?: string; id?: number }) => {
	const renderResult = renderHook<PokemonDetailsResult, PokemonDetailsProps>(
		() => usePokemonDetails(name as string, `${BASE_URL}/pokemon/${id}/`),
		{
			initialProps: [mockResult.name as string, `${BASE_URL}/pokemon/${id}/`],
		}
	);

	return {
		expectedCurrentValues: renderResult.result.current,
		...renderResult,
	};
};

describe("usePokemonDetails", () => {
	test("should return pokemon details when provided with a name and url", async () => {
		const { result, expectedCurrentValues } = testSetup({ name: mockResult.name, id: mockResult.id });

		expect(expectedCurrentValues).toEqual(mockInitialResult);
		await waitFor(() => expect(result.current).toEqual(mockResult));
	});

	test("should return pokemon details with other pokemon", async () => {
		const { result, expectedCurrentValues } = testSetup({ name: mockPikachuResult.name, id: mockPikachuResult.id });

		expect(expectedCurrentValues).toEqual({
			...mockInitialResult,
			name: mockPikachuResult.name,
			id: mockPikachuResult.id,
		});

		await waitFor(() => expect(result.current).toEqual(mockPikachuResult));
	});
});
