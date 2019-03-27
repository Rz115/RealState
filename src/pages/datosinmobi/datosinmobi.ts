import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-datosinmobi',
  templateUrl: 'datosinmobi.html',
})
export class DatosinmobiPage {
 //variables que llama para que se lean sobre esta pagina, se muestra toda la info de 
 //la inmobiliaria cargada de la bd
  title: String
  idCategory: number 
  imagen: String
  direccion: String
  telefono: CharacterData
  frase: String
  detalles: String

   constructor(public navCtrl: NavController,
    private menu: MenuController,
    public navParams: NavParams) {
  }

  //metodo que inicializa los datos de la inmobiliaria 
  ngOnInit(){
    this.title = this.navParams.get('title')
    this.idCategory = this.navParams.get('idCategory')
    this.imagen = this.navParams.get('imagen')
    this.direccion = this.navParams.get('direccion')
    this.telefono = this.navParams.get('telefono')
    this.frase = this.navParams.get('frase')
    this.detalles = this.navParams.get('detalles')

  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }


}
