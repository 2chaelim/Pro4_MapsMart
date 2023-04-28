import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main-wrap">
      <section className="main mw">
        <h1 className="main-title">
          <span>지금 바로</span>
          <br />
          <img src={`${process.env.PUBLIC_URL}/img/logo_main.png`} alt="" />
          <span>에서</span>
          <br />
          <span>원하는 장소를 담아보세요!</span>
        </h1>
        <p className="main-smallT">
          <span>음식점, 명소, 쇼핑, 숙박까지!</span>
          <br />
          <span>지역을 선택하고 대전의 모든 핫플레이스를 만나보세요.</span>
          <br />
          <span> 장소를 골라 나만의 장바구니를 채우고 공유할 수 있습니다.</span>
        </p>
        <div className="main-btns">
          <button>
            <Link to="/Pick">바로 담기</Link>
          </button>
          <button>
            <Link to="/View">장바구니 엿보기</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Main;
