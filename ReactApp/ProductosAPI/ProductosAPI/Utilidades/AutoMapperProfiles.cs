using AutoMapper;
using ProductosAPI.DTOs;
using ProductosAPI.entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductosAPI.Utilidades
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {

            CreateMap<Categoria, CategoriaDTO>().ReverseMap() ;
            CreateMap<CategoriaCreacionDTO, Categoria>().ReverseMap();
        }
    }
}
