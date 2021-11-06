
import { useState } from "react";

const MobileSidebar = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar)
  return (
    <div className="container-fluid mobile-view">
      <nav className="navbar navbar-dark bg-dark mobileNavbar">
        <button className="navbar-toggler" type="button" onClick={showSideBar}>
          <span role="button" ><i className="fa fa-bars mobileToggle" aria-hidden="true" style={{ color: "black" }}></i></span>
        </button>
        <div className=" navbar-nav text-center">
          <p className="companyName">Myntra Hell Yeah!</p>
        </div>
        <div className={sideBar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="nav-text">
              <p type="button" onClick={showSideBar}>
                <i className="fa fa-close closeBtn"></i>
              </p>
            </li>
            <li className="nav-text">
              <p>Profile</p>
            </li>
            <li className="nav-text">
              <p>My Videos</p>
            </li>
            <li className="nav-text">
              <p>Comparison</p>
            </li>
            <li className="nav-text">
              <p>Logout</p>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  )
}

export default MobileSidebar;