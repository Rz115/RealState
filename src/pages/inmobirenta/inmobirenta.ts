import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { RentaPropiedadDatosPage } from '../renta-propiedad-datos/renta-propiedad-datos';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-inmobirenta',
  templateUrl: 'inmobirenta.html',
  providers: [RegistroProvider]
})
export class InmobirentaPage {
 //creamos la variable como arreglo en donde se guadaran todos los datos y se mostraran de
 //cada propiedad en renta de la inmobiliaria seleccionada
  recipes: Array<any>
  //la variable importante que es el valor de la inmobiliaria que se halla seleccionado
  //previamente y con la que se mandaran a llamar las propiedades que esta tiene en renta
  //además de gracias a ella poder cargar los datos cada propiedad en otra pagina
  idCategory: number

  //se importa en nuestro constructor el provedor de servicio con el que traemos los datos
  //de las propiedades en renta llamado registro
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menu: MenuController,
    public registroprovider:  RegistroProvider) {
  }

 //en este metodo mostramos las propiedades que tiene cada inmobiliaria segun el id 
//que se seleccionó en la pagina de inicio
ngOnInit(){
  this.idCategory = this.navParams.get('idCategory')
//indica que al inciar la carga de la pagina haga la siguiente accion que es de a cuerdo
//al id cargado traer las propiedades en renta que este tenga
  this.registroprovider.getRenta(this.idCategory).subscribe(
    data => {
      this.recipes = data.recipes
      console.log(this.recipes)
    },
    error => {
      console.log(error)
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
