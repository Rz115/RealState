import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPageModule } from '../pages/inicio/inicio.module';
//importamos la libreria http de servicio
import { HttpModule } from '@angular/http';
//libreria para que las imagenes tengan zoom
import { IonicImageViewerModule } from 'ionic-img-viewer';
//importamos la librería para almacenar los favoritos
import { IonicStorageModule } from '@ionic/storage';
//importamos el provedor de servicio de conexion con mysql
import { RegistroProvider } from '../providers/registro/registro';
//finalmente aqui importamos todas las paginas que se crean para la aplicacion
import { PopoverComponent } from '../components/popover/popover';
import { AboutUsPageModule } from '../pages/about-us/about-us.module';
import { AnunciosPageModule } from '../pages/anuncios/anuncios.module';
import { PoliticasPageModule } from '../pages/politicas/politicas.module';
import { DatosinmobiPageModule } from '../pages/datosinmobi/datosinmobi.module';
import { InmoviventaPageModule } from '../pages/inmoviventa/inmoviventa.module';
import { InmobirentaPageModule } from '../pages/inmobirenta/inmobirenta.module';
import { VentaPropiedadDatosPageModule } from '../pages/venta-propiedad-datos/venta-propiedad-datos.module';
import { RentaPropiedadDatosPageModule } from '../pages/renta-propiedad-datos/renta-propiedad-datos.module';
//importamos libreria de diseño de transicion
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { BookmarksProvider } from '../providers/bookmarks/bookmarks';
import { BookmarkPageModule } from '../pages/bookmark/bookmark.module';
import { ModalContentPageModule } from '../pages/modal-content/modal-content.module';
import { BuscadorrRentaPageModule } from '../pages/buscadorr-renta/buscadorr-renta.module';


@NgModule({
  declarations: [
    MyApp,
    //aqui se agregan los componentes, en este caso es el pop over que esta up right
    PopoverComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //importamos los servicios que ocupamos para toda la app
    IonicStorageModule.forRoot(),
    HttpModule,
    IonicImageViewerModule,
   //se agregan aqui todos los imports de las paginas creadas
    AboutUsPageModule,
    AnunciosPageModule,
    PoliticasPageModule,
    InicioPageModule,
    DatosinmobiPageModule,
    InmoviventaPageModule,
    InmobirentaPageModule,
    VentaPropiedadDatosPageModule,
    RentaPropiedadDatosPageModule,
    BookmarkPageModule,
    ModalContentPageModule,
    BuscadorrRentaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverComponent
    
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegistroProvider,
    NativePageTransitions,
    BookmarksProvider
    
  ]
})
export class AppModule {}
