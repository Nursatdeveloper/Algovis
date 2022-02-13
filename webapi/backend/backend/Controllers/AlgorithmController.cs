using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/algorithm")]
    public class AlgorithmController : Controller
    {
        [HttpGet("/find-algorithm/{name}")]
        public JsonResult FindAlgorithm(string algorithm)
        {
            return new JsonResult("hello");
        }
    }
}
