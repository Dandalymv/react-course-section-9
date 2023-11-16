import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            useContext
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                <NavLink to="/" className={ ({isActive}) => {
                    return isActive ? "nav-link active" : "nav-link"
                 }} >
                    Home
                </NavLink>


                <NavLink to="/about" className={ ({isActive}) => {
                    return isActive ? "nav-link active" : "nav-link"
                 }} >
                    About
                </NavLink>

                <NavLink to="/login" className={ ({isActive}) => {
                    return isActive ? "nav-link active" : "nav-link"
                 }} >
                    Login
                </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
