import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    //set as private so array cannot be access from outside
    private recipes: Recipe[] = [
        new Recipe('A Test recipe', 'This is a recipe', 'https://cdn.vox-cdn.com/thumbor/Y3E0Q9Dr_' +
            'TqNCfZ08T-BOHhPXEg=/cdn.vox-cdn.com/uploads/chorus_asset/file/6695159/SwiftAndSons_beefwellington2.0.jpg',[]),
        new Recipe('Another Test recipe', 'This is a recipe', 'http://gbc-cdn-public-media.azureedge.net/img11530.768x512.jpg',[])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}