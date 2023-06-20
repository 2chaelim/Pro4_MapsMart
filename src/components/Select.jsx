import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import locations from "../location";
import Food from "./Food";
import Tour from "./Tour";
import Shop from "./Shop";
import Room from "./Room";
import PlaceList from "./PlaceList";
import Cart from "./Cart";

function Select({}) {
  let [selectGu, setSelectGu] = useState([]);
  let [dataF, setDataF] = useState([]);
  let [dataT, setDataT] = useState();
  let [dataS, setDataS] = useState();
  let [dataR, setDataR] = useState();
  let [dataGu, setDataGu] = useState();
  let [dataDong, setDataDong] = useState();
  let [dataGD, setDataGD] = useState(1);
  let [selectCate, setSelectCate] = useState("1");
  let [selectItem, setSelectItem] = useState([]);
  let [locationList] = useState(locations);
  let [addItems, setAddItems] = useState([]);

  useEffect(() => {
    const allData = localStorage.getItem("data");
    if (allData) {
      setDataGu(JSON.parse(allData));
    }
    setSelectItem(JSON.parse(allData));
  }, []);
  // console.log(selectItem);

  // console.log(addItems);
  const handleSelectGu = (e) => {
    const inputText = e.target.value.trim();
    setSelectGu(locationList[inputText]);
    const filterData =
      inputText === "구전체" || null
        ? [...selectItem]
        : selectItem.filter((a) => {
            return Object.values(a).some(
              (value) => typeof value === "string" && value.includes(inputText)
            );
          });
    setDataGu(filterData);
    setDataDong(filterData);
    setDataGD(1);
  };
  // console.log(selectItem);

  const handleSelectDong = (e) => {
    const inputText2 = e.target.value.trim();
    setDataGu(
      inputText2 === "전체" || null
        ? [...dataDong]
        : dataDong.filter((a) => {
            return Object.values(a).some(
              (value) => typeof value === "string" && value.includes(inputText2)
            );
          })
    );
    setDataGD(1);
  };

  // console.log(selectGu);
  // console.log(dataDong);

  useEffect(() => {
    if (!dataGu) {
      return;
    }
    const newDataF = [];
    const newDataT = [];
    const newDataS = [];
    const newDataR = [];
    dataGu.forEach((data) => {
      if (data.restrntNm) {
        newDataF.push(data);
      } else if (data.tourspotNm) {
        newDataT.push(data);
      } else if (data.shppgNm) {
        newDataS.push(data);
      } else if (data.romsNm) {
        newDataR.push(data);
      }
    });
    setDataF(newDataF);
    setDataT(newDataT);
    setDataS(newDataS);
    setDataR(newDataR);
  }, [dataGu]);

  // console.log(dataGu);
  // console.log(dataF);

  const handleCate = (e) => {
    setSelectCate(e.target.value);
  };

  let selectedComponent = null;
  if (selectCate === "1") {
    selectedComponent = <Food list={dataF} />;
  } else if (selectCate === "2") {
    selectedComponent = <Tour list={dataT} />;
  } else if (selectCate === "3") {
    selectedComponent = <Shop list={dataS} />;
  } else if (selectCate === "4") {
    selectedComponent = <Room list={dataR} />;
  }

  // console.log(selectCate);
  return (
    <section className="select ">
      <div className="top-menu mw">
        <div className="choice">
          <select name="choiceGu" id="" onChange={handleSelectGu}>
            <option value="구전체">구 선택</option>
            <option value="유성구">유성구</option>
            <option value="대덕구">대덕구</option>
            <option value="서구">서구</option>
            <option value="중구">중구</option>
            <option value="동구">동구</option>
          </select>
          <select name="choiceDong" id="" onChange={handleSelectDong}>
            <option value="전체">전체</option>
            {selectGu.map((gu, i) => {
              return (
                <option value={gu} key={i}>
                  {gu}
                </option>
              );
            })}
          </select>
          <select name="cate" id="" onChange={handleCate}>
            <option value="0">분류</option>
            <option value="1">음식</option>
            <option value="2">관광지</option>
            <option value="3">쇼핑</option>
            <option value="4">숙박</option>
          </select>
        </div>
        <Cart />
      </div>
      <div className="hot-title mw">
        <p>
          <span>핫</span> 플레이스
        </p>
        <img
          className="hot-img"
          src={`${process.env.PUBLIC_URL}/img/hot.png`}
          alt="fire"
        />
      </div>
      <PlaceList />
      <div className="self-title mw">
        <p>
          <span>골라</span>담기
        </p>
        <img src={`${process.env.PUBLIC_URL}/img/pick.png`} alt="골라담기" />
      </div>
      <div className="selfCard-f mw">
        <ul className="f-card">{selectedComponent}</ul>
      </div>
    </section>
  );
}

export default Select;
