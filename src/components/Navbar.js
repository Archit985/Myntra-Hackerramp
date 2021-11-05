import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span role="button" ><i className="fa fa-bars" aria-hidden="true" style={{ color: "black" }}></i></span>
        </button>
        <p className="navbar-brand ml-5 mr-auto">Myntra Hell Yeah!</p>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="home">Home</Link>
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