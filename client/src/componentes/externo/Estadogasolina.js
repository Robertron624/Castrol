

import { Link} from "react-router-dom";
import React from 'react';


function Estadogasolina() {       
    return (
        <>
        
        <div id="wrapper">

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <li className="nav-item active">
                <p className="nav-link" >
                    
                    <span>MENÚ</span></p>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <p className="nav-link">
                    <span>Registra tu vehículo</span>
                    <Link className="carousel-control-next2" to="/Registrarvehiculo" role="button" data-slide="next">
		            <span className="carousel-control-next-icon"></span>
		        </Link>
                </p>
                
            </li>
            <li className="nav-item">
                <p className="nav-link">
                <span>Vehículos a tu nombre</span>
                <Link className="carousel-control-next2" to="/Vehiculosregistrados" role="button" data-slide="next">   
                    <span className="carousel-control-next-icon"></span>
                </Link>
                </p>
            </li>

            <li className="nav-item">
                <p className="nav-link">
                <span>Conoce tu saldo</span>
                <Link className="carousel-control-next2" to="/Saldo" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>   
                    
                </Link>
                </p>
            </li>

            <li className="nav-item">
                <p className="nav-link">
                <span>Recarga tu cuenta</span>
                <Link className="carousel-control-next2" to="/Recargar" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>  
                    
                </Link>
                </p>
            </li>

            <li className="nav-item">
                <p className="nav-link">
                <span>Ver historial de movimientos</span>
                <Link className="carousel-control-next2" to="/Historial" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>  
                    
                </Link>
                </p>
            </li>

            <li className="nav-item">
                <p className="nav-link">
                <span>Estado de la gasolina</span>
                <Link className="carousel-control-next2" to="/Estadogasolina" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>     
                </Link>
                </p>

            </li>

            <li className="nav-item">
                <p className="nav-link">
                <span>Tanquea tu vehículo</span>
                <Link className="carousel-control-next2" to="/Tanquea" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>    
                    
                </Link>
                </p>
            </li>

            <li className="nav-item">
                <p className="nav-link">
                <span>Redimir puntos</span>
                <Link className="carousel-control-next2" to="/Redimir" role="button" data-slide="next">
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
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Usuario Externo</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
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
                                    <h6 className="m-2 font-weight-bold text-primary text-center">ESTADO DE LA GASOLINA</h6>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-sm">
                                        <thead>
                                            <tr>
                                                <th>Rango de fecha</th>
                                                <th>Tipo de gasolina</th>
                                                <th>Precio por galón</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>1</td>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    
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
export default Estadogasolina;