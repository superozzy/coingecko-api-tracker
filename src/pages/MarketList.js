import axios from "axios";
import React, { useEffect, useState } from "react";
import MarketPage from "../components/MarketPage";
import MarketTablePrice from "../components/MarketTablePrice";
import SelectRage from "../components/SelectRage";
import PaginationMarket from "../components/PaginationMarket";
const MarketList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);

  const [price, setPrice] = useState("24h");
  const [coins, setCoins] = useState([]);
  const currency = "eur";

  const getMarket = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc%20&per_page=${coinsPerPage}&page=${currentPage}&sparkline=false&price_change_percentage=${price}`
    );
    console.log(response.data);
    setCoins(response.data);
  };
  useEffect(() => {
    getMarket();
    // eslint-disable-next-line
  }, [coinsPerPage, price, currentPage]);
  const changedPrice = (number) => {
    setPrice(number);
    setCoinsPerPage(10);

    setCurrentPage(1);
  };
  const rangePerPage = (number) => {
    setCoinsPerPage(number);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Market</h1>
      <MarketTablePrice changedPrice={changedPrice} />
      <MarketPage coins={coins} price={price} />
      <div className="container-coins">
        <SelectRage
          rangePerPage={rangePerPage}
          setCoinsPerPage={setCoinsPerPage}
        />

        <PaginationMarket
          totalCoins={coins.length}
          coinsPerPage={coinsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default MarketList;
