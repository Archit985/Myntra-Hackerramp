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
					  <img className="card-img-top h-20" src={Clothes} alt="Clothes" />
					  <div className="card-body">
					    <h5 className="card-title">Trending</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <div className="row">
						    <button type="button" className="btn btn-primary col-2">Buy</button>
						    <button type="button" className="btn btn-link offset-6 col-4">Compare</button>
					   </div>
					  </div>
					</div>
					<div className="card col-md-4 p-3 mb-3">
					  <img className="card-img-top h-20" src={Sweater} alt="Sweater" />
					  <div className="card-body">
					    <h5 className="card-title">Sweater</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <div className="row">
						    <button type="button" className="btn btn-primary col-2">Buy</button>
						    <button type="button" className="btn btn-link offset-6 col-4">Compare</button>
					   </div>
					  </div>
					</div>
					<div className="card col-md-4 p-3 mb-3">
					  <img className="card-img-top h-20" src={Clothes1} alt="Clothes1" />
					  <div className="card-body">
					    <h5 className="card-title">Clothes</h5>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <div className="row">
						    <button type="button" className="btn btn-primary col-2">Buy</button>
						    <button type="button" className="btn btn-link offset-6 col-4">Compare</button>
					   </div>
					  </div>
					</div>
				</div>
				<div id="compare" className="compare">
					<form>

					</form>
				</div>
			</div>
		</div>
	);
}

export default Home;