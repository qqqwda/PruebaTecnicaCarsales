import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, CharacterResult } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(query:String='', page:number=1):Observable<Character>{
    const filter = `${environment.baseUrlAPI}character/?name=${query}&page=${page}`;
    return this.http.get<Character>(filter);
  }

  getCharacter(id:number):Observable<CharacterResult>{
    const filter = `${environment.baseUrlAPI}character/${id}`;
    return this.http.get<CharacterResult>(filter).pipe(catchError(err => of('error', err)));

  }

}

