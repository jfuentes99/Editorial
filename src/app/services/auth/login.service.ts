import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

 currentUser:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false); //usuario por defecto no logeado
 currentUserData:BehaviorSubject<any>= new BehaviorSubject<any>({"id": "1",
"correo":"",
"usuario":"",
"login":"",
"message": ""}); //info del usuario por defecto

log: Array<any> = [];


  constructor(private http:HttpClient) {
    //localStorage
    let savedFavs = localStorage.getItem('login') || "[]"
    this.log = JSON.parse(savedFavs)
  }

  /*Aqui cogemos el componente login y las variables de credentials */
login(credentials:any):any{

localStorage.setItem('login', JSON.stringify(credentials.usuario))
 localStorage.setItem('login2', JSON.stringify(credentials.correo))
 localStorage.setItem('login3', JSON.stringify(credentials.login))

 //para meterlo en un JSON pero no funciona
//  return this.http.get('../../../assets/data/data.json').pipe(tap(userData=>{
//  this.currentUserData.next(this.userData);
//  this.currentUser.next(true);
//  }))
}
// get userData():Observable<any>{
// return this.currentUserData.asObservable();
// }
// get userLoginOn():Observable<any>{
//   return this.currentUser.asObservable();
// }
}
