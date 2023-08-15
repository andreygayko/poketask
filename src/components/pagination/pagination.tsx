import { Wrapper } from "./styled";

interface PaginationProps {
  page: number;
  itemsQty: number;
  itemsPerPage: number;
  pageSetter: (value: ((prevValue: number) => number) | number) => void;
}

export const Pagination = ({
  page,
  itemsQty,
  itemsPerPage,
  pageSetter,
}: PaginationProps) => {
  const pagesCount = Math.ceil(itemsQty / itemsPerPage);
  const startPage = page <= 3 ? 1 : page - 2;
  const pagesCut = Array.from({ length: 5 }, (_, i) => startPage + i);

  //const pages = Array.from(Array(pagesCount).keys());

  return (
    <Wrapper>
      <li
        onClick={
          page === 1 ? undefined : () => pageSetter((prev: number) => prev - 1)
        }
      >
        Prev
      </li>
      {pagesCut.map((el) => (
        <li
          onClick={() => pageSetter(el)}
          style={el === page ? { color: "#ff0000" } : {}}
          key={el}
        >
          {el}
        </li>
      ))}
      <li
        onClick={
          page === pagesCount ? undefined : () => pageSetter((prev) => prev + 1)
        }
      >
        Next
      </li>
    </Wrapper>
  );
};
