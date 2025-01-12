import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div
      className="ml-7 mr-7 mb-20 p-4 w-[250px] rounded-lg w-80 h-[550px]"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h1 className="font-bold py-4 text-lg">{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{avgRating} ⭐️</h3>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
