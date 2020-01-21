import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Container from "../container/Container";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default class Navbar extends React.Component {
  state = {
    isOpen: false,
    isItMobile: false
  };

  componentDidMount() {}

  render() {
    const { active } = this.props;
    return (
      <nav className="navbar">
        <div className="px-3 d-flex justify-content-between align-items-center">
          <Link href="/" prefetch>
            <img
              src="/static/image/logo.png"
              alt="not available"
              className="cursor-pointer"
            />
          </Link>
          <DeskTopMenu active={active} />
        </div>
      </nav>
    );
  }
}

const DeskTopMenu = props => {
  const { active } = props;
  return (
    <div className="menu">
      <div className="d-flex justify-content-end">
        <div className="d-flex justify-content-center nav-link">
          <Link href="/" prefetch>
            <a style={{ color: active === "ourProduct" && "#566573" }}>Home</a>
          </Link>

          <Link href="#aboutUs" prefetch>
            <a style={{ color: active === "successStories" && "#566573" }}>
              About
            </a>
          </Link>

          <Link href="#service" prefetch>
            <a style={{ color: active === "about" && "#566573" }}>Services</a>
          </Link>

          <Link href="#customerSay" prefetch>
            <a style={{ color: active === "blogs" && "#566573" }}>Projects</a>
          </Link>

          <Link href="/" prefetch>
            <a style={{ color: active === "contact" && "#566573" }}>Team</a>
          </Link>

          <Link href="/" prefetch>
            <a style={{ color: active === "contact" && "#566573" }}>Contact</a>
          </Link>
        </div>
        <div className="d-flex justify-content-center social-link">
          <a href="https://www.facebook.com/lolcmm/" target="_blank">
            <i className="fab fa-facebook-f facebook-bg" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCogvzWsh4W2GaUPZEI89BLw"
            target="_blank"
          >
            <i className="fab fa-youtube youtube-bg" />
          </a>
        </div>
      </div>
    </div>
  );
};
