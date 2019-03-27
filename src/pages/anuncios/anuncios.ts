import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//importamos la libreria del proveedor de conexion a la bd
import { RegistroProvider } from '../../providers/registro/registro';

/**
 * Generated class for the AnunciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html',
  providers: [RegistroProvider]
})
export class AnunciosPage {

  //agregamos variable
  anuncio: String

   //importamos en el constructor el servicio con el que traemos de la bd los datos llamado
   //registro provider
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public registroprovider:  RegistroProvider ) {
  }

   //Metodo para traer los datos 
ngOnInit(){
  this.registroprovider.getanuncios().subscribe(
    data => {
      this.anuncio = data.consultaa
      console.log(data)
    } ,
    error => {
      console.log(error)
    }

  )
}

}
