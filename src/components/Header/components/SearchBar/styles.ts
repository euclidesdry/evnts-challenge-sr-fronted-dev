import styled from "styled-components";
import { BASE_DROP_SHADOW, FILTER_HEIGHT, SMALL_ROUNDED_BORDER } from "../../../../constants";

export const Container = styled.div`
	width: 100%;
	height: ${FILTER_HEIGHT};
	display: flex;
	padding: 8px 16px;
	background-color: #fff;

	box-shadow: ${BASE_DROP_SHADOW};
	border-radius: ${SMALL_ROUNDED_BORDER};
`;

export const SearchInput = styled.input`
	width: 100%;
	background-color: #fff;
	color: #222222;
	border: none;
	outline: none;
`;

export const SearchButton = styled.button`
	width: 32px;
	height: 100%;
	padding: 0;
	background-color: #df0248;
	color: #fff;
	border: none;
	border-radius: 8px;
	box-shadow: 0px 4px 8px rgba(200, 9, 60, 0.543);
	cursor: pointer;

	img {
		filter: invert(1);
	}
`;
