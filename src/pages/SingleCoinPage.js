import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCoinPageDetails from "../components/SingleCoinPageDetails";
import axios from "axios";

const SingleCoinPage = () => {
  const id = useParams();
  console.log(id);
  const [coin, setCoin] = useState({});
  useEffect(() => {
    getSingleCoin();
    // eslint-disable-next-line
  }, []);
  const getSingleCoin = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id.coinId}`
    );
    console.log(response.data);
    setCoin(response.data);
  };
  return (
    <div className="single-coin">
      <SingleCoinPageDetails coin={coin} />
    </div>
  );
};

export default SingleCoinPage;
