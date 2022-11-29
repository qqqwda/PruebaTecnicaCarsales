import { Component, Input, OnInit } from '@angular/core';
import { CharacterResult } from 'src/app/shared/models/Character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})


export class CharacterCardComponent{
  @Input()
  item!: CharacterResult;

}
