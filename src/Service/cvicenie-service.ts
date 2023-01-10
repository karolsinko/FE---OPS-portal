import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {cvicenie, zoznamUloh} from "../app/models/cvicenie.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CvicenieService{
  private apiUrl = 'http://localhost:8080/api/cvicenie';

  constructor(private http: HttpClient) { }

  getCvicenia(): Observable<zoznamUloh[]> {
    return this.http.get<zoznamUloh[]>(`${this.apiUrl}`);
  }

  getCvicenie(ulohaId: number): Observable<cvicenie> {
    return this.http.get<cvicenie>(`${this.apiUrl}/${ulohaId}`);
  }

}
