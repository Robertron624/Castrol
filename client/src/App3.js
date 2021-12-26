import logo from './logo.svg';
import { Link} from "react-router-dom";
import Registrarvehiculo from './componentes/externo/Registrarvehiculo';


function App3() {
  return (
    <>
    
    <div id="wrapper">

        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <li className="nav-item active">
                <p className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>MENÚ</span></p>
            </li>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <p className="nav-link">
                    <span>Registra tu vehículo</span>
                    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		            <span className="carousel-control-next-icon"></span>
		        </a>
                </p>
                
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#"  data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Vehículos a tu nombre</span>
                </a>

            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Conoce tu saldo</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Recarga tu cuenta</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Ver historial de movimientos</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Estado de la gasolina</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Tanquea tu vehículo</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Redimir puntos </span>
                </a>
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
                <h6 className="m-2 font-weight-bold text-primary text-center">Probando</h6>
            </div>
            <div className="card-body">
                <p>Prueba.</p>
                <p className="mb-0">Before working with this theme, you should become familiar with the
                    Bootstrap framework, especially the utility classes.</p>
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

export default App3;
