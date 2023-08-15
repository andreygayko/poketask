import { Input, Options } from "./styled";
import { useEffect, useRef, useState } from "react";

export const Select = ({
  data,
  selected,
  setSelected,
}: {
  data: { name: string }[];
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef}>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
        onFocus={() => setOpen(true)}
        placeholder="Ability"
      />
      {open && (
        <Options>
          {data?.map((el) => (
            <li
              key={el?.name}
              style={
                el?.name?.toLowerCase().includes(inputValue)
                  ? { display: "block" }
                  : { display: "none" }
              }
              onClick={() => {
                if (el?.name?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(el?.name);
                  setOpen(false);
                  setInputValue(el.name);
                }
              }}
            >
              {el?.name}
            </li>
          ))}
        </Options>
      )}
    </div>
  );
};
