import { useState } from "react";
import ShopLike from "./ShopLike";

function Shop({ list }) {
  let [like, setLike] = useState(false);
  console.log(list);
  return (
    <>
      {list.map((a, i) => {
        return <ShopLike a={a} key={i} />;
      })}
    </>
  );
}

export default Shop;
