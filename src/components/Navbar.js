

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg window-header">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button">
          <span role="button" ><i className="fa fa-bars" aria-hidden="true" style={{ color: "black" }}></i></span>
        </button>
        <div className="collapse navbar-collapse">
          <p className="navbar-brand">Myntra Hell Yeah!</p>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <p className="nav-link active mx-2" aria-current="page" >Home</p>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-success mx-5 btn-md"> Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;