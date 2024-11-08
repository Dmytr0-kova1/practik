import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/recipes";


export async function getAllRecipes() {
    const { data } = await axios();
    return data;
}


