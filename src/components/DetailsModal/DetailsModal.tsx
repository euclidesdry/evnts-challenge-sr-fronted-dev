import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactPortal } from "../ReactPortal";

import { Body, CloseButton, Content, Header, Overlay } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { listPokemons } from "~/services/pokemon";
import { listPokemonInfoById } from "~/services/pokemon";

type DetailsModalProps = {
	isOpen: boolean;
	id: number | null;
	onClose: () => void;
};

export default function DetailsModal({ isOpen, id, onClose }: DetailsModalProps) {
	const nodeRef = useRef<HTMLElement | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const { data } = useQuery(["pokemon-info", id], () => listPokemonInfoById(id || 0), {
		keepPreviousData: true,
		staleTime: 1000 * 60 * 60 * 1, // 1000ms * 60 seconds * 60min * 1h
		enabled: Boolean(id),
	});

	const name = data?.name;
	const image = data?.sprites.other["official-artwork"].front_default;
	const sprite = data?.sprites.front_default;

	// console.log("-- --DetailsModal[data]: ", data, image, sprite);

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
							<img src={image} alt={`Pokemon ${name} sprite`} />
							<h2 style={{ textAlign: "center", textTransform: "capitalize" }}>{name}</h2>
						</Body>
					</Content>
				</Overlay>
			</CSSTransition>
		</ReactPortal>
	);
}
