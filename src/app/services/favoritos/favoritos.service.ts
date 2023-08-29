import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favs: any[]
  constructor() {
    let savedFavs = localStorage.getItem('favs') || "[]"
    this.favs = JSON.parse(savedFavs)
  }

  addFav(id:string) {
    if (!this.favs.includes(id)) {
      this.favs.push(id)
      localStorage.setItem('favs', JSON.stringify(this.favs))
    }
  }

  getFavs():any[] {return this.favs}
}
