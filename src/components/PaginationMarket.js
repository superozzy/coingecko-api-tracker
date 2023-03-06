import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationMarket = ({ currentPage, paginate }) => {
  const items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item
        active={number === currentPage}
        onClick={() => paginate(number)}
        key={number}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination bsSize="medium">{items}</Pagination>
    </div>
  );
};

export default PaginationMarket;
