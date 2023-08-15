import useSwr from "swr";
import * as api from "../../network/pokemon-api";
import { Button, Wrapper } from "./styled";
import { Select } from "../select";

export const Filter = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const { data } = useSwr(["getAbilitiesList"], () => api.getAbilitiesList());

  return (
    <Wrapper>
      {data && (
        <Select
          data={data?.results}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <Button onClick={() => setSelected("")}>clear</Button>
    </Wrapper>
  );
};
