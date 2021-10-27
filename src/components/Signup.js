import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
	render() {
		return(
			<div className="container">
			    <div className="row">
			        <div className="col-md-3 border-right">
			            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
			                <img className="rounded-circle mt-5" width="150px" alt="User" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
			                <strong>New User</strong>
			            </div>
			        </div>
			        <div className="col-md-9">
			            <h4 className="border-bottom pb-3 pt-3">Create Profile</h4>
			            <form className="mt-3">
			                <div className="form-group row">
			                    <label for="firstname" className="col-md-2 col-form-label">First Name</label>
			                    <div className="col-md-10">
			                        <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" required />
			                    </div>
			                </div>
			                <div className="form-group row">
			                    <label for="lastname" className="col-md-2 col-form-label">Last Name</label>
			                    <div className="col-md-10">
			                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" required />
			                    </div>
			                </div>
			                <div className="form-group row">
			                    <label for="telnum" className="col-12 col-md-2 col-form-label">Contact Tel.</label>
			                    <div className="col-5 col-md-3">
			                        <input type="tel" className="form-control" id="areacode" name="areacode" placeholder="Area Code" required />
			                    </div>
			                    <div className="col-7 col-md-7">
			                        <input type="tel" className="form-control" id="telnum" name="telnum" placeholder="Tel. Number" required />
			                    </div>
			                </div>
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
			                            Sign Up
			                        </button>
			                    </div>
			                </div>
			            </form>
			            <hr className="m-5" />
			            <div className="text-center">
			                Already have an account?<br />
			                <Link to="/home">Login</Link>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}

export default Signup;