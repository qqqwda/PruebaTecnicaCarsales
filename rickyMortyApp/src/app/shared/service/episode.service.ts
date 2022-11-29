import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Episode } from '../models/Episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {


  constructor(private http: HttpClient) { }

  getEpisodes(query:String='', page:number=1):Observable<Episode>{
    const filter = `${environment.baseUrlAPI}/episode/?name=${query}&page=${page}`;
    return this.http.get<Episode>(filter);
  }
}
