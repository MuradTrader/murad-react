import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, price, image, weight, description, restaurant } = resData;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" alt="res-logo" src={restaurant.logo} />
      <img className="res-logo" alt="res-logo" src={image} />

      <h1>{name}</h1>
      <h2>{price}</h2>
      <h4>{weight}</h4>
      <span>{description}</span>
      <h4>{restaurant.name}</h4>
    </div>
  );
};

export default RestaurantCard;
