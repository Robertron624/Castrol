import { Link, useNavigate, Route } from "react-router-dom";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Axios from "axios";
import { useState } from "react";

function Login() {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const navigate = useNavigate();

	const loguearse = async () => {
		try {
			const response = Axios.post("http://localhost:8080/auth/login", {
				email: user,
				password: pass,
			});
			return await response;
		} catch (error) {
			console.log("NO SE PUDO INCIAR SESION");
		}
	};

	return (
		<>
			<Menu />

			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-10 col-lg-10 col-md-9">
						<div className="card o-hidden border-0 shadow-lg my-6">
							<div className="card-body p-0">
								<div className="row">
									<div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
									<div className="col-lg-6">
										<div className="p-5">
											<div className="text-center">
												<h1 className="h4 text-gray-900 mb-4">
													¡Bienvenido de nuevo!
												</h1>
											</div>
											<form
												onSubmit={(e) => {
													e.preventDefault();
												}}
												className="user"
											>
												<div className="form-group">
													<input
														onChange={(e) => {
															setUser(e.target.value);
														}}
														type="email"
														className="form-control form-control-user"
														id="exampleInputEmail"
														aria-describedby="emailHelp"
														placeholder="Ingrese su correo"
													/>
												</div>

												<div className="form-group">
													<input
														type="password"
														className="form-control form-control-user"
														id="exampleInputPassword"
														placeholder="Contraseña"
														onChange={(e) => {
															setPass(e.target.value);
														}}
													/>
												</div>
												<div className="form-group">
													<div className="custom-control custom-checkbox small">
														<input
															type="checkbox"
															className="custom-control-input"
															id="customCheck"
														/>
													</div>
												</div>

												<button
													onClick={async () => {
														let res = await loguearse();
														let codigo = res.statusText;
														if (codigo === "OK") {
															navigate("/App", {
																state: {
																	userData: res.data.usuario._id,
																	token: res.data.accessToken,
																},
															});
														} else {
															console.log("NO SE PUDO INCIAR SESION");
														}
													}}
													className="btn btn-primary btn-user btn-block"
												>
													Ingresar
												</button>
											</form>

											<div className="text-center">
												<Link className="small" to="/Recuperar">
													¿Olvidaste tu contraseña?
												</Link>
											</div>
											<div className="text-center">
												<Link className="small" to="/registrar">
													¡Crea tu cuenta!
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

export default Login;
