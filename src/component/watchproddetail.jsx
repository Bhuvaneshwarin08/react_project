import {useParams} from 'react-router-dom';
import { WATCHDATA } from '../shared/watchdata';
import './prodDetail.css';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index';
import { useState } from 'react';
const WatchDetail =()=>{
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const prodid=useParams();
    const prodDetail=WATCHDATA.filter(x=>x.id == prodid.id);
    const product=prodDetail[0];

   const dispatch = useDispatch()

   const handleCart = (product) => {
       if (cartBtn === "Add to Cart") {
           dispatch(addItem(product))
           setCartBtn("Remove from Cart")
       }
       else{
           dispatch(delItem(product))
           setCartBtn("Add to Cart")
       }
   }
    return(
        <div>
            <div class="container my-5 py-3">
                <div class="row">
                    <div class="col-12 col-md-6 mx-auto" align="center">
                       <img src={product.image} id="Image" height="480" class="card-img-top" alt={product.Name} />
                    </div>
                    <div class="col col-md my-auto">
                        <p id="Brand">{product.Brand}</p>
                        <hr></hr>
                        <p id="name">{product.Name}</p>
                        <p id="Desc">{product.Description}</p>
                        <p id="price">₹{product.Price}</p>

                        <button onClick={()=>handleCart(product)} className="btn btn-outline-dark my-5 me-3">{cartBtn}</button>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">Payment</button>
                        <div class="collapse" id="collapseExample">
                              <div class="card-body">
                                  <div class="row d-inline">
                                      <a href="#"><img src="/images/gpay.jpg" style={{width:80}}></img></a>
                                      <a href="#"><img src="/images/phonepe.png"  class="rounded-circle" style={{width:50,height:40}}></img></a>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WatchDetail;