import type { Config } from "jest";

export default async (): Promise<Config> => {
	return {
		preset: "ts-jest",
		testEnvironment: "jsdom",
		roots: ["<rootDir>/src"],
		moduleDirectories: ["node_modules", "src"],
		moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
		setupFilesAfterEnv: ["<rootDir>/jest/setup.js"],
		collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
		testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
		transform: {
			".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
			"^.+\\.(js|jsx|mjs|cjs)$": "babel-jest",
			"^.+\\.(ts|tsx)?$": "ts-jest",
		},
		transformIgnorePatterns: [
			"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
			"^.+\\.module\\.(css|sass|scss)$",
		],
		modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/src/utils/test/"],
		moduleNameMapper: {
			"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
			"^~/(.*)$": "<rootDir>/src/$1",
		},
		watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
		resetMocks: true,
	};
};
