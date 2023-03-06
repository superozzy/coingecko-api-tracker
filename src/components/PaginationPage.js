import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

import PaginationItem from "react-bootstrap/lib/PaginationItem";

const PaginationPage = ({
  totalCoins,
  coinsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const items = [];

  const [pageNumberLimit] = useState(5);
  const [maxpageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minpageNumberLimit, setMinPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    items.push(i);
  }

  const renderPageNumber = items.map((number) => {
    if (number < maxpageNumberLimit + 1 && number > minpageNumberLimit) {
      return (
        <PaginationItem
          key={number}
          onClick={() => setCurrentPage(number)}
          className={number === currentPage ? "active" : ""}
        >
          {number}
        </PaginationItem>
      );
    } else {
      return null;
    }
  });

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxpageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    if (currentPage + 1 > maxpageNumberLimit) {
      setMaxPageNumberLimit(maxpageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
    if (currentPage === totalCoins) {
      return totalCoins + 1;
    }
  };

  return (
    <div>
      <Pagination bsSize="medium">
        <Pagination.Prev
          onClick={handlePrev}
          disabled={currentPage === items[0] ? true : false}
        />

        {renderPageNumber}

        <Pagination.Next
          onClick={handleNext}
          disabled={currentPage === totalCoins + 1 ? true : false}
        />
      </Pagination>
    </div>
  );
};

export default PaginationPage;
