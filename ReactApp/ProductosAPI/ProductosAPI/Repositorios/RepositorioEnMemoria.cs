using ProductosAPI.entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductosAPI.Repositorios
{
    public class RepositorioEnMemoria
    {
        private List<Categoria> _categorias;
         public RepositorioEnMemoria()
        {
            _categorias = new List<Categoria>()
           {
                new Categoria(){Id=1,Nombre="Alimentos"},
                new Categoria(){Id=1,Nombre="Bebidas"}
           };
        } 

        public List<Categoria>ObtenerCategorias()
        {
            return _categorias;
        }

    }
}
