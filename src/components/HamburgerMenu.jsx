import { GiHamburgerMenu } from "react-icons/gi";
const HamburgerMenu = () => {
    
  return (
    <div className="hamNav">
      <img src="src/images/logo1.png" alt="" className="logo" />
      <h1>Arindam Sharma</h1>
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
      {/* <GiHamburgerMenu color="white" size={30} /> */}
        <GiHamburgerMenu
          size={25}
          style={{ margin: "10px" }}
        />
      </button>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header ">
          <img
            src="\src\images\logo.png"
            style={{ width: "2.5rem", filter: "invert(1)" }}
          />
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Arindam Sharma
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body hamburger-body bg-dark">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link`}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className={`nav-link`}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#education"
                className={`nav-link`}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link`}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={`nav-link`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
