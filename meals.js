const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  console.log(meals);
  const mealsDiv = document.getElementById("meals");
  mealsDiv.innerHTML = "";

  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
              <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 50)}...</p>
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

loadMeals("a");
