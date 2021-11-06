import React from 'react';
import Header from './Header';
import Clothes1 from './Clothes1.jpg';
import Clothes from './Clothes.jpg';
import Sweater from './Sweater.jpg';

function Home() {
	return(
		<div>
			<Header />
			<div className="container">
				<h3 className="text-center m-2">Exclusive Products</h3> 
				<div className="row">
					<div className="card col-md-4 p-3 mb-3">
					  <img className="card-img-top" src={Clothes} alt="Clothes" style={{height: "70%"}} />
					  <div className="card-body">
					    <h5 className="card-title">Trending</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <button type="button" className="btn btn-primary">Buy</button>
					  </div>
					</div>
					<div className="card col-md-4 p-3 mb-3">
					  <img className="card-img-top" src={Sweater} alt="Sweater" style={{height: "70%"}} />
					  <div className="card-body">
					    <h5 className="card-title">Sweater</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <button type="button" className="btn btn-primary">Buy</button>
					  </div>
					</div>
					<div className="card col-md-4 p-3 mb-3">
					  <img className="card-img-top" src={Clothes1} alt="Clothes1" style={{height: "70%"}} />
					  <div className="card-body">
					    <h5 className="card-title">Clothes</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <button type="button" className="btn btn-primary">Buy</button>
					  </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;