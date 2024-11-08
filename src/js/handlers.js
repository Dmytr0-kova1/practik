import { getAllRecipes } from "./dummyJSON-api";
import { renderRecipes } from "./renderFunction";

export async function onDOMLoaded() {
    try {
    const {recipes} = await getAllRecipes();
        renderRecipes(recipes);
        
    } catch (error) {
        console.log("error", error);
        
    }
    
}
