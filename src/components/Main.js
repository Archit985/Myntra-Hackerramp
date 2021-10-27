import React, { Component } from 'react';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<Header />   
			    	<Switch>
				        <Route path='/home' component={Login} />
				        <Route path='/signup' component={Signup} />
				        <Redirect to="/home" />
			    	</Switch>
				<footer className="container mt-5 footer">
			    	<div className="text-center">
			        	Copyright &copy; 2021 IIT BHU Team - Hell Yeah
			    	</div>
				</footer>
			</div>
		);
	}
}

export default Main;