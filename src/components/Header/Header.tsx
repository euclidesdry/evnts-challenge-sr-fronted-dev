import styled from "styled-components";

import PokeLogo from "../../assets/pokemon-logo.svg";
import { BASE_DROP_SHADOW, FILTER_HEIGHT, SMALL_ROUNDED_BORDER } from "../../constants/app";

const HeaderContainer = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 0;
	padding-top: 32px;
`;

const Logo = styled.img`
	width: 268px;
	height: 48px;
`;

const Filters = styled.div`
	width: 100%;
	display: flex;
	gap: 16px;
	margin-top: 24px;
`;

const SearchBar = styled.div`
	width: 100%;
	height: ${FILTER_HEIGHT};
	display: flex;
	padding: 8px 16px;
	background-color: #fff;

	box-shadow: ${BASE_DROP_SHADOW};
	border-radius: ${SMALL_ROUNDED_BORDER};
`;

const SearchInput = styled.input`
	width: 100%;
	background-color: #fff;
	color: #222222;
	border: none;
	outline: none;
`;

const SearchButton = styled.button`
	width: 32px;
	height: 100%;
	padding: 0;
	background-color: #df0248;
	color: #fff;
	border: none;
	border-radius: 8px;
	box-shadow: 0px 4px 8px rgba(200, 9, 60, 0.543);
	cursor: pointer;

	img {
		filter: invert(1);
	}
`;

const PokemonFilter = styled.div`
	width: 180px;
	background-color: #fff;
	padding: 8px 16px;

	box-shadow: ${BASE_DROP_SHADOW};
	border-radius: ${SMALL_ROUNDED_BORDER};
`;

const List = styled.select`
	width: 100%;
	height: 100%;
	background-color: #fff;
	color: #313131;
	border: none;
	outline: none;
	border-radius: ${SMALL_ROUNDED_BORDER};
`;

const Pokemons = [
	"all",
	"normal",
	"fire",
	"water",
	"electric",
	"grass",
	"ice",
	"fighting",
	"poison",
	"ground",
	"flying",
	"psychic",
	"bug",
	"rock",
	"ghost",
	"dragon",
	"dark",
	"steel",
	"fairy",
];

export function Header() {
	return (
		<HeaderContainer>
			<Logo src="/img/pokedex-logo.png" alt="Pokedex Logo" />
			<Filters>
				<SearchBar>
					<SearchInput type="text" name="search-pokemon" placeholder="Search your Pokemon!" />
					<SearchButton>
						<img src={PokeLogo} alt="Search Pokemon Logo" />
					</SearchButton>
				</SearchBar>
				<PokemonFilter>
					<List name="pokemon-type">
						{Array.from(Pokemons).map((item) => (
							<option key={item} value="item" style={{ textTransform: "capitalize" }}>
								{item}
							</option>
						))}
					</List>
				</PokemonFilter>
			</Filters>
		</HeaderContainer>
	);
}
