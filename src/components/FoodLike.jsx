import { useState } from "react";

function FoodLike({ a }) {
  let [like, setLike] = useState(false);
  return (
    <li className="f-con">
      <p>{a.restrntNm}</p>
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

export default FoodLike;
