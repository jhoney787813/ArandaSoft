import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import IndiceCategorias from './components/IndiceCategorias';
import LadingPage from './components/LandingPage';
import Menu from './utils/Menu';
import rutas from './route-config';
import configurarValidaciones from './validaciones';

configurarValidaciones();
function App() {


  return (
    <>

    <BrowserRouter>
    <Menu></Menu>
    <div className='container'>
    <Switch >
      {rutas.map(ruta=>
      <Route key={ ruta.path} path={ruta.path} exact={ruta.exact }>
        <ruta.componete/>
      </Route>
      )}
     
    </Switch>

    </div>
    </BrowserRouter>

    </>
  );
}

export default App;
