import { useState } from "react";
import RoomLike from "./RoomLike";

function Room({ list }) {
  let [like, setLike] = useState(false);
  console.log(list);
  return (
    <>
      {list.map((a, i) => {
        return <RoomLike a={a} key={i} />;
      })}
    </>
  );
}

export default Room;
