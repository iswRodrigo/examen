import { Component, OnInit } from '@angular/core';
import { SwapiservicesService } from '../services/swapiservices.service';
import { People } from './interfaces/sw.interfaces';

@Component({
  selector: 'app-personajesw',
  templateUrl: './personajesw.component.html',
  styleUrls: ['./personajesw.component.css']
})
export class PersonajeswComponent implements OnInit {
  nametxt: String
  nameRes: String
  constructor(private personajeServices : SwapiservicesService) { }
  public peopleSw:People[]=[];
  ngOnInit(): void {
  }
  buscar(){
this.personajeServices.getPersonajeWs(this.nametxt).subscribe(data=>{
  this.peopleSw=data
})
  }
}
