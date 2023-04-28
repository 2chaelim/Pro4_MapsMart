import { useState } from "react";
import TourLike from "./TourLike";

function Tour({ list }) {
  let [like, setLike] = useState(false);
  console.log(list);
  return (
    <>
      {list.map((a, i) => {
        return <TourLike a={a} key={i} />;
      })}
    </>
  );
}

export default Tour;
