export interface ResponseList {
  count: number;
  results: {
    name: string;
  }[];
}

export interface FilteredList {
  pokemon: {
    pokemon: {
      name: string;
    };
  }[];
}

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}
