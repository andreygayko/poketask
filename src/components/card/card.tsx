import useSwr from "swr";
import * as api from "../../network/pokemon-api";
import { Description, Title, Wrapper, Image } from "./styled";

export const Card = ({ name }: { name: string }) => {
  const { data, isLoading } = useSwr(["getPokemon", name], () =>
    api.getPokemon(name)
  );

  if (isLoading) return <>Loading...</>;
  return (
    <Wrapper>
      <Image src={data?.sprites.front_default} alt={name} />
      <Title>{data?.name}</Title>
      <Description>
        Types: {data?.types.map((el) => el.type.name).join(", ")}
      </Description>
      <Description>
        Abilities: {data?.abilities.map((el) => el.ability.name).join(", ")}
      </Description>
    </Wrapper>
  );
};
