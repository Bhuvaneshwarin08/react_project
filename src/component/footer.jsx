import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <div style={{borderTop:"1px solid black"}}>
            <div class="row justify-content-center">
                <div class="col-12 col-md-6" align="center">
                    <ul class="navlist">
                        <li className="nav-item mx-auto" style={{display:"inline-block"}}><NavLink to='/' className="nav-link"><span className="fa fa-home me-1"></span>Home</NavLink></li>
                        <li className="nav-item mx-auto" style={{display:"inline-block"}}><NavLink to='/Products' className="nav-link"><span className="fa fa-parking me-1"></span>Products</NavLink></li>
                        <li className="nav-item mx-auto" style={{display:"inline-block"}}><NavLink to='/About' className="nav-link"><span className="fa fa-info-circle me-1"></span>About</NavLink></li>
                        <li className="nav-item mx-auto" style={{display:"inline-block"}}><NavLink to='/contact' className="nav-link"><span className="fa fa-phone me-1"></span>Contact</NavLink></li>
                    </ul>
                </div>
              
                <div class="col-12 col-md-6 my-auto" align="center" style={{fontFamily:"Times new roman",fontSize:"30px",color:"deeppink"}}>
                    <blockquote>"Time to Shop"</blockquote>
                </div>
            </div>
        </div>
    );
}
export default Footer;