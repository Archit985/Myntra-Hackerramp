import React, { Component } from 'react';
import ProductComparison from './comparison/ProductComparison';

class Comparison extends Component {
	render() {
		return(
			<div>
				<a href="home" style={{textDecoration: "none"}}>&lt; BACK TO SHOPPING</a> <br />
				<div className="text-center">
					<h4> Find your perfect match</h4>
				</div>
				<ProductComparison />
			</div>
		);
	}
}

export default Comparison;