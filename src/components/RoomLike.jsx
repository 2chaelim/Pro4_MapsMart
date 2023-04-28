import { useState } from "react";

function RoomLike({ a }) {
  let [like, setLike] = useState(false);
  return (
    <li className="f-con">
      <p>{a.romsNm}</p>
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

export default RoomLike;
