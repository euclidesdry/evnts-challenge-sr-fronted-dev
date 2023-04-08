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
	:-internal-autofill-selected {
		background-color: #fff !important;
	}
`;

export const ClearSearchBarButton = styled.button`
	width: 32px;
	height: 100%;
	padding: 0 32px;
	border: none;
	background-color: transparent;
	color: #222222;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.15);
	}

	&:active {
		transition: all 0.2s ease;
		transform: scale(0.95);
	}
`;

export const SearchButton = styled.button`
	width: 32px;
	height: 100%;
	padding: 0;
	background-color: #df0248;
	color: #fff;
	border: none;
	border-radius: 8px;
	transition: all 0.3s ease;
	box-shadow: 0px 4px 8px rgba(200, 9, 60, 0.543);
	cursor: pointer;

	&:hover {
		background-color: rgb(255 22 95);
		transform: scale(1.1);
	}

	&:active {
		background-color: rgb(150 22 95);
		transition: all 0.2s ease;
		transform: scale(0.95);
	}

	img {
		transition: all 0.2s ease;
		filter: invert(1);

		&:hover {
			transition: all 0.5s ease;
			transform: rotate(145deg);
		}

		&:active {
			transform: rotate(0deg);
		}
	}
`;
