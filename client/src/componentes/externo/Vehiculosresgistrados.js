import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Vehiculosregistrados() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const user = state.userData;
	const accessToken = state.token;
	console.log("ESTE ES EL ID DEL USUARIO:: ", user._id);

	const listarCarros = async (userId) => {
		const response = axios.get(`https://localhost:8080/user/${userId}/cars`, {
			headers: {
				Authorization: accessToken,
			},
		});
		return await response;
	};
	const stringCars = async () => {
		const cars = await listarCarros(user._id);
		return cars;
	};
	let res = stringCars();
	console.log("ESTO ES LA RESPUESTA:: ", res);

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
							<button
								className="carousel-control-next2"
								onClick={() => {
									navigate("/Registrarvehiculo", {
										state: { userData: user, token: accessToken },
									});
								}}
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</button>
						</p>
					</li>
					<li className="nav-item">
						<p className="nav-link">
							<span>Vehículos a tu nombre</span>
							<button
								className="carousel-control-next2"
								onClick={() => {
									navigate("/Vehiculosregistrados", {
										state: { userData: user, token: accessToken },
									});
								}}
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</button>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Conoce tu saldo</span>
							<button
								className="carousel-control-next2"
								onClick={() => {
									navigate("/Saldo", {
										state: { userData: user, token: accessToken },
									});
								}}
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</button>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Recarga tu cuenta</span>
							<button
								className="carousel-control-next2"
								onClick={() => {
									navigate("/Recargar", {
										state: { userData: user, token: accessToken },
									});
								}}
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</button>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Ver historial de movimientos</span>
							<button
								className="carousel-control-next2"
								onClick={() => {
									navigate("/Historial", {
										state: { userData: user, token: accessToken },
									});
								}}
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</button>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Estado de la gasolina</span>
							<button
								className="carousel-control-next2"
								onClick={() => {
									navigate("/Estadogasolina", {
										state: { userData: user, token: accessToken },
									});
								}}
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</button>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Tanquea tu vehículo</span>
							<button
								className="carousel-control-next2"
								onClick={() => {
									navigate("/Tanquea", {
										state: { userData: user, token: accessToken },
									});
								}}
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</button>
						</p>
					</li>

					<li className="nav-item">
						<p className="nav-link">
							<span>Redimir puntos</span>
							<button
								className="carousel-control-next2"
								onClick={() => {
									navigate("/Redimir", {
										state: { userData: user, token: accessToken },
									});
								}}
								data-slide="next"
							>
								<span className="carousel-control-next-icon"></span>
							</button>
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
											Usuario Externo
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
