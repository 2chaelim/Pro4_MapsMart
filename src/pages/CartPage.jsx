import { useSelector } from "react-redux";

function CartPage() {
  let cart = useSelector((state) => state.cart);
  return (
    <section>
      <p>MY 장바구니</p>
      <ul>
        {cart.map((a, i) => {
          return (
            <li key={i}>
              <div>
                <p>{a.title}</p>
                <p>{a.addr}</p>
                <p>{a.dtlAddr}</p>
                <p>{a.tel}</p>
                <p>{a.summ}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CartPage;
