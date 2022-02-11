using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/data")]
    public class DataController : Controller
    {
        [HttpPost("get-random-data/{range}")]
        public JsonResult GetRandomData(int range)
        {
            int[] randomNumbers = new int[range];
            Random random = new ();
            for (int i = 0; i < range; i++)
            {
                randomNumbers[i] = random.Next(50, 400);
            }
            return new JsonResult(randomNumbers);
        }
        
    }
}
