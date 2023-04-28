import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="hd-wrap">
      <header className="hd mw">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/img/logo_S.png`} alt="logo" />
        </Link>
        <div className="member">
          <Link to="/LogIn">로그인</Link>
          <Link to="/MyPage">마이페이지</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
