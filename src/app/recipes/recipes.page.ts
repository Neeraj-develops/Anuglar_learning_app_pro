import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipesContent: Recipe[] = [];

  constructor(private recipesDetails : RecipesService) { }

  ngOnInit() {
    // this.recipesContent= this.recipesDetails.get_All_Recipes();
    console.log(this.recipesContent);
    
  }

  ionViewWillEnter(){
    this.recipesContent= this.recipesDetails.get_All_Recipes();
  }


}
