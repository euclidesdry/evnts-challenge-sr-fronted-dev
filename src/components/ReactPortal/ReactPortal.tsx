import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

import { createWrapperAndAppendToBody } from "../../helpers/portals";

type ReactPortalProps = PropsWithChildren & {
	wrapperId?: string;
};

export default function ReactPortal({ children, wrapperId = "react-portal-wrapper" }: ReactPortalProps) {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let systemCreated = false;

		if (!element) {
			systemCreated = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}
		setWrapperElement(element);

		return () => {
			if (systemCreated && element && element.parentNode) {
				element.parentNode.removeChild(element);
			}
		};
	}, [wrapperId]);

	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
}
