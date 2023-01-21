using DATA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication.DTO;

namespace WebApplication.Controllers
{
    public class IngredientController : ApiController
    {
        [HttpGet]
        [Route("api/ingredient")]
        public IHttpActionResult Get()
        {
            try
            {
                React_HW3_MyKitchenDBContext db = new React_HW3_MyKitchenDBContext();

                List<IngredientDTO> ings = db.Ingredients.Select(x => new IngredientDTO()
                {
                    id = x.id,
                    name = x.name,
                    image = x.image,
                    calories = x.calories
                }).ToList();

                return Ok(ings);
            }
            catch (Exception e)
            {

                return Content(HttpStatusCode.BadRequest, e.Message);
            }

        }


        [HttpPost]
        [Route("api/ingredient")]
        public IHttpActionResult Post([FromBody] Ingredient value)
        {
            try
            {
                React_HW3_MyKitchenDBContext db = new React_HW3_MyKitchenDBContext();

                Ingredient ing = new Ingredient();
                ing.id = (int)value.id;
                ing.name = value.name;
                ing.image = value.image;
                ing.calories = (int)value.calories;
                db.Ingredients.Add(ing);

                db.SaveChanges();


                return Content(HttpStatusCode.Created, value);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }
    }
}
