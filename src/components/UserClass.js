import React from "react";
import { ShimmerCard } from "./Shimmer";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // здесь значение по умолчанию для первого рендеринга
    this.state = {
      userInfo: null,
      //   {
      //     // login: "M",
      //     // location: "Default",
      //     // avatar_url: "🫠",
      //     // html_url: "😭",
      //   },
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/MuradTrader");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    if (this.state.userInfo === null) return <ShimmerCard />;
    const { login, avatar_url, html_url } = this.state.userInfo;
    // console.log("Child Render");
    return (
      <div className="user-card">
        <img className="img-User" src={avatar_url} />
        <h1>Name: {login}</h1>
        <h2>
          GitHup: 👉 <a href={html_url}>Subscribe!</a>{" "}
        </h2>
        <h4>Email: muradpro222@mail.ru</h4>
      </div>
    );
  }
}

export default UserClass;
