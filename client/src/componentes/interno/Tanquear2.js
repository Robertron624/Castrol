import { Link} from "react-router-dom";



function Tanquear2() {
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
                    <span>Gestionar precios</span>
                    <Link className="carousel-control-next2" to="/Registrarvehiculo" role="button" data-slide="next">
		            <span className="carousel-control-next-icon"></span>
		        </Link>
                </p>
                
            </li>
            <li className="nav-item">
                <p className="nav-link">
                <span>Disponibilidad de gasolina</span>
                <Link className="carousel-control-next2" to="/Vehiculosregistrados" role="button" data-slide="next">   
                    <span className="carousel-control-next-icon"></span>
                </Link>
                </p>
            </li>

            <li className="nav-item">
                <p className="nav-link">
                <span>Tanquear vehículo cliente</span>
                <Link className="carousel-control-next2" to="/Saldo" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>   
                    
                </Link>
                </p>
            </li>

            <li className="nav-item">
                <p className="nav-link">
                <span>Estado de clientes</span>
                <Link className="carousel-control-next2" to="/Recargar" role="button" data-slide="next">
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
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Usuario Interno</span>
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
                                    <h6 className="m-2 font-weight-bold text-primary text-center">TANQUEAR VEHÍCULO DEL CLIENTE</h6>
                                </div>
                                <div className="card-body">
                                
                                    <div className="p-5">
                                        <form className="user">
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Placa" />
                                                </div>
                                                
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Confirme placa" />
                                                </div>
                                                
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                <select class="form-select form-control-user2" aria-label="Default select example" >
                                                <option value="1">Corriente</option>
                                                <option value="2">Extra</option>
                                                </select>
                                                   
                                                </div>
                                                
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Galones" />
                                                </div>
                                                
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                        placeholder="Total a pagar" />
                                                </div>
                                                
                                            </div>
                                            
                                        
                                            <Link to="/Login" className="btn btn-primary btn-user btn-block">
                                                Tanquear
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
        
    </div>
    
    </>


  );
}

export default Tanquear2;