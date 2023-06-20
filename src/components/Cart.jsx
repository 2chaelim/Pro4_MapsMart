import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartStore";

function Cart() {
  let [carts, setCarts] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [addItems, setAddItems] = useState([]);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <section className="cart">
      <div className="cart">
        <button
          className="bag"
          onClick={() => {
            setCarts(!carts);
          }}
        >
          bag
        </button>
        <div className={`cart-block ${carts ? "active" : ""}`}>
          <button
            className="close"
            onClick={() => {
              setCarts(false);
            }}
          >
            X
          </button>
          <span>담은 목록</span>
          <div className="cart-con">
            {cart.map((a, i) => {
              return (
                <div className="cart-place">
                  <p>{a.title}</p>
                  <button
                    className="del"
                    onClick={() => {
                      dispatch(
                        removeItem({
                          title: a.title,
                        })
                      );
                    }}
                  >
                    삭제
                  </button>
                </div>
              );
            })}
          </div>
          <div className="cart-done">
            <Link to="/CartPage">저장하기</Link>
            <Link to="/">공유하기</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
