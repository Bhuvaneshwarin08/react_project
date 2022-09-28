import { NavLink } from 'react-router-dom';
import './home.css';
const Home = () => {
    return (
        <div className="container-fluid">

            <div id="carouselSlides" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <img src="/images/phone.jpeg" alt="phone"></img>
                        <div class="carousel-caption">
                            <h3>Techo, Welcomes you all</h3>
                            <NavLink to="/Products" id="homebutton"><button class="btn btn-outline-dark"> Happy Shopping</button></NavLink>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="/images/watch.jpeg" alt="watch"></img>
                        <div class="carousel-caption ">
                            <h3>Techo, Welcomes you all</h3>
                            <NavLink to="/Products" id="homebutton"><button class="btn btn-outline-dark"> Happy Shopping</button></NavLink>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src="/images/headphone.jpg" alt="headphone"></img>
                        <div class="carousel-caption ">
                            <h3>Techo, Welcomes you all</h3>
                            <NavLink to="/Products" id="homebutton"><button class="btn btn-outline-dark"> Happy Shopping</button></NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/camera.jpg" alt="camera"></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h3 style={{float:"left"}}>Techo, Welcomes you all</h3>
                            <span><NavLink to="/Products" id="homebutton"><button class="btn btn-outline-dark"> Happy Shopping</button></NavLink></span>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselSlides" data-bs-slide="prev">
                    <span className="fa fa-backward" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselSlides" data-bs-slide="next">
                    <span className="fa fa-forward " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>

    );
}
export default Home;
