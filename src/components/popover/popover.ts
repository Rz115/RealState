import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { AboutUsPage } from '../../pages/about-us/about-us';
import { PoliticasPage } from '../../pages/politicas/politicas';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    
    
  }
//cerrar el popover una vez que se seleccione una opcion
  close() {
    this.viewCtrl.dismiss();
  }
//implementamos metodos de botones popover en home
itemClicks(){
  this.navCtrl.push(PoliticasPage);
}
itemClickss(){
  this.navCtrl.push(AboutUsPage);
}
}
