import {Component} from '@angular/core';
import {CharacterService} from "../../shared/services/character.service";
import {map, Observable} from "rxjs";
import {Character} from "../../shared/models/character.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characters$: Observable<Character[]> = this.characterService.getCharacters().pipe(
    map(charactersResponse => charactersResponse.results)
  );

  constructor(private characterService: CharacterService) { }


}
