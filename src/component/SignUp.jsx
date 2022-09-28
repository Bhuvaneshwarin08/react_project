
import { NavLink } from "react-router-dom";
const SignUp=()=>{
    return(
        <>
         <div style={{
            backgroundImage: `url("/images/tech_gad.jpeg")`, height: '100vh', backgroundPosition: 'center',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
          }}>
            <div className="container">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ boxShadow: '3px 2px 2px 15px grey' }}>
                        <div className="modal-header">
                            <h5>Sign Up</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label for="mail" className="form-label">Email</label>
                                <input id="mail" className="form-control"></input>
                                <label for="password" className="form-label">Password</label>
                                <input id="password" type="password" className="form-control"></input>
                             
                                <div class="row mt-2 ps-2 ">
                                    <button class="btn btn-outline-primary">Sign Up</button>
                                    
                                </div>
                                <hr></hr>
                                <p class="text-center fs-4">or</p>
                                <div class="row d-inline">
                                    <div class="text-center">
                                        <a href="#"><span class="fab fa-facebook-f me-2"></span></a>
                                        <a href="#"><span class="fab fa-google me-2"></span></a>
                                        <a href="#"><span class="fab fa-linkedin-in"></span></a>
                                    </div>
                                </div>
                                <div class="row text-center" >
                                    <div class="col" align="center">
                                         <p>Already a user <span><NavLink to='/Login' className="nav-link" style={{border:"1px solid black",width:"fit-content",marginTop:"10px",borderRadius:"10px"}}>Login</NavLink></span></p>
                                    </div>    
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
} 
export default SignUp;