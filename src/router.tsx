import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import { Provider } from "jotai";

export const Router = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
