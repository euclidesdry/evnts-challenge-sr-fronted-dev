import styled from "styled-components";

export const Container = styled.div<{ noCards: boolean }>`
	display: grid;
	grid-template-columns: ${(props) =>
		props.noCards ? "auto" : "repeat(auto-fill, minmax(200px, 1fr))"};
	grid-gap: 40px 16px;
	padding: 32px 0;
`;
