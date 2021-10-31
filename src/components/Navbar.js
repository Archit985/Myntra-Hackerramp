

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span role="button" ><i className="fa fa-bars" aria-hidden="true" style={{ color: "black" }}></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
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