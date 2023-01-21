using DATA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Xml.Linq;
using WebApplication.DTO;

namespace WebApplication.Controllers
{
    public class RecipeController : ApiController
    {
        [HttpGet]
        [Route("api/recipe")]
        public IHttpActionResult Get()
        {
            try
            {
                React_HW3_MyKitchenDBContext db = new React_HW3_MyKitchenDBContext();

                List<RecipeDTO> recipes = db.Recipes.Select(x => new RecipeDTO()
                {
                    id = x.id,
                    name = x.name,
                    image = x.image,
                    cookingMethod = x.cookingMethod,
                    time = x.time,

                    ingredients = x.Ingredients.Select(y => new IngredientDTO()
                    {
                        id = y.id,
                        name = y.name,
                        image = y.image,
                        calories = y.calories
                    }).ToList()

                }).ToList();

                return Ok(recipes);

            }
            catch (Exception e)
            {

                return Content(HttpStatusCode.BadRequest, e.Message);

            }

        }


        [HttpPost]
        [Route("api/recipe")]
        public IHttpActionResult Post([FromBody] Recipe value)
        {


            try
            {
                React_HW3_MyKitchenDBContext db = new React_HW3_MyKitchenDBContext();

                var ids = value.Ingredients.Select(x => new { id = x.id }).ToList();
                List<int> newIds = new List<int>();
                foreach (var item in ids)
                {
                    newIds.Add(Convert.ToInt32(item.id));
                }




                Recipe rec = new Recipe();
                rec.id = (int)value.id;
                rec.name = value.name;
                rec.image = value.image;
                rec.cookingMethod = value.cookingMethod;
                rec.time = (int)value.time;
                rec.Ingredients = db.Ingredients.Where(x => newIds.Contains(x.id)).ToList();
                db.Recipes.Add(rec);

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
