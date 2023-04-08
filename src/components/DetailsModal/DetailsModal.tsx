import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactPortal } from "../ReactPortal";

import { Body, CloseButton, Content, Header, Overlay } from "./styles";

type DetailsModalProps = {
	isOpen: boolean;
	id: number | null;
	onClose: () => void;
};

export default function DetailsModal({ isOpen, id, onClose }: DetailsModalProps) {
	const nodeRef = useRef<HTMLElement | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleClose = () => {
		setIsModalOpen(false);
		onClose();
	};

	useEffect(() => {
		if (isOpen) {
			setIsModalOpen(true);
		}
	}, [isOpen]);

	return (
		<ReactPortal wrapperId="portal-details-modal">
			<CSSTransition in={isModalOpen} timeout={300} unmountOnExit classNames="modal" nodeRef={nodeRef}>
				<Overlay className="modal-overlay" onClick={handleClose}>
					<Content className="modal-content" onClick={(e) => e.stopPropagation()}>
						<Header>
							<CloseButton onClick={handleClose}>X</CloseButton>
						</Header>
						<Body>
							{/* <img src="" alt="" /> */}
							<h2>My Modal is Cool</h2>
						</Body>
					</Content>
				</Overlay>
			</CSSTransition>
		</ReactPortal>
	);
}
