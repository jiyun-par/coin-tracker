import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:coinId" element={<Coin />}>
					<Route path="chart" element={<Chart />} />
					<Route path="price" element={<Price />} />
				</Route>
				<Route path="/coin-tracker" element={<Coins />} />
			</Routes>
		</BrowserRouter>
	);
}
export default Router;
