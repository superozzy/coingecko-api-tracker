import "./App.css";
import { Route, Routes } from "react-router-dom";

// pages
import CoinList from "./pages/CoinList";
import MarketList from "./pages/MarketList";
import SingleCoinPage from "./pages/SingleCoinPage";
import RootLayout from "./layout/RootLayout";

// components
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<CoinList />} />
          <Route path="market" element={<MarketList />} />

          <Route path="market/:coinId" element={<SingleCoinPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
