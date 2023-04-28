import { useState } from "react";

function ShopLike({ a }) {
  let [like, setLike] = useState(false);
  return (
    <li className="f-con">
      <p>{a.shppgNm}</p>
      <div
        onClick={() => {
          setLike(!like);
        }}
      >
        {like === false ? (
          <img
            src={`${process.env.PUBLIC_URL}/img/like-none.png`}
            alt="좋아요x"
          />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" />
        )}
      </div>
    </li>
  );
}

export default ShopLike;
