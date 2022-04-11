using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductosAPI.DTOs
{
    public class PaginacionDTO
    {

        public int Pagina { get; set; } = 1;

        private int recordsPagina = 10;

        private readonly int cantidadMaximarecordsPagina=50;

        public int RecordsPorPagina
        {
            get
            {
                return recordsPagina;
            }
            set
            {
                RecordsPorPagina = (value > cantidadMaximarecordsPagina) ? cantidadMaximarecordsPagina : value;
            }
        }
    }
}
