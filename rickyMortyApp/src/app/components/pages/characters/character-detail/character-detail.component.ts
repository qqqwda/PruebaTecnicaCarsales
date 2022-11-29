import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterResult } from 'src/app/shared/models/Character';
import { CharacterService } from 'src/app/shared/service/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit{
  private subscriptions: Subscription[] = [];
  public character!: CharacterResult;
  public isLoading:boolean = true;
  constructor(private route: ActivatedRoute,
    private characterService: CharacterService){}

  ngOnInit(): void {
    this.subscriptions.push(this.route.params.subscribe(params => {

    let id:number = params['id']; //get value of id
    this.getCharacterDetails(id);
  }));
  }

  /**Obtiene el detalle del personaje por ID */
  getCharacterDetails(id:number):void{
    this.characterService.getCharacter(id).subscribe(async (response:CharacterResult) =>{
      this.character = response;
      this.isLoading = false;
    });
  }

}
