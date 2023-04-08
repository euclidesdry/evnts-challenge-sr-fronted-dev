import React, { PropsWithChildren, ReactElement } from "react";
// eslint-disable-next-line import/named
import {
	RenderOptions as TestingLibraryRenderOptions,
	RenderHookOptions,
	render as testingLibraryRender,
	renderHook as testingLibraryRenderHook,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "~/contexts/App";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			cacheTime: Infinity,
		},
	},
});

type AllTheProvidersProps = PropsWithChildren;

export const AllTheProviders = ({ children }: AllTheProvidersProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AppContextProvider>{children}</AppContextProvider>
		</QueryClientProvider>
	);
};

type CustomRenderOptions = Omit<TestingLibraryRenderOptions, "wrapper">;

const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
	return testingLibraryRender(ui, { wrapper: AllTheProviders, ...options });
};

function customRenderHook<HookReturn = object, Props = unknown>(
	hook: () => HookReturn,
	options?: RenderHookOptions<Props>
) {
	return testingLibraryRenderHook(hook, { wrapper: AllTheProviders, ...options });
}

// eslint-disable-next-line import/export
export * from "@testing-library/react";

// eslint-disable-next-line import/export
export { customRender as render, customRenderHook as renderHook };
