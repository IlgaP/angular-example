import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../../shared/services/character.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Character} from "../../../shared/models/character.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character$?: Observable<Character>;

  constructor(private characterService: CharacterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.character$ = this.characterService.getCharacter(id)
      }
    })
  }

}
