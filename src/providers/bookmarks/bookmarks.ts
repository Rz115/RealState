import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the BookmarksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookmarksProvider {

  constructor(public storage: Storage) {
    console.log('Hello BookmarksProvider Provider');
  }


  bookMark() {
    return this.storage.get('bookmark').then(bookmark => {
      if(bookmark == null) {
        bookmark = new Array<any>()
      }
      return bookmark
    })
  }

  isBookmared(recipe: any) {
    return this.bookMark().then(recipes => { 
      for(let i = 0; i < recipes.lenght; i++) {
        if(recipes[i].id_propiedad == recipe.id_propiedad) {
          return true
        }
      }
      return false
    })
  }

addBookmark(recipe: any) {
  this.bookMark().then(recipes => {
    recipes.push(recipe)
    this.save(recipes)
  })
}

removeBookmared(recipe: any){
  this.bookMark().then(recipes => {
    recipes.splice(recipes.findIndex(elm => elm.id_propiedad == recipe.id_propiedad), 1)
    this.save(recipes)
  })
}

save(recipes){
this.storage.set('bookmark', recipes)
}

}