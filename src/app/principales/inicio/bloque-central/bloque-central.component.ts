import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bloque-central',
  templateUrl: './bloque-central.component.html',
  styleUrls: ['./bloque-central.component.css']
})
export class BloqueCentralComponent implements OnInit {
  today: Date = new Date();
  pipe = new DatePipe('es-ES');
  todayWithPipe=null;
  today2 = this.pipe.transform(Date.now(), 'ddddd, MMMM d, a');
  ngOnInit(): void {

  }
constructor(){}



//Bloque mis oposiciones, boton Vistas en GRID O EN CAJAS
  // projectsList = document.querySelector('.project-boxes');
  // listView(){
  //   let listView = document.querySelector('.list-view')?.classList.remove('active');
  //   let gridView = document.querySelector('.grid-view')?.classList.remove('active');

  //  let projectsList.classList.remove('jsGridView');
  //   let projectsList.classList.add('jsListView');
  // }


  // gridView.addEventListener('click', function () {
  //   gridView.classList.add('active');
  //   listView.classList.remove('active');
  //   projectsList.classList.remove('jsListView');
  //   projectsList.classList.add('jsGridView');
  // });
  //Fin seccion Boton Vistas grid o cajas


}
