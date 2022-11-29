import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(query:String='', page:number=1):Observable<Character>{
    const filter = `${environment.baseUrlAPI}character/?name=${query}&page=${page}`;
    console.log(filter);
    return this.http.get<Character>(filter);
  }
}
