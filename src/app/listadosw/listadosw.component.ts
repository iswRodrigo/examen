import { Component, OnInit } from '@angular/core';
import { People } from '../personajesw/interfaces/sw.interfaces';
import { SwapiservicesService } from '../services/swapiservices.service';

@Component({
  selector: 'app-listadosw',
  templateUrl: './listadosw.component.html',
  styleUrls: ['./listadosw.component.css']
})
export class ListadoswComponent implements OnInit {
  public peopleSw:People[]=[];
  public peopleSw2:People[]=[];
  public p3=[];
  constructor(private personajeServices : SwapiservicesService) { }

  ngOnInit(): void {
    this.personajeServices.getAllPeople().subscribe(peopleSw=>{
      this.peopleSw=peopleSw;
      this.personajeServices.getAllPeople2().subscribe(data=>{
        this.peopleSw2=data;
        this.p3=this.peopleSw.concat(this.peopleSw2)

      })
    })
  }

}
