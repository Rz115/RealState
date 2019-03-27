import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//importamos el proveedor de favoritos
import { BookmarksProvider } from '../../providers/bookmarks/bookmarks';
import { VentaPropiedadDatosPage } from '../venta-propiedad-datos/venta-propiedad-datos';



@IonicPage()
@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
  providers: [BookmarksProvider]
})
export class BookmarkPage {

  recipes: any = []

  //importamos el servicio de marca para las propiedades favoritas 
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public boomarksProvider: BookmarksProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarkPage');
  
    this.boomarksProvider.bookMark().then(recipes => {
      this.recipes = recipes
    })

  }
  ionViewWillEnter(){
  this.boomarksProvider.bookMark().then(recipes => {
    this.recipes = recipes
  })
  }
//al presionar el card que esta en esta lsita de favoritos nos lleva a sus datos
showRecipe(i){
  this.navCtrl.push(VentaPropiedadDatosPage, {"recipe": this.recipes[i]})
}

}