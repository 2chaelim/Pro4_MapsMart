import Detail from "./Detail";

function HotCard({ item }) {
  return (
    <div className="hot-imgCon">
      <img
        src={`${process.env.PUBLIC_URL}/img/hotlist/${item.img}`}
        alt={item.title}
      />
      <p className="place-name">{item.title}</p>
      <p className="for-detail">
        <Detail item={item} />
      </p>
    </div>
  );
}

export default HotCard;
