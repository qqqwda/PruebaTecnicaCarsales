import { Component, Input } from '@angular/core';
import { CharacterResult } from 'src/app/shared/models/Character';

@Component({
  selector: 'app-character-card-detail',
  templateUrl: './character-card-detail.component.html',
  styleUrls: ['./character-card-detail.component.css']
})
export class CharacterCardDetailComponent {

  @Input()
  item!: CharacterResult;

}
