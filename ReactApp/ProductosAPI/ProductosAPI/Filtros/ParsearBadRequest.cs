using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductosAPI.Filtros
{
    public class ParsearBadRequest : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            var casteoResult = context.Result as IStatusCodeActionResult;
            if(casteoResult==null)
            {
                return;
            }

            var codStatus = (casteoResult).StatusCode;

            if(codStatus==400)
            {
                var respuesta = new List<string>();
                var resultadoActual = context.Result as BadRequestObjectResult;

                if(resultadoActual.Value is string)
                {
                    respuesta.Add(resultadoActual.Value.ToString());
                }
                else
                {
                    foreach(var llave in context.ModelState.Keys)
                    {
                        foreach(var err in context.ModelState[llave].Errors)
                        {
                            respuesta.Add($"{llave}:{err.ErrorMessage}");
                        }
                    }

                    context.Result = new BadRequestObjectResult(respuesta);
                }
            }
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            //throw new NotImplementedException();
        }
    }
}
