import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { smiley, name, cuisines, stars, delery } = resData?.data;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" alt="res-logo" src={CDN_URL} />

      <h1>{smiley}</h1>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{stars}</h4>
      <h4>{delery}</h4>
    </div>
  );
};

export default RestaurantCard;
