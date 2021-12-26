import React from 'react';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';
import ReactDOM from 'react-dom';
import Home from '../src/componentes/home/Home';
import Login from '../src/componentes/ingresar/Login';
import Registrar from '../src/componentes/registrar/Registrar';
import Nosotros from '../src/componentes/nosotros/Nosotros';
import Contacto from '../src/componentes/contacto/Contacto';
import Recuperar from '../src/componentes/recuperar/Recuperar';
import Registrarvehiculo from './componentes/externo/Registrarvehiculo';
import Vehiculosregistrados from './componentes/externo/Vehiculosresgistrados';
import Saldo from './componentes/externo/Saldo';
import Recargar from './componentes/externo/Recargar';
import Historial from './componentes/externo/Historial';
import Estadogasolina from './componentes/externo/Estadogasolina';
import Tanquea from './componentes/externo/Tanquea';
import Redimir from './componentes/externo/Redimir';
import Gestionar from './componentes/interno/Gestionar';
import Disponibilidad from './componentes/interno/Disponibilidad';
import Tanquear2 from './componentes/interno/Tanquear2';
import Estado from './componentes/interno/Estado';
import App from '../src/App';
import App2 from '../src/App2';


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Registrar" element={<Registrar/>} />
        <Route exact path="/Nosotros" element={<Nosotros/>} />
        <Route exact path="/Contacto" element={<Contacto/>} />
        <Route exact path="/Recuperar" element={<Recuperar/>} />
        <Route exact path="/Registrarvehiculo" element={<Registrarvehiculo/>} />
        <Route exact path="/Vehiculosregistrados" element={<Vehiculosregistrados/>} />
        <Route exact path="/Saldo" element={<Saldo/>} />
        <Route exact path="/Recargar" element={<Recargar/>} />
        <Route exact path="/Historial" element={<Historial/>} />
        <Route exact path="/Estadogasolina" element={<Estadogasolina/>} />
        <Route exact path="/Tanquea" element={<Tanquea/>} />
        <Route exact path="/Redimir" element={<Redimir/>} />
        <Route exact path="/Gestionar" element={<Gestionar/>} />
        <Route exact path="/Disponibilidad" element={<Disponibilidad/>} />
        <Route exact path="/Tanquear2" element={<Tanquear2/>} />
        <Route exact path="/Estado" element={<Estado/>} />
        <Route exact path="/App" element={<App/>} />
        <Route exact path="/App2" element={<App2/>} />
      </Routes>
    </Router>
    </MuiPickersUtilsProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

export default App;