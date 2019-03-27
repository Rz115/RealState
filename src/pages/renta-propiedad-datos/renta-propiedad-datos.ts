import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';

//declaramos la variable google la cual sera de importancia para traer visualizar el mapa
//con el api de google
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-renta-propiedad-datos',
  templateUrl: 'renta-propiedad-datos.html',
})
export class RentaPropiedadDatosPage {
  
  //este elemento es necesario para que funcione el elemento de mapa dentro de las funciones
  //nativas de ionic con el api de mapa de goole
  @ViewChild('map') mapRef: ElementRef;

  //importamos el controlador para visualziar las imágenes
  _imageViewerCtrl: ImageViewerController;
  
  //la siguiente variable recibe todos los datos de la inmobiliaria que hallas previamente
  //seleccionado y los muestra en pantalla dinamicamente
  recipe: any = []
 
//en el constructor siempre se agrega todo lo que importamos para utilizarlo en la pagina
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController,
    imageViewerCtrl: ImageViewerController) {
      //aplica aqui el metodo de la vista de la imagen con el siguiente metodo
      this._imageViewerCtrl = imageViewerCtrl;
  }

   //se creo la siguiente funcion para poder visualizar la imagen dentro de carrusel
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

  //mostramos el mapa cada que se abra la pagina para mostrar los datos de la inmobiliaria
//que se seleccione
ionViewDidLoad(){
  this.showMap();
}

  //traemos los datos de la propiedad correspondiente con el siguiente metodo
  ngOnInit(){
    this.recipe = this.navParams.get("recipe")
  }
  //El menu lateral estará desactivado en esta página
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  //la funcion para mostrar el mapa 
showMap() {
  //en la variable locacion guardamos la latitud y la longitud directo de la base de datos
  //de la inmobiliaria que se halla seleccionado, como todos los datos de la inmobiliaria
  //yacen en la variable recipe, decimos que al inicar la pagina con el metodo onInit 
  //y el this.recipe + nombre de la columna que en este caso son latitud y longitud se muestren
  //como valor que se trae 
  var location = new google.maps.LatLng(this.recipe.latitud, this.recipe.longitud);
//agregamos dentro el metodo algunas opciones de como queremos que se visaulice el mapa
//como tamaño de visión, tipo e mapa y de nuevo traemos la variable location a la que acabamos
//de asignarle valores en la linea anterior
  var options = {
    center: location, 
    zoom: 16,
    mapTypeId: 'roadmap'
  }
//aqui creamos la variable map la cual contiene los elementos que acabamos de asignarle al 
//mapa que se mostrara
var map = new google.maps.Map(this.mapRef.nativeElement,options);
//traemos dentro del metodo showmapa el marcador de la propiedad que creamos en el siguiente
//metodo
this.addMarker(location, map);
}
//agregamos una marca del punto donde se encuentra la propiedad dentro del mapa
addMarker(position, map){
  return new google.maps.Marker({
    position,
    map
  });
}


}
