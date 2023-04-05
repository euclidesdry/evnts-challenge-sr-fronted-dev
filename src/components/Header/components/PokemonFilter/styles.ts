import styled from "styled-components";
import { BASE_DROP_SHADOW, SMALL_ROUNDED_BORDER } from "../../../../constants/app";

export const Container = styled.div`
	width: 180px;
	background-color: #fff;
	padding: 8px 16px;

	box-shadow: ${BASE_DROP_SHADOW};
	border-radius: ${SMALL_ROUNDED_BORDER};

	@media (max-width: 486px) {
		width: 100%;
	}
`;

export const List = styled.select`
	width: 100%;
	height: 100%;
	background-color: #fff;
	color: #313131;
	border: none;
	outline: none;
	border-radius: ${SMALL_ROUNDED_BORDER};
`;
