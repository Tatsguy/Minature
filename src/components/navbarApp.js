import logo from "../assets/Estrella_Logo.png";
import profile from "../assets/1054168-t.jpg";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { FaCalendarDay } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import { FaMap } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { GoDesktopDownload } from "react-icons/go";
import { GrRefresh } from "react-icons/gr";
import { BsFilterLeft } from "react-icons/bs";
export default function NavbarApp() {
  return (
    <div className="frame-container">
      <header className="toolbar">
        <div className="toolbar-content">
          <a href="/">
            <img src={logo} className="logoApp" alt="LogoMinature" />
            <p>Minature</p>
          </a>
        </div>
        <button className="fixed-profile">
          <div className="profile-content">
            <img
              alt="profile_photo"
              src={profile}
              className="rounded-profile"
            />
            <RiArrowDownSFill />
          </div>
        </button>
      </header>
      <nav className="navigation-drawer">
        <div className="navigation-drawer-content">
          <div className="tool-list">
            <a className="list-item" href="/">
              <HiMiniRectangleStack />
            </a>
            <a className="list-item" href="/">
              <FaCalendarDay />
            </a>
            <a className="list-item" href="/">
              <FaRegImage />
            </a>
            <a className="list-item" href="/">
              <FaMap />
            </a>
            <a className="list-item" href="/">
              <FaSearch />
            </a>
            <a className="list-item" href="/">
              <IoIosSettings />
            </a>
            <a className="list-item" href="/">
              <GoDesktopDownload />
            </a>
          </div>
        </div>
      </nav>
      <main className="main-app">
        <div className="app-container">
          <div className="mx-auto">
            <div className="d-flex">
              <h3>Aventuras</h3>
              <div>
                <button className="transBtn">
                  <GrRefresh />
                </button>
                <button className="transBtn">
                  <BsFilterLeft />
                </button>
              </div>
            </div>
          </div>
          <div className="text-medium-emphasis">
            No hay aventuras que mostrar
          </div>
        </div>
      </main>
    </div>
  );
}
