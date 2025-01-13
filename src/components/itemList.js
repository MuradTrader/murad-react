import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="mt-3 border-b-2 border-gray-300 text-left flex justify-between h-50"
        >
          {" "}
          <div>
            <span className="text-[15px]">{item.card.info.name}</span>
            <p className="font-normal">
              {" "}
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p className="text-[13px] pt-4 max-w-2xl text-gray-600 font-light">
              {item.card.info.description}
            </p>
          </div>
          <div className="mx-4">
            <img
              alt="🤵"
              src={CDN_URL + item.card.info.imageId}
              className="max-w-40 rounded-lg mt-6"
            />
            <button className="relative bottom-7 left-[20px] bg-white shadow-lg text-green-500 px-10 py-2 rounded-lg">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
