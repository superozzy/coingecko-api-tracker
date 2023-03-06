import React from "react";
import { Table } from "react-bootstrap";

import { Link } from "react-router-dom";

const MarketPage = ({ coins, price }) => {
  return (
    <div>
      <Table bsClass="custom-table" responsive>
        <thead>
          <tr className="custom-table-header">
            <th>Rank</th>
            <th>Coin</th>
            <th>image</th>

            <th>symbol</th>
            <th>Current Price</th>
            <th>{price}</th>
          </tr>
        </thead>
        <tbody className="custom-table-body">
          {coins &&
            coins.map((coins) => (
              <>
                <Link to={`${coins.id}`}>
                  <tr className="custom-table-item" key={coins.id}>
                    <td>{coins?.market_cap_rank}</td>
                    <td>{coins?.name}</td>
                    <td>
                      <img src={coins.image} alt="" className="image" />
                    </td>
                    <td>{coins.symbol.toUpperCase()}</td>
                    <td>&euro;{coins.current_price.toLocaleString()}</td>
                    {coins?.price_change_percentage_24h?.toFixed(2) > 0 ? (
                      <td className="green">
                        + {coins?.price_change_percentage_24h?.toFixed(2)}
                      </td>
                    ) : (
                      <td className="red">
                        {coins?.price_change_percentage_24h?.toFixed(2)}
                      </td>
                    )}{" "}
                    %
                  </tr>
                </Link>
              </>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MarketPage;
