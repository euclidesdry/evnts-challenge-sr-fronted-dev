import { Container, Type } from "./styles";

type TagsProps = {
	types: string[];
};

export default function Tags({ types }: TagsProps) {
	return (
		<Container>
			{types.map((type) => (
				<Type key={type} color={type}>
					{type}
				</Type>
			))}
		</Container>
	);
}
