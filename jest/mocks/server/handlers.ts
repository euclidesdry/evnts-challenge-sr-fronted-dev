import { rest } from "msw";
import { BASE_URL } from "../../../src/services/config";
import { pokemonDetailsBuilder } from "../../../src/__mocks__/pokemon";

export const handlers = [
	rest.get<{ id: string }>(`${BASE_URL}/pokemon/:id`, async (req, res, ctx) => {
		const { id: selectedId } = req.params;
		const id = Number(selectedId);

		return res(ctx.status(200), ctx.json(pokemonDetailsBuilder(id)));
	}),
];
