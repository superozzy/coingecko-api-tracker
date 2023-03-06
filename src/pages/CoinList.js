import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinsPage from "../components/CoinsPage";
import PaginationPage from "../components/PaginationPage";
import SelectRage from "../components/SelectRage";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const spanStyle = {
    color: "#5D3FD3",
  };
  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/list"
    );
    console.log(response);
    setCoins(response.data);
  };

  const rangePerPage = (number) => {
    setCoinsPerPage(number);
  };
  const lastCoinIndex = currentPage * coinsPerPage;
  const firstCoinIndex = lastCoinIndex - coinsPerPage;
  const currentCoin = coins.slice(firstCoinIndex, lastCoinIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <CoinsPage coins={currentCoin} />
      <div className="container-coins">
        <p style={{ marginRight: "2rem" }}>
          Page: <span style={spanStyle}>{currentPage} </span> with
          <span style={spanStyle}>{coinsPerPage}</span> coins per page of <br />
          <span style={spanStyle}>{coins.length}</span> total list
        </p>
        <SelectRage
          rangePerPage={rangePerPage}
          setCoinsPerPage={setCoinsPerPage}
        />

        <PaginationPage
          totalCoins={coins.length + 1}
          coinsPerPage={coinsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default CoinList;
