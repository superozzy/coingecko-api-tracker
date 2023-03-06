import axios from "axios";

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCoinChart from "./SingleCoinChart";

const CoinsChart = () => {
  const id = useParams();
  const [chart, setChart] = useState([]);
  const [days, setDays] = useState(1);
  useEffect(() => {
    getChart();
    // eslint-disable-next-line
  }, [days]);
  const getChart = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id.coinId}/market_chart?vs_currency=eur&days=${days}`
    );
    console.log(response.data.prices);
    setChart(response.data.prices);
  };

  return (
    <div>
      <SingleCoinChart days={days} chartDays={chart} setDay={setDays} />
    </div>
  );
};

export default CoinsChart;
