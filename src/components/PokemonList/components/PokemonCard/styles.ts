import styled from "styled-components";
import { BASE_BORDER_RADIUS, BASE_DROP_SHADOW } from "../../../../constants";

export const Container = styled.div`
	max-height: 140px;
	position: relative;
	background-color: #fff;
	padding: 16px;
	padding-top: 48px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.3s ease;

	border-radius: ${BASE_BORDER_RADIUS};
	box-shadow: ${BASE_DROP_SHADOW};

	&:hover {
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
		transform: scale(1.1);
		cursor: pointer;
		user-select: none;
		z-index: 99;
	}

	&:active {
		transition: all 0.2s ease;
		transform: scale(0.95);
	}
`;

export const Sprite = styled.img`
	height: 60px;
	position: absolute;
	top: -30px;
`;

export const Id = styled.h6`
	color: #888888;
`;

export const Name = styled.h4`
	font-weight: 800;
	text-transform: capitalize;
`;
