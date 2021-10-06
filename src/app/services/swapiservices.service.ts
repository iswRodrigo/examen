import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { People, Swapi } from '../personajesw/interfaces/sw.interfaces';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiservicesService {
  private url:string="https://swapi.dev/api"
  constructor(private http:HttpClient) { }

  getPersonajeWs(name:String):Observable<People[]>{
    return this.http.get<Swapi>(`${this.url}/people/?search=${name}`).pipe(
      map(this.swsmall)
    )
  }
  getAllPeople():Observable<People[]>{
    return this.http.get<Swapi>(`${this.url}/people/`)
    .pipe(
      map(this.swsmall)
    )
  }
  getAllPeople2():Observable<People[]>{
    return this.http.get<Swapi>(`${this.url}/people/?page=2`)
    .pipe(
      map(this.swsmall)
    )
  }
  getAllPeople3():Observable<People[]>{
    return this.http.get<Swapi>(`${this.url}/people/?page=3`)
    .pipe(
      map(this.swsmall)
    )
  }
  getAllPeople4():Observable<People[]>{
    return this.http.get<Swapi>(`${this.url}/people/?page=4`)
    .pipe(
      map(this.swsmall)
    )
  }
  private swsmall(resp: Swapi):People[]{
    const swlist:People[]=resp.results.map(sw=>{
      const urlArr=sw.url.split('/');
      const id=urlArr[5];
      return{
        id,
        name:sw.name,
        mass: sw.mass,
        birth_year:sw.birth_year,
        gender:sw.gender,
        eye_color:sw.eye_color
      }
    })
    return swlist;
  }
}
