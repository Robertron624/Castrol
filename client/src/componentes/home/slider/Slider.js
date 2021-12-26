


  function Slider() {

  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src="https://movidatuy.com/wp-content/uploads/2020/06/para-llenar-un-tanque-de-gasolina-se-necesitaran-entre-20-y-35-en-Venezuela-.jpg" />
		            
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://www.lubricantesenvenezuela.com/wp-content/uploads/2020/01/fallas.jpg" />
		            
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://media.gossipvehiculo.com/wp-content/uploads/2021/06/17102747/13-14.jpg" />
		            
		        </div>
		    </div>
		    <a className="carousel-control-prev " href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>
	
  	)
    
  }



export default Slider;
