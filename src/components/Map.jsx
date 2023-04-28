import { useEffect } from "react";
const { kakao } = window;

function Map({ item }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(item.mapLat, item.mapLot),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(item.mapLat, item.mapLot);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return <div id="map"></div>;
}

export default Map;
