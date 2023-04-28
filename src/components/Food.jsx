import FoodLike from "./FoodLike";

function Food({ list }) {
  console.log(list);
  return (
    <>
      {list.map((a, i) => {
        return <FoodLike a={a} key={i} />;
      })}
    </>
  );
}

export default Food;
