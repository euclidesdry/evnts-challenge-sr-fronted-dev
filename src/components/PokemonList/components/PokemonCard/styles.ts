import styled from "styled-components";
import { BASE_BORDER_RADIUS, BASE_DROP_SHADOW } from "../../../../constants";

export const Container = styled.div`
	position: relative;
	background-color: #fff;
	padding: 16px;
	padding-top: 48px;
	display: flex;
	flex-direction: column;
	align-items: center;

	border-radius: ${BASE_BORDER_RADIUS};
	box-shadow: ${BASE_DROP_SHADOW};
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
`;
