import React from "react";
import { createRoot } from "react-dom/client";

/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *  - RestaurantCard
 *   - Img
 *   - Name of Res, Star Rating, cuisines, delery tie
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808/1ea776107712241.Y3JvcCwyNjY0LDIwODQsNDYsMA.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { smiley, name, cuisines } = resData?.data;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/e0vvulfbahjxjz6k4uwi"
      />

      <h1>{smiley}</h1>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>4.4 start</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const resList = [
  {
    type: "restaurant",
    data: {
      id: 0,
      name: "KFC",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      smiley: "🤪",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 1,
      name: "MAC",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      smiley: "⭐️",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 2,
      name: "VKUSNO",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      smiley: "🚀",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 3,
      name: "TOCHKA",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      smiley: "🥹",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 4,
      name: "IZI",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      smiley: "😱",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 5,
      name: "LIKE",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      smiley: "👍",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} /> */}
      </div>
    </div>
  );
};

const AppLayuot = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayuot />);
