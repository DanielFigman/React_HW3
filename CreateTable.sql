use React_HW3_MyKitchen

CREATE TABLE Ingredients (
  id int PRIMARY KEY, 
  [name] NVARCHAR(255) NOT NULL, 
  [image] NVARCHAR(255) NOT NULL, 
  calories int NOT NULL 
);

CREATE TABLE Recipes (
  id int PRIMARY KEY, 
  [name] NVARCHAR(255) NOT NULL, 
  [image] NVARCHAR(255) NOT NULL, 
  cookingMethod nvarchar(max) NOT NULL,
  time int NOT NULL
);


CREATE TABLE IngredientsInRecipes (
  recipeId INT NOT NULL,
  ingredientId INT NOT NULL,
  PRIMARY KEY (recipeId, ingredientId),
  FOREIGN KEY (recipeId) REFERENCES Recipes(id),
  FOREIGN KEY (ingredientId) REFERENCES Ingredients(id)
);

