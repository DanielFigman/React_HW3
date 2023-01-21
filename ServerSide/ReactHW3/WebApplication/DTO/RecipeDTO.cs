using DATA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.DTO
{
    public class RecipeDTO
    {
        public int id;
        public string name;
        public string image;
        public string cookingMethod;
        public int time;
        public List<IngredientDTO> ingredients;

    }
}