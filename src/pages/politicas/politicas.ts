import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
//importamos la libreria del proveedor de conexion a la bd
import { RegistroProvider } from '../../providers/registro/registro';



@IonicPage()
@Component({
  selector: 'page-politicas',
  templateUrl: 'politicas.html',
  providers: [RegistroProvider]
})
export class PoliticasPage {

   //agregamos
   politicas: String

   //importamos en el constructor el servicio con el que traemos de la bd los datos llamado
   //registro provider
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController,
    public registroprovider:  RegistroProvider ) {
  }

 //Metodo para traer los datos 
ngOnInit(){
  this.registroprovider.getPoliticas().subscribe(
    data => {
      this.politicas = data.consulta
    } ,
    error => {
      console.log(error)
    }

  )
}

ionViewDidEnter() {
  this.menu.swipeEnable(false);
}


}

