import './navbar.css';


import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector((state)=> state.addItem)
    return (
        <div>
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-md-2 col-lg-1">
                            <div className="navbar-brand d-block d-sm-none">Tech</div>
                            <div className="navbar-brand d-none d-sm-block">
                                Techo
                            </div>
                        </div>

                        <div className="col-9 col-md-9 col-lg-5 col-xl-6">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>

                        <button className="navbar-toggler col-1 col-md-1" type="button" data-bs-toggle="collapse" data-bs-target="#Navitems">
                            <span className="fa fa-bars"></span>
                        </button>

                        <div className="collapse navbar-collapse col-md-5 col-lg-5" id="Navitems">
                            <ul className="nav navbar-nav ms-auto">
                                <li className="nav-item mx-auto "><NavLink to='/' className="nav-link"><span className="fa fa-home me-1"></span>Home</NavLink></li>
                                <li className="nav-item mx-auto"><NavLink to='/Products'className="nav-link"><span className="fa fa-parking me-1"></span>Products</NavLink></li>
                                <li className="nav-item mx-auto"><NavLink to='/About' className="nav-link"><span className="fa fa-info-circle me-1"></span>About</NavLink></li>
                                <li className="nav-item mx-auto"><NavLink to='/contact' className="nav-link"><span className="fa fa-phone me-1"></span>Contact</NavLink></li>
                                <li className="nav-item mx-auto"><NavLink to='/Login' className="nav-link" ><span className="fa fa-sign-in-alt me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Login"></span></NavLink></li>
                                <li className="nav-item mx-auto"><NavLink to='/SignUp' className="nav-link" ><span className="fa fa-user-plus me-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign Up"></span></NavLink></li>
                                <li className="nav-item mx-auto"><NavLink to="/cart" className="nav-link"><span className="fa fa-shopping-cart me-1"><span id="count" className="start-100  translate-middle  bg-secondary">{state.length}</span></span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </nav>
           
        </div>
    );
}
export default Navbar;
