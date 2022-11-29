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
export class EpisodeListComponent implements OnInit, OnDestroy {

  public episodes: EpisodeResult[] = [];
  public subscriptions: Subscription[] = [];
  public episode: Episode | undefined;

  public next: String | undefined;
  public prev: String | undefined;
  public query: String | undefined;
  public current: number = 1;

  constructor(private episodeService: EpisodeService) {

  }

  /**
   * Se inicializa mostrando todos los episodios
   */
  ngOnInit(): void {
    /**OnInit, obtiene todos los episodios */
    this.subscriptions.push(this.episodeService.getEpisodes().subscribe(async (response: Episode) => {
      this.updateVariables(response);
    }));
  }

  /**
   * Actualiza los episodios onKeyPress
   * @param event 
   */
  onKeypressEvent(event: any) {
    /**OnInit, obtiene todos los episodios */
    let query = event.target.value;
    this.subscriptions.push(this.episodeService.getEpisodes(query).subscribe(async (response: Episode) => {
      this.updateVariables(response);
    }));
    this.query = query;

  }

  /**
   * OnDestroy, destruye suscripciones
   */
  ngOnDestroy() {
    this.subscriptions.forEach(
      subscription => subscription.unsubscribe()
    );
  }

  /**
   * Actualiza variables
   * @param response 
   */
  updateVariables(response: Episode, page:number = 1): void {
    this.episode = response;
    this.episodes = response.results;

    this.next = response.info.next;
    this.prev = response.info.prev;
    this.current = page;
  }

  /**
   * Cambia página
   */
   changePage(page:number){
    const newCurrent = this.current+page;
    this.subscriptions.push(this.episodeService.getEpisodes(this.query,newCurrent).subscribe(async (response: Episode) => {
      this.updateVariables(response, newCurrent);
    }));
   }



}
