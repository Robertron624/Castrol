
import { Link} from "react-router-dom";

function Menu() {

  	return (

  		<nav className="navbar navbar-default navbar-expand-md navbar-dark fixed-top bgDefault" >

		    
		    
		    <div className="collapse navbar-collapse" id="navbarCollapse">
				
				<ul className="navbar-nav mr-auto">
					<li>
			          	<img src='./logo.png' width='20' />
			        </li>

			        <li className="nav-item">
			          	<p className="frase">ES MÁS QUE SÓLO GASOLINA, ES INGENIERÍA LÍQUIDA</p>
			        </li>
				</ul>
			    <ul className="navbar-nav ml-auto">
			        <li className="nav-item ">
			          	<Link to="/"className="nav-link">HOME <span className="sr-only">(current)</span></Link>
			        </li>
					<li className="nav-item ">
			          	<Link className="nav-link" to="/Login">INGRESAR</Link>
			        </li>
					<li className="nav-item ">
			          	<Link className="nav-link" to="/Registrar">REGÍSTRATE</Link>
			        </li>
			        <li className="nav-item ">
			          	<Link className="nav-link" to="/Nosotros">ACERCA DE NOSOTROS</Link>
			        </li>
			        <li className="nav-item ">
			          	<Link className="nav-link" to="/Contacto">CONTÁCTANOS</Link>
			        </li>
			    </ul>
		    </div>

		</nav>

  	)
    
  }


export default Menu;
