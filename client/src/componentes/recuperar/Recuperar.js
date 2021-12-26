import { Link} from "react-router-dom";
import Menu from '../menu/Menu'; 
import Footer from '../footer/Footer'; 
import Axios from "axios";
import { useState } from "react";
 

  function Recuperar() {  
    const [nameUser, setnameUser] = useState("");
	const [lastnameUser, setlastnameUser] = useState("");
	const [emailUser, setemailUser] = useState("");
	const [passwordUser, setpasswordUser] = useState(""); 

    const recupera = () => {
		Axios.post("localhost:8080/auth/recuperar", {
			name: "Robert",
			lastname: "ramirez",
			age: 25,
			email: "robert@hotmail.com",
			password: "america",
			birthDay: "1996-05-29",
		});
	};
    
        return (
            <>

            <Menu />
            
            <div className="container">
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-10 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-6">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-2">¿Olvidaste tu contraseña?</h1>
                                        <p className="mb-4">Oops… No olvides siempre guardar tus contraseñas en un lugar seguro. 
                                        Completa los campos que se muestran a continuación para que puedas cambiar tu contraseña.</p>
                                    </div>
                                    <form className="user">
                                    <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="Nombre" 
                                                    onChange={(e) => {
                                                        setnameUser(e.target.value);
                                                    }}
                                                    />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Apellido" 
                                                    onChange={(e) => {
                                                        setlastnameUser(e.target.value);
                                                    }}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Escribe tu correo" 
                                                onChange={(e) => {
                                                    setemailUser(e.target.value);
                                                }}
                                                />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Contraseña" 
                                                    onChange={(e) => {
                                                        setpasswordUser(e.target.value);
                                                    }}
                                                    />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Confirmar contraseña" 
                                                    onChange={(e) => {
                                                        setpasswordUser(e.target.value);
                                                    }}
                                                    />
                                            </div>
                                        </div>
                                        <button onClick={recupera} className="btn btn-primary btn-user btn-block">
                                            Cambiar contraseña
                                        </button>
                                    </form>
                                    
                                    <div className="text-center">
                                        <Link className="small" to="/Registrar"> ¡Crea tu cuenta!</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link className="small" to="/Login">¿Ya tienes una cuenta? ¡Ingresa!</Link>
                                    </div>
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

    );
  }

  export default Recuperar;