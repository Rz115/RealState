import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { VentaPropiedadDatosPage } from '../venta-propiedad-datos/venta-propiedad-datos';
import { MenuController } from 'ionic-angular/components/app/menu-controller';




@IonicPage()
@Component({
  selector: 'page-inmoviventa',
  templateUrl: 'inmoviventa.html',
  providers: [RegistroProvider]
})

export class InmoviventaPage  {
 
  //creamos la siguiente variable y el siguiente vector que contendra las propiedades que
  //tiene cada residencia
  recipes: any = []
  //variable para busqueda
  recipeSearch: String
  //la variable importante que es el valor de la inmobiliaria que se halla seleccionado
  //previamente y con la que se mandaran a llamar las propiedades que esta tiene en renta
  //además de gracias a ella poder cargar los datos cada propiedad en otra pagina
  idCategory: number
  title: String
items: string[];
recipe: any = []
  //se importa en nuestro constructor el provedor de servicio con el que traemos los datos
  //de las propiedades en renta llamado registro
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menu: MenuController,
    public registroprovider:  RegistroProvider,
    public modalCtrl: ModalController) {

    
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
 



//en este metodo mostramos las propiedades que tiene cada inmobiliaria segun el id 
//que se seleccionó en la pagina de inicio
 ngOnInit(){
  this.title = this.navParams.get('title')
  this.idCategory = this.navParams.get('idCategory')
//indica que al inciar la carga de la pagina haga la siguiente accion que es de a cuerdo
//al id cargado traer las propiedades en renta que este tenga
  this.registroprovider.getRecipes(this.idCategory).subscribe(
    data => {
      this.recipes = data.recipes
      console.log(data)
    },
    error => {
      console.log(error)
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

 }


