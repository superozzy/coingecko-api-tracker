import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CoinsPage = ({ coins }) => {
  return (
    <Table bsClass="custom-table" responsive>
      <thead>
        <tr className="custom-table-header">
          <th>#</th>
          <th>symbol</th>
          <th>name</th>
        </tr>
      </thead>
      <tbody className="custom-table-body">
        {coins.map((coin) => (
          <>
            <Link to={`/market/${coin.id}`} key={coin.id}>
              <tr className="custom-table-item">
                <td>{coin.id}</td>
                <td>{coin.symbol}</td>
                <td>{coin.name}</td>
              </tr>
            </Link>
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default CoinsPage;
