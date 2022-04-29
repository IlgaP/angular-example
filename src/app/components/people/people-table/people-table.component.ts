import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../../../shared/models/people.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit{
  @Input()
  people?: Person[] = [];

  @Input()
  collectionSize = 0;

  @Output()
  pageChangeEvent = new EventEmitter<number>();

  @Input()
  page = 1;

  columnTitles = [
    'Name',
    'Height',
    'Mass',
    'Hair color',
    'Skin Color',
    'Eye color',
    'Birth year',
    'Gender',
    'Created'
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const page = params['page'];

      if (page) {
        this.page = Number(page);

      }
    });
  }

  onPageChange(): void {
    this.setQueryParams();
    this.pageChangeEvent.emit(this.page);
  }

  setQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page:this.page
      }
    })
  }


}
