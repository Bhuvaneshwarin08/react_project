const Contact = () => {
    return (

        <div class="container">
            <div class="row text-center mb-3">
                <h1>Give your Comments</h1>
                <p></p>
                <hr></hr>
            </div>
            <div class="row">
                <div class="col-md-6" >
                    <img src="/images/mail.jpg" height="300" width="150" class="col-12"  alt="mail"></img>
                </div>
                <div class="col-md">
                    <form>
                       <div class="row mb-2">
                            <label for="Name" class="col-3 form-label">Name</label>
                            <input id="Name" class="col form-control" placeholder="xxx"></input>
                        </div>
                        <div class="row mb-2">
                            <label for="mail" class="col-3 form-label">Email id</label>
                            <input id="mail" class="col form-control" placeholder="abc@gmail.com"></input>
                        </div>
                        <div class="row mb-2">
                            <label for="comment" class="col-3 form-label">comment</label>
                            <textarea id="comment" class="col form-control" placeholder="Give your comments "></textarea>
                        </div>

                        <div class="row d-inline ">
                            <span><button type="submit" class="btn btn-outline-primary">Submit</button></span>
                            <span><button type="reset" class="btn btn-outline-warning" >Reset</button></span>
                            <span><button type="cancel" class="btn btn-outline-danger">Cancel</button></span>
                        </div>
                    </form>
                </div>
            </div>

            <hr></hr>
            <div class="row text-center mb-2">
                <h1>Call us</h1>
                <p style={{color:"red"}}>***We are at you service***</p>
                <hr></hr>
            </div>
            <div class="row">
                <div class="col-md-6 my-auto" align="center" style={{fontSize:30}}>
                    <p>For any queries,<br></br>Contact our officers<br></br><span style={{color:"red"}}>24/7</span></p>
                    <a href="tel:79797070"><button type="button" class="btn btn-outline-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="Make a Call">044-3287947</button></a>
                </div>
                <div class="col-md" align="center">
                    <img src="/images/call.jpg" height="300" width="500" alt="call"></img>
                </div>
            </div>
            <hr></hr>
            <div class="row text-center">
                <h1>Location</h1>
                <hr></hr>
                <div class="col-md-6" align="center">
                    <a href="https://goo.gl/maps/njd94rT8ipn838436" target="_blank"></a>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.11464889476!2d79.9288130321447!3d13.04804379457753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1662570180637!5m2!1sen!2sin" frameborder="0" style={{width:350,height:300}} class="img-thumbnail"></iframe>   
                </div>
                <div class="col-md my-auto mx-auto" align="center">
                    <h1>Connect with us in</h1>
                    <div class="row d-inline">
                        <a href="https://www.instagram.com" target="_blank"><img src="/images/instagram.jpg" style={{width:90}}alt="insta"></img></a>
                        <a href="https://www.facebook.com" target="_blank"><img src="/images/facebook.jpg" style={{width:90}}alt="facebook"></img></a>
                        <a href="https://www.twitter.com" target="_blank"><img src="/images/twitter.jpg" style={{width:90}}alt="twitter"></img></a>
                        <a href="https://www.youtube.com" target="_blank"><img src="/images/youtube.jpg" style={{width:90}}alt="youtube"></img></a>
                    </div>
                </div>
            </div>

            <div class="row mt-2" align="center" style={{borderTop:"1px solid Black"}}>
               <p class="mt-2"><i class="fa fa-copyright" ></i>Copyright</p>
            </div>
        </div>
        
    );
}
export default Contact;
