import CrearCategoria from "./components/CrearCategoria";
import CrearProductos from "./components/CrearProductos";
import EditarCategoria from "./components/EditarCategoria";
import EditarProductos from "./components/EditarProductos";
import FiltroProductos from "./components/FiltroProductos";
import IndiceCategorias from "./components/IndiceCategorias";
import LadingPage from "./components/LandingPage";
import RedireccionarALanding from "./utils/RedireccionarALanding";

const rutas=[

{path:'/Categorias/Crear',componete: CrearCategoria},
{path:'/Categorias/Editar/:id(\\d+)',componete: EditarCategoria},
{path:'/Categorias',componete: IndiceCategorias, exact:true},

{path:'/Productos/Crear',componete: CrearProductos},
{path:'/Productos/Editar\:id(\\d+)',componete: EditarProductos},
{path:'/Productos/Filtrar',componete: FiltroProductos},

{path:'/',componete: LadingPage, exact:true},
{path:'*',componete: RedireccionarALanding},


];

export default rutas;