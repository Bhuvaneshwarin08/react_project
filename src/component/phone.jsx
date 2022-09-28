import './product.css';
import { NavLink } from "react-router-dom";
import { PHONEDATA } from '../shared/phonedata';
const Phone = () => {
    const CardItem = (item) => {
        return (
            <div class="card" style={{height:550}}>
                <div class="card-header">
                    <div>
                    <img src={item.image} class="card-img-top" alt={item.Name} />
                    <span type="button" id="wish" class="far fa-heart"></span>
                    </div> 
                </div>
                <div class="card-body">
                    <p id="name">{item.Name}</p>
                    <p id="Price">₹{item.Price}</p>
                    <div id="row">
                        <p id="Delivery" class="col-6 float-start">Free Delivery</p>
                        <span class="col float-end" id="rating">{item.rating}<span className="fa fa-star"></span></span>
                    </div>
                    <NavLink to={`/Phone/${item.id}`}><p id="cart"><button class="btn btn-outline-dark">Buy Now</button></p></NavLink>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12" align="center">
                        <NavLink to="/Products"><button type="button" class="btn btn-outline-primary me-2">ALL</button></NavLink>
                        <NavLink to="/watch"><button type="button" class="btn btn-outline-secondary me-2">Watch</button></NavLink>
                        <NavLink to='/Phone'><button type="button" class="btn btn-outline-success me-2 active">Phone</button></NavLink>
                        <NavLink to="/HeadPhone"><button type="button" class="btn btn-outline-warning me-2">HeadPhones</button></NavLink>
                        <NavLink to="/camera"><button type="button" class="btn btn-outline-info me-2">Camera</button></NavLink>
                    </div>

                </div>
            </div>
            <div class="container">
                <p id="Title">Phone</p>
                <hr></hr>
                <div class="row justify-content-center">
                    {PHONEDATA.map(CardItem)}
                </div>
            </div>
        </div>
    );
}
export default Phone;