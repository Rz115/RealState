import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';
import { VentaPropiedadDatosPage } from '../venta-propiedad-datos/venta-propiedad-datos';
import { RegistroProvider } from '../../providers/registro/registro';


@IonicPage()
@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
  providers: [RegistroProvider]
})
export class ModalContentPage {
  
 
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
      this.registroprovider.getRecipeSearch(search).subscribe(
       data => {
         this.recipes = data.recipes
       } 
      )
    }
//metodo para llevar todos de la propiedad seleccionada, meterlos dentro de un array y
//llevarlos hasta la pagina de propiedades en venta de la inmobiliaria que se haya seleccionado
  showRecipe(i){
    this.navCtrl.push(VentaPropiedadDatosPage,{"recipe":this.recipes[i]})
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
