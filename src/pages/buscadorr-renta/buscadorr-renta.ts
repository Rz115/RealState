import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { RentaPropiedadDatosPage } from '../renta-propiedad-datos/renta-propiedad-datos';

/**
 * Generated class for the BuscadorrRentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscadorr-renta',
  templateUrl: 'buscadorr-renta.html',
})
export class BuscadorrRentaPage {

  //creamos la siguiente variable y el siguiente vector que contendra las propiedades que
  //tiene cada residencia
  recipes: any = []
  //variable para busqueda
  recipeSearch: String
  //la variable importante que es el valor de la inmobiliaria que se halla seleccionado
  //previamente y con la que se mandaran a llamar las propiedades que esta tiene en renta
  //además de gracias a ella poder cargar los datos cada propiedad en otra pagina
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public registroprovider:  RegistroProvider, private menu: MenuController,
    public viewCtrl: ViewController) {
      
    
  }


  searchRecipes(serach){
    this.recipeSearch = serach.target.value
    if(this.recipeSearch.length > 2){
      this.recipes.length = 0
      this.loadRecipes(this.recipeSearch)
    }
    
      }
    
    loadRecipes(search){
      this.registroprovider.getRecipeSearchs(search).subscribe(
       data => {
         this.recipes = data.recipes
       } 
      )
    }
//metodo para llevar todos de la propiedad seleccionada, meterlos dentro de un array y
//llevarlos hasta la pagina de propiedades en venta de la inmobiliaria que se haya seleccionado
  showRecipe(i){
    this.navCtrl.push(RentaPropiedadDatosPage,{"recipe":this.recipes[i]})
  }
  
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

 

}
