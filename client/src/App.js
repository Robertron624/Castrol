import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

import { useState, useEffect } from "react";

function App() {
	const { state } = useLocation();
	const userId = state.userData;
	const accessToken = state.token;

	const [user, setUser] = useState({});

	useEffect(() => {
		async function getData() {
			const response = await Axios.get(
				`http://localhost:8080/user/${userId}/detail`,
				{
					headers: {
						Authorization: accessToken,
					},
				}
			);
			setUser(response.data);
		}
		getData();
	}, [accessToken, userId]);

	const navigate = useNavigate();

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

						<p className="nav-link">Puntos acumulados 120</p>
					</li>
					<hr className="sidebar-divider" />
					<li className="nav-item">
						<p className="nav-link">
							<span>Registra tu vehículo</span>
							<button
								onClick={() => {
									navigate("/Registrarvehiculo", {
										state: {
											userData: userId,
											token: accessToken,
											name: user.name,
											lastname: user.lastname,
										},
									});
								}}
								className="carousel-control-next2"
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
										state: {
											userData: userId,
											token: accessToken,
											name: user.name,
											lastname: user.lastname,
										},
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
								onClick={() =>
									navigate("/Saldo", {
										state: {
											userData: userId,
											token: accessToken,
											name: user.name,
											lastname: user.lastname,
										},
									})
								}
								className="carousel-control-next2"
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
										state: {
											userData: userId,
											token: accessToken,
											name: user.name,
											lastname: user.lastname,
										},
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
										state: {
											userData: userId,
											token: accessToken,
											name: user.name,
											lastname: user.lastname,
										},
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
										state: {
											userData: userId,
											token: accessToken,
											name: user.name,
											lastname: user.lastname,
										},
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
										state: {
											userData: userId,
											token: accessToken,
											name: user.name,
											lastname: user.lastname,
										},
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
										state: {
											userData: userId,
											token: accessToken,
											name: user.name,
											lastname: user.lastname,
										},
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
											{user.name} {user.lastname}
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
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
