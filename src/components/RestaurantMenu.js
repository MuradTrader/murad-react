import { useParams } from "react-router";
import { ShimmerCard } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // Это делается при первом рендеринге до вызова API с помощью useEffect().
  // Чтобы не возникало ошибки со значением по умолчанию resInfo а это useState(null).
  // Если это не указать то React пытается делать диструктуризацию переменной resInfo,
  // со значением null при первом рендеринге до вызова API  с помощью useEffect().
  // Показываем shimmer до загрузки данных API.
  if (resInfo === null) return <ShimmerCard />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const card1 =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const card2 =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const itemCards = card1?.itemCards || card2?.itemCards || []; // Явная проверка наличия itemCards

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </p>
    </div>
  );
};
export default RestaurantMenu;
