import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character, CharacterResult } from 'src/app/shared/models/Character';
import { CharacterService } from 'src/app/shared/service/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  public characters: CharacterResult[] = [];
  public elements = [1];

  public page: number = 1;
  public query: string = '';
  public pagesAvailables:number = 1;

  constructor(private characterService: CharacterService) {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.subscriptions.push(this.characterService.getCharacters().subscribe(async (response: Character) => {
      this.pagesAvailables = response.info.pages;
      this.characters = response.results;
    }));
  }

  /**
   * Actualiza los personajes onKeyPress
   * @param event 
   */
  onKeypressEvent(event: any) {

    this.query = event.target.value;
    this.subscriptions.push(this.characterService.getCharacters(this.query).subscribe(async (response: Character) => {
      this.pagesAvailables = response.info.pages;
      this.characters = response.results;
    }));

  }

  /**
   * Obtiene más información a medida que llega al final del scroll
   */
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.page++;
      if(this.page > this.pagesAvailables){
        //No existen más páginas para mostrar!
        return;
      }
      //Carga más información trayendo next page
      this.subscriptions.push(this.characterService.getCharacters(this.query,this.page).subscribe(async (response: Character) => {
        response.results.forEach(result => {
          this.characters.push(result);
        });
      }));
    }
  }
}
