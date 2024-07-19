import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import { Provider } from "jotai";
import UnityPage from "./pages/unity";

function Router() {
	return (
		<BrowserRouter>
			<Provider>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/unity" element={<UnityPage />} />
				</Routes>
			</Provider>
		</BrowserRouter>
	);
}

export default Router;
