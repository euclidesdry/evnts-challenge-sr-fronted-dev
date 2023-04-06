import React, { PropsWithChildren, ReactElement } from "react";
// eslint-disable-next-line import/named
import { RenderOptions as TestingLibraryRenderOptions, render as testingLibraryRender } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type AllTheProvidersProps = PropsWithChildren & object;

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

type CustomRenderOptions = Omit<TestingLibraryRenderOptions, "wrapper">;

const customRender = (ui: ReactElement, options?: CustomRenderOptions) =>
	testingLibraryRender(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
