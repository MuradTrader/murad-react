import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "../components/Shimmer";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // Это делается при первом рендеринге до вызова API с помощью useEffect().
  // Чтобы не возникало ошибки со значением по умолчанию resInfo а это useState(null).
  // Если это не указать то React пытается делать диструктуризацию переменной resInfo,
  // со значением null при первом рендеринге до вызова API  с помощью useEffect().
  // Показываем shimmer до загрузки данных API.
  if (resInfo === null) return <Shimmer />;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
