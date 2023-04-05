import styled from "styled-components";
import { BASE_BORDER_RADIUS, BASE_DROP_SHADOW } from "../../constants";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 40px 16px;
	padding: 32px 0;
`;

export const ListItem = styled.div`
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

export const Tags = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 4px;
`;

export const Type = styled.span`
	background-color: #7d7d7d;
	color: #fff;
	padding: 4px 8px;
	font-size: 0.8rem;
	border-radius: 4px;
`;
