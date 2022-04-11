import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { urlCategorias } from "../utils/endpoints";
import ListadoGenerico from "../utils/ListadoGenerico";
import { categoriaDTO, categoriaDTO2 } from "./categorias.model";

export default function IndiceCategorias()
{
const [categorias,setCategorias]= useState<categoriaDTO2[]>();

useEffect(()=>{
    axios.get(urlCategorias)
    
    .then((respuesta:AxiosResponse<categoriaDTO2[]>)=>{
        console.log(respuesta.data);
        setCategorias(respuesta.data);
    })
},[])

    return( 
        <>
        <h3>Categorias</h3>
        <Link className="btn btn-primary" to='Categorias/Crear'>Crear Categorías</Link>
        
            <ListadoGenerico listado={categorias}>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       categorias?.map(cat=>
                        
                            <tr key={cat.id}>
                                <td>
                                <Link className="btn btn-success"  to={`/Categorias/${cat.id}`}>Editar</Link>
                                <Button className="btn btn-danger">Borrar</Button>
                                </td>
                                <td>{cat.nombre}</td>
                            </tr>
                        
                        )}
                </tbody>

                </table>

            </ListadoGenerico>

        </>
    )

}

interface indiceCategorias
{

}