using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProductosAPI.entidades
{
    public class Categoria
    {
        public int Id { set; get; }

        [Required(ErrorMessage ="El campo {0} es requerido")]
        [StringLength(maximumLength:100)]
        public string Nombre { set; get; }

    }
}
