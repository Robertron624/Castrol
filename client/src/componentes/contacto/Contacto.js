
import React from 'react';
import { Link} from "react-router-dom";
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';


function Contacto() {
	

		return(

			<>

			<Menu />
			<div className="container">
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-10 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-6">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-contact-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-2">¡Contáctanos!</h1>
                                    </div>
                                    <form className="user">
                                    <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="Nombre" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Apellido" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Escribe tu correo" />
                                        </div>
										<div className="form-group">
										<input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="Asunto" />
                                        </div>
                                        <div className="form-group">
										<textarea className="form-control " 
											id="mensaje" placeholder="Digite su petición" required></textarea>

                                        </div>
                                        
                                        <Link to="/" className="btn btn-primary btn-user btn-block">
                                            Enviar
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
			

	  		<Footer />

	  		</>

		)

	}



export default Contacto;
