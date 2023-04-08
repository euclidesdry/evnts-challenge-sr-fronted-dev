import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CSSTransition } from "react-transition-group";

import { ReactPortal } from "../ReactPortal";

import { Body, CloseButton, Content, Entries, FullName, Header, Image, Overlay, PokemonId } from "./styles";
import { listPokemonInfoById } from "~/services/pokemon";
import { Tags } from "../Tags";

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
	const abilities = data?.types.map(({ type }) => type.name);

	console.log("-- --DetailsModal[data]: ", data, image, sprite, abilities);

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
				<Overlay
					ref={nodeRef as React.MutableRefObject<HTMLDivElement>}
					className="modal-overlay"
					onClick={handleClose}
				>
					<Content className="modal-content" onClick={(e) => e.stopPropagation()}>
						<Header>
							<CloseButton onClick={handleClose}>X</CloseButton>
						</Header>
						<Body>
							<Image src={image} alt={`Pokemon ${name} sprite`} />
							<PokemonId>#{id}</PokemonId>
							<h2 style={{ textAlign: "center", textTransform: "capitalize" }}>{name?.replace(/-/g, " ")}</h2>
							<FullName style={{ textAlign: "center", textTransform: "capitalize" }}>
								{name?.replace(/-/g, " ")} Pokémon
							</FullName>
							<div>{abilities && <Tags types={abilities} />}</div>
							<Entries>
								<h3>POKÉDEX ENTRY</h3>
								<p>Loren Ipsum lake sleave oared apodos jsdom Blacks acôndila. </p>
							</Entries>
						</Body>
					</Content>
				</Overlay>
			</CSSTransition>
		</ReactPortal>
	);
}
