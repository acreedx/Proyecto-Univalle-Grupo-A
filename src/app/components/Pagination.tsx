import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "@/app/styles/paginationStyles.css";

interface PaginationProps {
  itemsPerPage: number;
  items: any[];
  generateFunction: Function;
}

function Pagination({
  itemsPerPage,
  items,
  generateFunction,
}: PaginationProps) {
  //Paginación valores

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  //Paginación responsive

  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
  const [marginPageRangeDisplayed, setMarginPageRangeDisplayed] = useState(3);
  const [breakLabel, setBreakLabel] = useState<null | string>("...");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const breakpoint = 1160;
      const breakpoint2 = 910;
      const breakpoint3 = 630;

      setPageRangeDisplayed(windowWidth <= breakpoint ? 1 : 5);
      setMarginPageRangeDisplayed(
        windowWidth <= breakpoint2 ? (windowWidth <= breakpoint3 ? 0 : 1) : 3
      );
      setBreakLabel(windowWidth <= breakpoint3 ? null : "...");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ReactPaginate
        className="react-paginate"
        breakLabel={breakLabel}
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPageRangeDisplayed}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
      />
      {generateFunction(currentItems)}
      <ReactPaginate
        className="react-paginate"
        breakLabel={breakLabel}
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPageRangeDisplayed}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
