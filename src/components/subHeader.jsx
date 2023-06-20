import { useEffect } from "react";
import { Link } from "react-router-dom";

function SubHeader({ subName }) {
  let bar = subName === "/" ? "" : "bar";
  useEffect(() => {
    let linkName = document.querySelectorAll(".subHeader > a");
    linkName.forEach((item) => {
      console.log(item);
      item.classList.remove("on");
      if (item.getAttribute("href") == subName) {
        item.classList.add("on");
      }
    });
  }, [subName]);
  return (
    <section>
      <nav className={"subHeader mw"}>
        <Link to="/Pick">바로 담기</Link>
        <Link to="/View">장바구니 엿보기</Link>
        <Link to="/CartPage">MY장바구니</Link>
      </nav>
    </section>
  );
}

export default SubHeader;
