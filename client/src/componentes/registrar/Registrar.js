import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Axios from "axios";
import { useState } from "react";

function Registrar() {
	const [nameUser, setnameUser] = useState("");
	const [lastnameUser, setlastnameUser] = useState("");
	const [emailUser, setemailUser] = useState("");
	const [email2User, setemail2User] = useState("");
	let emailcomprobar;
	let passcomprobar;
	const [passwordUser, setpasswordUser] = useState("");
	const [password2User, setpassword2User] = useState("");

	const comprobar = (a, b) => {
		return a === b;
	};
	const registrarse = () => {
		Axios.post("http://localhost:8080/auth/register", {
			name: nameUser,
			lastname: lastnameUser,
			email: emailcomprobar,
			password: passcomprobar,
		})
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
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
									<div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
									<div className="col-lg-7">
										<div className="p-5">
											<div className="text-center">
												<h1 className="h4 text-gray-900 mb-4">
													¡Crea tu cuenta!
												</h1>
											</div>
											<form className="user">
												<div className="form-group row">
													<div className="col-sm-6 mb-3 mb-sm-0">
														<input
															type="text"
															className="form-control form-control-user"
															id="exampleFirstName"
															placeholder="Nombre"
															onChange={(e) => {
																setnameUser(e.target.value);
															}}
														/>
													</div>
													<div className="col-sm-6">
														<input
															type="text"
															className="form-control form-control-user"
															id="exampleLastName"
															placeholder="Apellido"
															onChange={(e) => {
																setlastnameUser(e.target.value);
															}}
														/>
													</div>
												</div>
												<div className="form-group">
													<input
														type="email"
														className="form-control form-control-user"
														id="exampleInputEmail"
														placeholder="Correo"
														onChange={(e) => {
															setemailUser(e.target.value);
														}}
													/>
												</div>
												<div className="form-group">
													<input
														type="email"
														className="form-control form-control-user"
														id="exampleInputEmail"
														placeholder="Confirmar correo"
														onChange={(e) => {
															setemail2User(e.target.value);
														}}
													/>
												</div>
												<div className="form-group row">
													<div className="col-sm-6 mb-3 mb-sm-0">
														<input
															type="password"
															className="form-control form-control-user"
															id="exampleInputPassword"
															placeholder="Contraseña"
															onChange={(e) => {
																setpasswordUser(e.target.value);
															}}
														/>
													</div>
													<div className="col-sm-6">
														<input
															type="password"
															className="form-control form-control-user"
															id="exampleRepeatPassword"
															placeholder="Confirmar contraseña"
															onChange={(e) => {
																setpassword2User(e.target.value);
															}}
														/>
													</div>
												</div>
												<button
													onClick={() => {
														if (
															comprobar(emailUser, email2User) &&
															comprobar(passwordUser, password2User)
														) {
															emailcomprobar = emailUser;
															passcomprobar = passwordUser;
															registrarse();
															<Link className="small" to="/Login"></Link>;
														} else {
															alert("LOS EMAIL NO SON IGUALES");
														}
													}}
													className="btn btn-primary btn-user btn-block"
												>
													Registrarse
												</button>
											</form>

											<div className="text-center">
												<Link className="small" to="/Recuperar">
													¿Olvidaste tu contraseña?
												</Link>
											</div>
											<div className="text-center">
												<Link className="small" to="/Login">
													¿Ya tienes una cuenta? ¡Ingresa!
												</Link>
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

export default Registrar;
