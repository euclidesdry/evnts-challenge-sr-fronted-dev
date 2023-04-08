import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Layout from "~/components/Layout";
import Home from "~/pages/Home";
import { AppContextProvider } from "~/contexts/App";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false, // default: true
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppContextProvider>
				<div className="App">
					<Layout>
						<Home />
					</Layout>
				</div>
				<ReactQueryDevtools initialIsOpen={false} />
			</AppContextProvider>
		</QueryClientProvider>
	);
}

export default App;
