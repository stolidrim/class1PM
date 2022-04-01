import React from 'react';
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';

const Signup = () => {
    return <>
        <Nav />
        <div className='offset-md-4 col-md-3 shadow-lg p-4'>
            <main className="form-signin">
                <form>
                    <center><h1 className="h3 mb-3 fw-bold">Please sign up</h1></center>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingFName" placeholder="name@example.com" />
                        <label for="floatingFName">First Name</label>
                        <br/>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingLName" placeholder="name@example.com" />
                            <label for="floatingLName">Last Name</label>
                        </div>
                        <br/>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <br/>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <br/>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                    </div>
                </form>
            </main>
        </div>
<Footer/>
    </>;
};

export default Signup;
