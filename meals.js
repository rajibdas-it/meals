const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  // console.log(meals);
  const mealsDiv = document.getElementById("meals");
  mealsDiv.innerHTML = "";

  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
              <div class="card" onclick="loadMealDetails(${meal.idMeal})">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 20)}...</p>
              </div>
            </div>
 `;
    mealsDiv.appendChild(mealDiv);
  });
};

const searchFood = () => {
  const searchFood = document.getElementById("search-field");
  const searchValue = searchFood.value;
  loadMeals(searchValue);
  searchFood.value = "";
};

const loadMealDetails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  // console.log(meal);
  const mealDetailsSection = document.getElementById("meal-details");
  const mealDiv = document.createElement("div");
  mealDetailsSection.innerHTML = "";
  //   mealDiv.classList.add("row", "g-0");
  mealDiv.innerHTML = `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
            <img
                src="${meal.strMealThumb}"
                class="img-fluid rounded-start"
                alt="..."
            />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">
                    <small class="text-muted">country: ${meal.strArea}</small>
                    <small class="text-muted">Category: ${meal.strCategory}</small>
                    </p>
                    <p class="card-text">${meal.strInstructions}</p>
                    
                </div>
            </div>
        </div>
    </div>          
  `;
  mealDetailsSection.appendChild(mealDiv);
};

loadMeals("a");
