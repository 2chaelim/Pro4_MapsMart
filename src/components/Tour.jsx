import { useState } from "react";
import TourLike from "./TourLike";

function Tour({ list }) {
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
