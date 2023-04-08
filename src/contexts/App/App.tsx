import { PropsWithChildren, createContext, useContext, useState } from "react";

type AppContextType = {
	selectedPokemon: number | null;
	offset: number;
	searchTerm: string;
	selectedType?: string | number | null;
	setSelectedPokemon: (isOpen: number | null) => void;
	setOffset: (offset: number) => void;
	setSearchTerm: (searchTerm: string) => void;
	setSelectedType: (type: string | null) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export default function AppContextProvider({ children }: PropsWithChildren) {
	const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
	const [selectedType, setSelectedType] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [offset, setOffset] = useState(0);

	return (
		<AppContext.Provider
			value={{
				offset,
				searchTerm,
				selectedPokemon,
				selectedType,
				setSelectedPokemon,
				setSelectedType,
				setSearchTerm,
				setOffset,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error("useAppContext must be used within a AppContextProvider");
	}

	return context;
}
