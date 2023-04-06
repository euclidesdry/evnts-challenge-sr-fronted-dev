import React from "react";
import { render } from "~/utils/test/setup";
import Tags from "./Tags";

type SetupProps = { types?: string[] };

const renderSetup = ({ types }: SetupProps = {}) => {
	const typeList = types || ["fire"];
	const renderResult = render(<Tags types={typeList} />);

	return {
		types: typeList,
		...renderResult,
	};
};

describe("Tags component", () => {
	it("should render the component correctly", async () => {
		const { getByText, types: renderedTypeList } = renderSetup();
		expect(getByText(renderedTypeList[0])).toBeTruthy();
	});

	describe("Pokemon types", () => {
		const types = ["grass", "bug"];
		const { getByText, types: renderedTypeList } = renderSetup({ types });

		const type1 = getByText(renderedTypeList[0]);
		const type2 = getByText(renderedTypeList[1]);

		it("should be rendered with more than 1 types", async () => {
			expect(type1).toBeTruthy();
			expect(type2).toBeTruthy();
		});

		it("should be rendered with respective color", async () => {
			expect(type1.getAttribute("color")).toBe(renderedTypeList[0]);
			expect(type2.getAttribute("color")).toBe(renderedTypeList[1]);
		});
	});
});
