import { refs } from "./refs";

export function renderRecipes(recipes) {
   const markup = recipes.map(({image, name, difficulty, cuisine}) => `
    <li class="recipes-item">
          <img src="${image}" alt="${name}" />
          <div>
            <h3>${name}</h3>
            <p>Cuisine: ${cuisine}</p>
            <p>Difficulty: ${difficulty}</p>
          </div>
        </li>
    `).join("");
    refs.recipesList.innerHTML = markup;
}