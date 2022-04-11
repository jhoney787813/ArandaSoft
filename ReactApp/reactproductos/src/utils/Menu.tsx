import { NavLink } from "react-router-dom";

export default function Menu()
{
    const claseActiva='active'
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"
                 activeClassName={claseActiva}>Productos</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Categorias" 
                            activeClassName={claseActiva}>Categorias</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Productos/Filtrar" 
                            activeClassName={claseActiva}>Filtrar Productos</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Productos/Crear" 
                            activeClassName={claseActiva}>Crear Productos</NavLink>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    )
}