import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {cvicenie, zoznamCviceni} from "../app/models/cvicenie.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CvicenieService{
  private apiUrl = 'http://localhost:8080/api/cvicenia';

  constructor(private http: HttpClient) { }

  getCvicenia(): Observable<zoznamCviceni[]> {
    return this.http.get<zoznamCviceni[]>(`${this.apiUrl}`);
  }

  getCvicenie(id : number): Observable<cvicenie> {
    return this.http.get<cvicenie>(`${this.apiUrl}/${id}`);
  }

}
