const About = () => {
    return (
        <>
            <div class="">
                <div  style={{
                    backgroundImage: `url("/images/tech.jpeg")`, height: '100vh', backgroundPosition: 'center',
                    backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                }}>
                    <div class="row justify-content-center pt-5">
                        <div class="col-12 col-md-6 col-lg-4 " align="center">
                            <div  style={{ border: "1px solid black" ,height:"90vh",borderRadius:"20px",boxShadow: '1px 1px 2px 10px white'}} id="about">
                                <h3 class="mt-3"><b>Hey Everyone</b></h3>
                                <h2>Welcome to our "TECHO"</h2>
                                <p class="mt-5">We started our company in 2000.It's been 22 years and we have millions of customes who are shopping in our 'Techo'.</p>
                                <p style={{color:"red"}}>Our main aim was to sell the product to the customers at low price with high quality.</p>
                                <p>Here you can find all tech gadgets</p>
                                <div class="row justify-content-center">
                                    <h1 class="mb-3" style={{fontFamily:"Times new roman"}}>Founders of TECHO</h1>
                                    <div class="col-6 col-lg-4">
                                        <img src="/images/bhuvana.jpg" width="100" height="100" class="rounded-circle"></img>
                                        <span>Bhuvana</span>
                                    </div>
                                    <div class="col-6 col-md-4 ">
                                        <img src="/images/harshareenTaj.jpeg" width="100" height="100" class="rounded-circle"></img>
                                        <span>Harshareen</span>
                                    </div>
                                    <div class="col-6 col-md-4 mt-2">
                                        <img src="/images/ilakkiya.jpeg" width="100" height="100" class="rounded-circle"></img>
                                        <span>Ilakkiya</span>
                                    </div>
                                </div>
                          
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default About;