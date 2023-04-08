import styled from "styled-components";

export const Container = styled.div<{ noCards: boolean }>`
	display: grid;
	grid-template-columns: ${(props) => (props.noCards ? "auto" : "repeat(auto-fill, minmax(200px, 1fr))")};
	grid-gap: 40px 16px;
	padding: 32px 0;
	min-height: 70vh;
`;

export const Loader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const NoCards = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
