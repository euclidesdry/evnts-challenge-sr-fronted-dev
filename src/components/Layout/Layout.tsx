import { PropsWithChildren } from "react";

import Header from "../Header";
import Footer from "../Footer";

import { Container } from "./styles";

type LayoutProps = PropsWithChildren & object;

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</>
	);
}
