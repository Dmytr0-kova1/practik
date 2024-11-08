import { getAllRecipes, getRecipeById } from "./dummyJSON-api";
import { openModal } from "./modal";
import { renderRecipes } from "./renderFunction";

export async function onDOMLoaded() {
    try {
    const {recipes} = await getAllRecipes();
        renderRecipes(recipes);

    } catch (error) {
        console.log("error", error);

    }

}


export async function onRecipesListClick(event){
  if (event.target.nodeName !== 'IMG'){
    return
  }
  try{
    const id= event.target.dataset.id;
    const recipe= await getRecipeById(id);

    openModal();
  } catch(error){
    console.log(error)
  }
}