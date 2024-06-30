import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesContent : Recipe[] =[
    {
      id:"r1",
      title:"Panner Sabzi",
      imageurl:'https://picsum.photos/200/300?grayscale',
      ingredients:['Panner', 'Aloo', 'pyazz']
    },
    {
      id:"r2",
      title:"Aloo Sabzi",
      imageurl:'https://picsum.photos/200/300?grayscale',
      ingredients:['Aloo', 'Aloo', 'pyazz']
    },
    {
      id:"r3",
      title:"Mashroom Sabzi",
      imageurl:'https://picsum.photos/200/300?grayscale',
      ingredients:['Mashroom', 'Aloo', 'pyazz']
    }

  ]

  constructor() { }

  get_All_Recipes(){
    return [...this.recipesContent]
  }

  get_single_Recipe(recipeId : string){
    if (recipeId == " ") {
      return {
        id:"not found.....",
        title:"not found.....",
        imageurl:'not found.....',
        ingredients:['not found.....']
      }
    }
    return {...this.recipesContent.find(r => {
      return r.id === recipeId;
    })}
  }

  delete_a_recipe(recipeId : string){
     this.recipesContent= this.recipesContent.filter(re => {
       return re.id == recipeId;
      })
  }
}
