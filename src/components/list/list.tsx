import { Card } from "../card";
import { Wrapper } from "./styled";

export const List = ({ data }: { data: { name: string }[] }) => {
  return (
    <Wrapper>
      {data.map((pokemon) => (
        <Card name={pokemon.name} key={pokemon.name} />
      ))}
    </Wrapper>
  );
};
