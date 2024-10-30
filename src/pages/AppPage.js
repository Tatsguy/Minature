import React, { Component } from "react";
import NavbarApp from "../components/navbarApp";
import { Outlet, Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import LoginDialog from "../components/loginDialog";
class AppPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <LoginDialog/>
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
