import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  // Это делается при первом рендеринге до вызова API с помощью useEffect().
  // Чтобы не возникало ошибки со значением по умолчанию resInfo а это useState(null).
  // Если это не указать то React пытается делать диструктуризацию переменной resInfo,
  // со значением null при первом рендеринге до вызова API  с помощью useEffect().
  // Показываем shimmer до загрузки данных API.
  if (resInfo === null) return <Shimmer />;

  // const info = resInfo?.cards[2]?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  // const infoCards =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
  //     .itemCards || [];
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      .itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.id}>
            {item.card.info.name} -{` Rs.`}
            {item.card.info.defaultPrice / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
