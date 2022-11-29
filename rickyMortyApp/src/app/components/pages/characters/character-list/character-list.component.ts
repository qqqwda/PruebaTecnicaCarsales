import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character, CharacterResult } from 'src/app/shared/models/Character';
import { CharacterService } from 'src/app/shared/service/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy{
   subscriptions: Subscription[] = [];
   public characters: CharacterResult[] = [];

   constructor(private characterService: CharacterService) {

  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.subscriptions.push(this.characterService.getCharacters().subscribe(async (response: Character) => {
      this.characters = response.results;
    }));
  }

  /**
   * Actualiza los personajes onKeyPress
   * @param event 
   */
   onKeypressEvent(event: any) {
    
     let query = event.target.value;
     console.log(query);
    this.subscriptions.push(this.characterService.getCharacters(query).subscribe(async (response: Character) => {
      //this.updateVariables(response);
      this.characters = response.results;
    }));
    //this.query = query;

  }
}
