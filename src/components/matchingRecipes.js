import axios from 'axios';

const apiUrl = 'http://api.yummly.com/v1/api/recipes';
const apiKey = 'db330b81d710c9b574e3c76551fbcdb5';
const apiId = 'a61c2317';

// const allergies = ["394^Peanut-Free", "396^Dairy-Free"];
// const diets = ["390^Pescetarian"]
// const excludeIngredients = [];
const courses = ["course^course-Main Dishes", "course^course-Side Dishes"];
const searchTerms = 'french onion soup';
const resultsPerPage = 10;
const page = 2;

const matchingRecipes = object => {

  // const recipes = []

  return axios.get(apiUrl, {
    params: {
      _app_key: apiKey,
      _app_id: apiId,
      requirePictures: true,
      maxResult: resultsPerPage,
      start: resultsPerPage * (page - 1),

      allowedAllergy: object.allowedAllergy,
      allowedDiet: object.allowedDiet,
      excludedIngredient: object.excludedIngredient,
      
      allowedCourse: courses,
      q: searchTerms
    }
  })
  // .then(res => {
  //   // console.log('res: ', res);

  //   const newArray = res.data.matches;
    
  //   recipes.push(...newArray);

  //   // console.log('recipes in then', recipes);
    
  // });

  // return recipes;
};

export default matchingRecipes;

const diet =
[
  { 
    "id": "388", 
    "shortDescription": "Lacto vegetarian", 
    "longDescription": "Lacto vegetarian", 
    "searchValue": "388^Lacto vegetarian",  
    "type": "diet", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "389", 
    "shortDescription": "Ovo vegetarian", 
    "longDescription": "Ovo vegetarian", 
    "searchValue": "389^Ovo vegetarian", 
    "type": "diet", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "390", 
    "shortDescription": "Pescetarian", 
    "longDescription": "Pescetarian", 
    "searchValue": "390^Pescetarian", 
    "type": "diet", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "386", 
    "shortDescription": "Vegan", 
    "longDescription": "Vegan", 
    "searchValue": "386^Vegan", 
    "type": "diet", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "387", 
    "shortDescription": "Lacto-ovo vegetarian", 
    "longDescription": "Vegetarian", 
    "searchValue": "387^Lacto-ovo vegetarian", 
    "type": "diet", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "403", 
    "shortDescription": "Paleo", 
    "longDescription": "Paleo", 
    "searchValue": "403^Paleo", 
    "type": "diet", 
    "localesAvailableIn": ["en-US"] 
  }
]

const allergy =
[
  { 
    "id": "393", 
    "shortDescription": "Gluten-Free", 
    "longDescription": "Gluten-Free", 
    "searchValue": "393^Gluten-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "394", 
    "shortDescription": "Peanut-Free", 
    "longDescription": "Peanut-Free", 
    "searchValue": "394^Peanut-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "398", 
    "shortDescription": "Seafood-Free", 
    "longDescription": "Seafood-Free", 
    "searchValue": "398^Seafood-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "399", 
    "shortDescription": "Sesame-Free", 
    "longDescription": "Sesame-Free", 
    "searchValue": "399^Sesame-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "400", 
    "shortDescription": "Soy-Free", 
    "longDescription": "Soy-Free", 
    "searchValue": "400^Soy-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "396", 
    "shortDescription": "Dairy-Free", 
    "longDescription": "Dairy-Free", 
    "searchValue": "396^Dairy-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "397", 
    "shortDescription": "Egg-Free", 
    "longDescription": "Egg-Free", 
    "searchValue": "397^Egg-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "401", 
    "shortDescription": "Sulfite-Free", 
    "longDescription": "Sulfite-Free", 
    "searchValue": "401^Sulfite-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "395", 
    "shortDescription": "Tree Nut-Free", 
    "longDescription": "Tree Nut-Free", 
    "searchValue": "395^Tree Nut-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }, 
  { 
    "id": "392", 
    "shortDescription": "Wheat-Free", 
    "longDescription": "Wheat-Free", 
    "searchValue": "392^Wheat-Free", 
    "type": "allergy", 
    "localesAvailableIn": ["en-US"] 
  }
]

const course = [
  {
    "id": "course-Main Dishes",
    "name": "Main Dishes",
    "type": "course",
    "description": "Main Dishes",
    "searchValue": "course^course-Main Dishes",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Desserts",
    "name": "Desserts",
    "type": "course",
    "description": "Desserts",
    "searchValue": "course^course-Desserts",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Side Dishes",
    "name": "Side Dishes",
    "type": "course",
    "description": "Side Dishes",
    "searchValue": "course^course-Side Dishes",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Appetizers",
    "name": "Appetizers",
    "type": "course",
    "description": "Appetizers",
    "searchValue": "course^course-Appetizers",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Salads",
    "name": "Salads",
    "type": "course",
    "description": "Salads",
    "searchValue": "course^course-Salads",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Breakfast and Brunch",
    "name": "Breakfast and Brunch",
    "type": "course",
    "description": "Breakfast and Brunch",
    "searchValue": "course^course-Breakfast and Brunch",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Breads",
    "name": "Breads",
    "type": "course",
    "description": "Breads",
    "searchValue": "course^course-Breads",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Soups",
    "name": "Soups",
    "type": "course",
    "description": "Soups",
    "searchValue": "course^course-Soups",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Beverages",
    "name": "Beverages",
    "type": "course",
    "description": "Beverages",
    "searchValue": "course^course-Beverages",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Condiments and Sauces",
    "name": "Condiments and Sauces",
    "type": "course",
    "description": "Condiments and Sauces",
    "searchValue": "course^course-Condiments and Sauces",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Cocktails",
    "name": "Cocktails",
    "type": "course",
    "description": "Cocktails",
    "searchValue": "course^course-Cocktails",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Snacks",
    "name": "Snacks",
    "type": "course",
    "description": "Snacks",
    "searchValue": "course^course-Snacks",
    "localesAvailableIn": ["en-US"]
  },
  {
    "id": "course-Lunch",
    "name": "Lunch",
    "type": "course",
    "description": "Lunch",
    "searchValue": "course^course-Lunch",
    "localesAvailableIn": ["en-US"]
  }
]