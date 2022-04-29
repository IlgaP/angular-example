import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../shared/services/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peopleApiResponse$ = this.peopleService.getPeople();
  currentPage = 1;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {

  }

  refreshPeople(page: number): void {
    this.currentPage = page;
    this.peopleApiResponse$ = this.peopleService.getPeople(page);
  }

}
