import Axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Vehiculosregistrados() {
	const { state } = useLocation();

	const userId = state.userData;
	const accessToken = state.token;
	const nombre = state.name;
	const apellido = state.lastname;
	const [cars, setCars] = useState([]);

	useEffect(() => {
		async function getData() {
			const response = await Axios.get(
				`http://localhost:8080/user/${userId}/cars`,
				{
					headers: {
						Authorization: accessToken,
					},
				}
			);
			setCars(response.data);
		}
		getData();
	}, [accessToken, userId]);

	return (
		<>
			<div id="wrapper">
				<ul
					className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
					id="accordionSidebar"
				>
					<li className="nav-item active">
						<p className="nav-link">
							<span>MENÚ</span>
						</p>
					</li>
					<hr className="sidebar-divider" />
					<li className="nav-item">
						<p className="nav-link">
							<span>Registra tu vehículo</span>
							<Link
								className="carousel-control-next2"
								to="/Registrarvehiculo"
								state={{
									userData: userId,
									token: accessToken,
									name: nombre,
									lastname: apellido,
								}}
								role="button"
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</Link>
						</p>
					</li>
					<li className="nav-item">
						<p className="nav-link">
							<span>Vehículos a tu nombre</span>
							<Link
								className="carousel-control-next2"
								to="/Vehiculosregistrados"
								state={{
									userData: userId,
									token: accessToken,
									name: nombre,
									lastname: apellido,
								}}
								role="button"
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</Link>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Conoce tu saldo</span>
							<Link
								className="carousel-control-next2"
								to="/Saldo"
								state={{
									userData: userId,
									token: accessToken,
									name: nombre,
									lastname: apellido,
								}}
								role="button"
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</Link>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Recarga tu cuenta</span>
							<Link
								className="carousel-control-next2"
								to="/Recargar"
								state={{
									userData: userId,
									token: accessToken,
									name: nombre,
									lastname: apellido,
								}}
								role="button"
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</Link>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Ver historial de movimientos</span>
							<Link
								className="carousel-control-next2"
								to="/Historial"
								state={{
									userData: userId,
									token: accessToken,
									name: nombre,
									lastname: apellido,
								}}
								role="button"
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</Link>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Estado de la gasolina</span>
							<Link
								className="carousel-control-next2"
								to="/Estadogasolina"
								state={{
									userData: userId,
									token: accessToken,
									name: nombre,
									lastname: apellido,
								}}
								role="button"
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</Link>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Tanquea tu vehículo</span>
							<Link
								className="carousel-control-next2"
								to="/Tanquea"
								state={{
									userData: userId,
									token: accessToken,
									name: nombre,
									lastname: apellido,
								}}
								role="button"
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</Link>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Redimir puntos</span>
							<Link
								className="carousel-control-next2"
								to="/Redimir"
								state={{
									userData: userId,
									token: accessToken,
									name: nombre,
									lastname: apellido,
								}}
								role="button"
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</Link>
						</p>
					</li>
				</ul>

				<div id="content-wrapper" className="d-flex flex-column">
					<div id="content">
						{/* <!-- Topbar --> */}
						<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
							<ul className="navbar-nav ml-auto">
								<div className="topbar-divider d-none d-sm-block"></div>

								<li className="nav-item dropdown no-arrow">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										id="userDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<span className="mr-2 d-none d-lg-inline text-gray-600 small">
											{nombre} {apellido}
										</span>
										<img
											className="img-profile rounded-circle"
											src="img/undraw_profile.svg"
										/>
									</a>
									<div
										className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
										aria-labelledby="userDropdown"
									>
										<div className="dropdown-divider"></div>
										<a
											className="dropdown-item"
											href="#"
											data-toggle="modal"
											data-target="#logoutModal"
										>
											<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
											Logout
										</a>
									</div>
								</li>
							</ul>
						</nav>

						<div className="container">
							<div className="row justify-content-center">
								<div className="col-lg-8 mb-4">
									<div className="card shadow-lg my-6">
										<div className="card-header py-3">
											<h6 className="m-2 font-weight-bold text-primary text-center">
												TUS VEHÍCULOS REGISTRADOS
											</h6>
										</div>
										<div className="card-body">
											MAP
											{/* {cars.map((car) => {
												return <p className="card-text">Placa: {car.plate}</p>;
											})} */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Vehiculosregistrados;
