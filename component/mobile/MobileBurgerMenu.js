import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

const nav = "/img/mobile/nav.png";
const arrow = "/img/mobile/arrow.png";

const listMenu = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/price",
    name: "Pricing",
  },
  {
    link: "/contact",
    name: "Contact",
  },
  {
    link: "/blog",
    name: "Blog",
  },
];

export class MobileBurgerMenu extends Component {
  constructor() {
    super();
    this.state = {
      isMobileNavbarOpen: false,
    };
  }

  /*========================================================
                    react-burger-menu event handlers
      ========================================================*/

  handleOnStateChange = (stateVal) => {
    this.setState({ isMobileNavbarOpen: stateVal.isOpen });
  };

  closeMobileNavbar = () => {
    this.setState({ isMobileNavbarOpen: false });
  };

  render() {
    return (
      <div>
        <Menu
          right
          isOpen={this.state.isMobileNavbarOpen}
          onStateChange={(stateVal) => this.handleOnStateChange(stateVal)}
          burgerButtonClassName={"menu"}
          customBurgerIcon={
            <img src={nav} alt="burger open" className="mobile-nav-icon" />
          }
          customCrossIcon={
            <div className="row mx-0 align-items-center">
              <img src={arrow} alt="arrow" className="arrow-img" />
              <h1>GO BACK</h1>
            </div>
          }
          overlayClassName={"myOverlay"}
        >
          {listMenu.map((data, index) => (
            <span key={index} className="menu-item">
              <Link href={data.link}>
                <a>
                  <span onClick={() => this.closeMobileNavbar()}>
                    {data.name}
                  </span>
                </a>
              </Link>
            </span>
          ))}
        </Menu>
      </div>
    );
  }
}

export default MobileBurgerMenu;
