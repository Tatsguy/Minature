import logo from "../assets/Estrella_Logo.png";
export default function Navbar() {
  return (
    <div className="barra">
      <div className="barra-content">
        <img src={logo} alt="Logo" width={80} />
        <div className="listaEle">
          <a className="btnNav" href="/">
            iNICIO
          </a>
          <a className="btnNav" href="help">
            aYUDA
          </a>
          <a className="btnNav" href="app">
            iR A LA APP
          </a>
        </div>
      </div>
    </div>
  );
}
