import { rest } from "msw";
import { BASE_URL } from "../../../src/services/config";
import { pokemonDetailsBuilder, pokemonTypesBuilder } from "../../../src/__mocks__/pokemon";

export const handlers = [
	rest.get(`${BASE_URL}/type`, async (_, res, ctx) => {
		return res(ctx.status(200), ctx.json(pokemonTypesBuilder()));
	}),
	rest.get<{ id: string }>(`${BASE_URL}/pokemon/:id`, async (req, res, ctx) => {
		const { id: selectedId } = req.params;
		const id = Number(selectedId);

		return res(ctx.status(200), ctx.json(pokemonDetailsBuilder(id)));
	}),
];
