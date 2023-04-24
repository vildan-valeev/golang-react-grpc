import React, {FC} from 'react';
import {getPagesArray} from "../../../utils/pages";

interface PaginationProps {
  totalPages: any
  page: number
  changePage: any
}

const Pagination: FC<PaginationProps> = ({totalPages, page, changePage}) => {
  let pageArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pageArray.map(p =>
        <span onClick={() => changePage(p)} key={p} className={page === p ? "page page__current" : "page"}>
            {p}
          </span>
      )}
    </div>
  );
};

export default Pagination;
