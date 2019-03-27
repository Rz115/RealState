import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
//importamos la libreria del proveedor de conexion a la bd
import { RegistroProvider } from '../../providers/registro/registro';
import { PopoverComponent } from '../../components/popover/popover';
import { DatosinmobiPage } from '../datosinmobi/datosinmobi';
import { InmoviventaPage } from '../inmoviventa/inmoviventa';
import { InmobirentaPage } from '../inmobirenta/inmobirenta';
//importamos la libreria de diseño de transicion
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers: [RegistroProvider]
})
export class InicioPage {

  images = [
  'http://educacionlzc.com/inmobiliarias/anuncios/anuncio1.jpg',
  'http://educacionlzc.com/inmobiliarias/anuncios/anuncio2.jpg',
  'http://educacionlzc.com/inmobiliarias/anuncios/anuncio3.jpg',
  'http://educacionlzc.com/inmobiliarias/anuncios/anuncio3.jpg'];

//importamos el controlador para visualziar las imágenes
_imageViewerCtrl: ImageViewerController;

   //agregamos la variable en donde se entrega la consulta en el php
   categorys: any = []
  //agregamos variable
  anuncio: String
   idCategory: number
   //matriz de las imágenes
   anu: any = []
//agregamos en el constructor el parametro de controllador de alertas   
   //importamos
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public registroprovider:  RegistroProvider,
    private nativePageTransitions: NativePageTransitions,
    imageViewerCtrl: ImageViewerController) {
      this._imageViewerCtrl = imageViewerCtrl;
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }


 //Metodo para traer los datos 
ngOnInit(){
  this.registroprovider.getCategory().subscribe(
    data => {
      this.categorys = data.categorys
      console.log(data)
    } ,
    error => {
      console.log(error)
    }

  )
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

//funcion para cambiar a otra pagina seleccionando una inmobiliaria
//solicitas el id, su nombre y la imagen a la siguiente pagina/ además se añadió una transición 
//dentro del boton
showRecipes(idCate: number, title: String, image: String, direc: String, 
  tel: CharacterData, fras: String, details: String ){
  
    this.nativePageTransitions.fade(null);
    
  this.navCtrl.push(DatosinmobiPage, {"idCategory": idCate, "title": title, 
  "imagen": image, "direccion": direc, "telefono": tel, "frase":fras, "detalles": details});
  
  }
//El siguiente metodo cambia a la pagina de venta en donde se muestran las propiedades
//de a cuerdo al id que tenga la inmobiliaria desprenderá las propiedades en venta
//que esta tenga en la pagina siguiente 
  Venta(idCate: number, image: String){
let options: NativeTransitionOptions = {
  direction: 'up',
  duration: 600
}
    this.nativePageTransitions.curl(options);
    this.navCtrl.push(InmoviventaPage,{"idCategory": idCate,  "imagen": image});
    }
//El siguiente metodo cambia a la pagina de venta en donde se muestran las propiedades
//de a cuerdo al id que tenga la inmobiliaria desprenderá las propiedades en renta
//que esta tenga en la pagina siguiente
    Renta(idCate: number){
      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 600
      }
      this.nativePageTransitions.curl(options);
      this.navCtrl.push(InmobirentaPage,{"idCategory": idCate});
      }


  //metodo para el popover arriba en la derecha
  presentPopover(myevent) {
    let popover = this.popoverCtrl.create( PopoverComponent, );
    popover.present({
    
      ev: myevent
      
 
    }); 


      }
     
}