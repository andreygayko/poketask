import { FilteredList, Pokemon, ResponseList } from "../types/Pokemon";
import api from "./axiosInstance";

export async function getPokemonList(qty: number, page: number) {
  const response = await api.get<ResponseList>(
    `/pokemon?limit=${qty}&offset=${qty * (page - 1)}`
  );
  return response.data;
}

export async function getPokemon(name: string) {
  const response = await api.get<Pokemon>(`/pokemon/${name}`);
  return response.data;
}

export async function getAbilitiesList() {
  const qty = 1000;
  const response = await api.get<ResponseList>(`/ability?limit=${qty}`);
  return response.data;
}

export async function getPokemonListByAbility(name: string) {
  const response = await api.get<FilteredList>(`/ability/${name}`);
  return response.data;
}
