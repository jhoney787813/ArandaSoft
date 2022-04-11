using Microsoft.EntityFrameworkCore;
using ProductosAPI.entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductosAPI
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions options ) :base(options)
        {

        }

        public DbSet<Categoria> Categorias { get; set; }
    }
}
