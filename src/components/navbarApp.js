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
import { FaPlusCircle } from "react-icons/fa";
export default function NavbarApp() {
  return (
    <div className="frame-container">
      <header className="toolbar">
        <div className="toolbar-content">
          <img src={logo} className="logoApp" alt="LogoMinature" />
          <p>Minature</p>
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
                <button><IoIosSettings /></button>
                <button><IoIosSettings /></button>
              </div>
            </div>
          </div>
          <div className="text-medium-emphasis">
            No hay aventuras que mostrar
          </div>
        </div>
        <div className="text-end">
          <button><FaPlusCircle />Nuevo</button>
        </div>
      </main>
    </div>
  );
}
