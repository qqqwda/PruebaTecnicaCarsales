import { query } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Episode, EpisodeResult } from 'src/app/shared/models/Episode';
import { EpisodeService } from 'src/app/shared/service/episode.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit, OnDestroy{

  public episodes: EpisodeResult[] = [];
  public subscriptions:Subscription[] = [];

  constructor(private episodeService:EpisodeService) {

   }

   ngOnInit(): void {
    /**OnInit, obtiene todos los episodios */
    this.subscriptions.push(this.episodeService.getEpisodes().subscribe(async (response: Episode) => {
      this.episodes = response.results;
    }));
  }

  /**
   * Actualiza los episodios onKeyPress
   * @param event 
   */
  onKeypressEvent(event: any){
    /**OnInit, obtiene todos los episodios */
    this.subscriptions.push(this.episodeService.getEpisodes(event.target.value).subscribe(async (response: Episode) => {
      this.episodes = response.results;
    }));
 
 }

 ngOnDestroy() {
  this.subscriptions.forEach(
    subscription => subscription.unsubscribe()
  );
}
 
  
  
}
