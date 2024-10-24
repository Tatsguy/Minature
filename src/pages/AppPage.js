import React, { Component } from "react";
import NavbarApp from "../components/navbarApp";
import { Outlet, Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
class AppPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavbarApp />
        <div className="text-end">
          <Link to={"editor"}>
            <button className="addBtn">
              <FaPlus className="iconoMini" /> Nuevo
            </button>
          </Link>
        </div>
        <Outlet />
      </div>
    );
  }
}

export default AppPage;
