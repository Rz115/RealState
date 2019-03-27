import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistroProvider {
//variable para traer datos de inmobiliarias registradas
  private url: string

  constructor(public http: Http) {
   
    //metodo para traer datos de inmobiliarias registradas con un archivo php almacenado
    //en el servidor que se utiliza para la empresa
    this.url = "http://educacionlzc.com/inmobiliarias/api.php"
 
  }


//metodo para traer las propiedades en venta de las inmobiliarias
getRecipes(idCat: number) {
 return this.http.get(this.url+"?action=getrecipes&cat="+idCat).map(res => res.json())
}

//metodo para traer las propiedades en renta de las inmobiliarias
getRenta(idCat: number) {
  return this.http.get(this.url+"?action=getrentas&cat="+idCat).map(res => res.json())
 }

  //metodo para traer datos de inmobiliarias registradas
  getCategory(){
    return this.http.get(this.url+"?action=getcategorys").map(res => res.json())

  }
//metodo para traer los datos de las politicas almacenadas en la base de datos y que la app
//sea ligera y no tenga que cargarlas de manera estatica
  getPoliticas(){
    return this.http.get(this.url+"?action=getpoliticas").map(res => res.json())

  }
  //metodo para traer los datos de los anuncios en la pagina de anuncios
  
getanuncios(){
  return this.http.get(this.url+"?action=getanuncios").map(res => res.json())

}

getRecipeSearch(search: string){
  return this.http.get(this.url+"?action=getrecipes&search="+search).map(res => res.json())
}


getRecipeSearchs(search: string){
  return this.http.get(this.url+"?action=getrentas&search="+search).map(res => res.json())
}

}
