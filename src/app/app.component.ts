import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { PoliticasPage } from '../pages/politicas/politicas';
import { AboutUsPage } from '../pages/about-us/about-us';
import { ModalContentPage } from '../pages/modal-content/modal-content';
import { BuscadorrRentaPage } from '../pages/buscadorr-renta/buscadorr-renta';
@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = InicioPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              ) {
                this.initializeApp();
                // used for an example of ngFor and navigation
                this.pages = [
                  
                  { title: 'Busca Propiedad en Venta', component: ModalContentPage, icon: "md-search" },
                  { title: 'Busca Propiedad en Renta', component: BuscadorrRentaPage, icon: "md-search" }, 
                 // { title: 'Anuncios', component: AnunciosPage, icon: "md-megaphone" },
                   { title: 'Políticas de Privacidad', component: PoliticasPage, icon: "md-lock" },
                   { title: 'Info de la app', component: AboutUsPage, icon: "md-code" }
                   


                ];
            
              }
            
              initializeApp() {
                this.platform.ready().then(() => {
                  // Okay, so the platform is ready and our plugins are available.
                  // Here you can do any higher level native things you might need.
                  this.statusBar.styleDefault();
                  this.splashScreen.hide();
                });
              }
            
              openPage(page) {
                // Reset the content nav to have just this page
                // we wouldn't want the back button to show in this scenario
               
                  if(page == InicioPage){
                    this.nav.setRoot(page.component);
                  }
                  this.nav.push(page.component);
               
                             
            }
           
            }

