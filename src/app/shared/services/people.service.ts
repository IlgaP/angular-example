import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {PeopleApiResponse} from "../models/people.model";

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  constructor(private http: HttpClient) {
  }

  getPeople(page: number = 1): Observable<PeopleApiResponse> {
    // const url1 = environment.baseUrlStarWars + '/people/?page=' + 1;
    const url = `${environment.baseUrlStarWars}/people/?page=${page}`;
    // const url2 = [
    //   environment.baseUrlStarWars,
    //   '/people/?page=',
    //   1
    // ].join('');

    return this.http.get<PeopleApiResponse>(url);
  }
}
