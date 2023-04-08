import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Content = styled.div`
	width: 400px;
	background-color: #fff;
	padding: 24px;
	padding-top: 0;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
	width: 100%;
	padding: 8px 0;
	display: flex;
	justify-content: end;
`;

export const CloseButton = styled.button`
	position: relative;
	background-color: transparent;
	color: #222;
	border: none;
	font-size: 24px;
	cursor: pointer;
	right: -10px;
`;

export const Body = styled.div`
	width: 100%;
`;
