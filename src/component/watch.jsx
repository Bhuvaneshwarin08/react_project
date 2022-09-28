import './product.css';
import { NavLink, Link } from "react-router-dom";
import { WATCHDATA } from '../shared/watchdata';
const Watch = () => {
    const CardItem = (item) => {
        return (
            <>
                <div class="card">
                    <div class="card-header">
                        <img src={item.image} class="card-img-top" alt={item.Name} />
                        <span type="button" id="wish" class="far fa-heart"></span>
                    </div>
                    <div class="card-body">
                        <p id="name">{item.Name}</p>
                        <p id="Price">₹{item.Price}</p>
                        <div id="row">
                            <p id="Delivery" class="col-6 float-start">Free Delivery</p>
                            <span class="col float-end" id="rating">{item.rating}<span className="fa fa-star"></span></span>
                        </div>
                        <NavLink to={`/watch/${item.id}`}><p id="cart"><button class="btn btn-outline-dark">Buy Now</button></p></NavLink>
                    </div>
                </div>

            </>
        );
    }
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12" align="center">
                        <NavLink to="/Products"><button type="button" class="btn btn-outline-primary me-2">ALL</button></NavLink>
                        <NavLink to="/watch"><button type="button" class="btn btn-outline-secondary me-2 active">Watch</button></NavLink>
                        <NavLink to='/Phone'><button type="button" class="btn btn-outline-success me-2">Phone</button></NavLink>
                        <NavLink to="/HeadPhone"><button type="button" class="btn btn-outline-warning me-2">HeadPhones</button></NavLink>
                        <NavLink to="/camera"><button type="button" class="btn btn-outline-info me-2">Camera</button></NavLink>
                    </div>

                </div>
            </div>
            <div class="container">
                <p id="Title">Watch</p>
                <hr></hr>
                <div class="row justify-content-center">
                    {WATCHDATA.map(CardItem)}
                </div>
            </div>
        </div>
    );
}
export default Watch;