﻿using DATA;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.DTO
{
    public class IngredientDTO
    {
        public int id;
        public string name;
        public string image;
        public int calories;
        public List<RecipeDTO> recipes;

    }
}