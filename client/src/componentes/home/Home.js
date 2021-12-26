
import React from 'react';

import Menu from '../menu/Menu'; 
import Slider from './slider/Slider';
import Footer from '../footer/Footer'; 




	function Home() {
		
		return(

			<>

			<Menu /> 
			
			<main role="main" className="flex-shrink-0 my-6">

		            <div className="container">
		  	  		
		  	        <Slider /> 

		            </div>

	  		</main>

	  		<Footer />

	  		</>

		)

	}



export default Home;
