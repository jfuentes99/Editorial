import { Component, OnInit } from '@angular/core';
import { ScrapingService } from 'src/app/services/scraping.service';

@Component({
  selector: 'app-bloque-derecha',
  templateUrl: './bloque-derecha.component.html',
  styleUrls: ['./bloque-derecha.component.css']
})
export class BloqueDerechaComponent implements OnInit{
respuesta:any;
  constructor(private scraping:ScrapingService){}

  ngOnInit() {
    this.scraping.getVehiculos();
    this.respuesta=this.scraping.respuesta;
  }
}
