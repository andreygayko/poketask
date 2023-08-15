import useSwr from "swr";
import * as api from "../../network/pokemon-api";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { useState } from "react";
import { Message, Wrapper } from "./styled";
import { Filter } from "../../components/filter";

const CARDS_PER_PAGE = 20;

export const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const [ability, setAbility] = useState("");

  const { data: pokemonList, isLoading } = useSwr(
    ["getPokemonList", CARDS_PER_PAGE, page],
    () => api.getPokemonList(CARDS_PER_PAGE, page)
  );

  const { data: pokemonListByAbility, isLoading: isLoadingListByAbility } =
    useSwr(["getPokemonListByAbility", ability], () =>
      api.getPokemonListByAbility(ability)
    );

  const filteredListByAbility = pokemonListByAbility?.pokemon?.map(
    (el) => el.pokemon || []
  );
  console.log(pokemonList, filteredListByAbility);

  if (isLoading || isLoadingListByAbility) return <>Loading...</>;
  return (
    <Wrapper>
      <Filter selected={ability} setSelected={setAbility} />
      {ability && filteredListByAbility && (
        <List data={filteredListByAbility} />
      )}
      {pokemonList && !ability && (
        <>
          <List data={pokemonList.results} />
          <Pagination
            page={page}
            itemsQty={pokemonList?.count || 0}
            itemsPerPage={CARDS_PER_PAGE}
            pageSetter={setPage}
          />
        </>
      )}
      {ability && !filteredListByAbility?.length && !isLoadingListByAbility && (
        <Message>Pokemons were not found</Message>
      )}
    </Wrapper>
  );
};
