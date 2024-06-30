import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  singleRecipe: Recipe;

  constructor(private activatedRoute : ActivatedRoute, private recipeService
    : RecipesService, private router : Router, private alertCtr : AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(para =>{
      if (!para.has('recipesId')) {
        this.router.navigate(['/recipes']);
        return
      }
      const id= para.get('recipesId');
      const recipeId = id?id:" ";
      this.singleRecipe = this.recipeService.get_single_Recipe(recipeId);
    })
  }

  onDelete(){
    this.alertCtr.create({header:'Are you sure',
       message: 'Do you really want to delete this recipe',
       buttons:[{
        text :'Cancel',
        role: 'cancel'
       },
       {
        text : 'Delete',
        handler : ()=>{
          this.recipeService.delete_a_recipe(this.singleRecipe.id)
          this.router.navigate(['/recipes']);
        }
       }
      ]
      }).then(alertEl =>{
        alertEl.present();
      })
  }

}
