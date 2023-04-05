import styled from "styled-components";
import { BASE_BORDER_RADIUS, BASE_DROP_SHADOW } from "../../constants";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 40px 16px;
	padding: 32px 0;
`;
