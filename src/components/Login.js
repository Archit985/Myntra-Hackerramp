import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	render() {
		return(
			<div className="container">
			    <div className="row">
			        <div className="col-md-3 border-right">
			            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
			                <img className="rounded-circle mt-5" width="150px" alt="User" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
			                <strong>Welcome Back!</strong>
			            </div>
			        </div>
			        <div className="col-md-9">
			            <h4 className="border-bottom pb-3 pt-3">Login</h4>
			            <form className="mt-3">
			                <div className="form-group row">
			                    <label for="emailid" className="col-md-2 col-form-label">Email</label>
			                    <div className="col-md-10">
			                        <input type="email" className="form-control" id="emailid" name="emailid" placeholder="Email" required />
			                    </div>
			                </div>
			                <div className="form-group row">
			                    <label for="password" className="col-md-2 col-form-label">Password</label>
			                    <div className="col-md-10">
			                        <input type="password" className="form-control" id="pass" name="pass" placeholder="Enter Password" required />
			                    </div>
			                </div>
			                <div className="form-group row">
			                    <div className="offset-md-2 col-md-10">
			                        <button type="submit" className="btn btn-primary">
			                            Login
			                        </button>
			                    </div>
			                </div>
			            </form>
			            <hr className="m-5" />
			            <div className="text-center">
			                Don't have an account?<br />
			                <Link to="/signup">Sign Up</Link>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

export default Login;