import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import Pick from "./pages/Pick";
import View from "./pages/View";
import CartPage from "./pages/CartPage";

function App() {
  let subName = useLocation().pathname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=E7ZCqemI4Y7V0HYZZ3qw3XFt8hl4Edgs42aJ6H9yC6QHU0XH42pSYZGnDqCl1db4GlX92LFHHSdHyZCHZqACuw%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response2 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=E7ZCqemI4Y7V0HYZZ3qw3XFt8hl4Edgs42aJ6H9yC6QHU0XH42pSYZGnDqCl1db4GlX92LFHHSdHyZCHZqACuw%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response3 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/shppg/getshppg?serviceKey=E7ZCqemI4Y7V0HYZZ3qw3XFt8hl4Edgs42aJ6H9yC6QHU0XH42pSYZGnDqCl1db4GlX92LFHHSdHyZCHZqACuw%3D%3D&pageNo=1&numOfRows=1000"
        );
        const response4 = await axios.get(
          "https://apis.data.go.kr/6300000/openapi2022/tourroms/gettourroms?serviceKey=E7ZCqemI4Y7V0HYZZ3qw3XFt8hl4Edgs42aJ6H9yC6QHU0XH42pSYZGnDqCl1db4GlX92LFHHSdHyZCHZqACuw%3D%3D&pageNo=1&numOfRows=1000"
        );

        const mergedData = response1.data.response.body.items.concat(
          response2.data.response.body.items,
          response3.data.response.body.items,
          response4.data.response.body.items
        );

        localStorage.setItem("data", JSON.stringify(mergedData));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Pick" element={<Pick subName={subName} />}></Route>
        <Route path="/View" element={<View subName={subName} />}></Route>
        <Route path="/CartPage" element={<CartPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
