import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {skripta, zoznamSkript} from "../app/models/skripta.model";

@Injectable({
  providedIn: 'root'
})
export class SkriptaService{
  private apiUrl = 'http://localhost:8080/api/skripta';

  constructor(private http: HttpClient) { }

  getSkripta(): Observable<zoznamSkript[]> {
    return this.http.get<zoznamSkript[]>(`${this.apiUrl}`);
  }

  getSkript(id : number): Observable<skripta> {
    return this.http.get<skripta>(`${this.apiUrl}/${id}`);
  }
}
