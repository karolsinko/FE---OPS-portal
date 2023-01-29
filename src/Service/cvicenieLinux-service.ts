import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {cvicenie, zoznamCviceni, zoznamCviceniLinux} from "../app/models/cvicenie.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class cvicenieLinuxService{
  private apiUrl = 'http://localhost:8080/api/cvicenia/linux';

  constructor(private http: HttpClient) { }

  getCvicenia(): Observable<zoznamCviceniLinux[]> {
    return this.http.get<zoznamCviceniLinux[]>(`${this.apiUrl}`);
  }

  getCviceniePodlaId(id : number): Observable<zoznamCviceniLinux> {
    return this.http.get<zoznamCviceniLinux>(`${this.apiUrl}/${id}`);
  }

  createCvicenie(zoznamCviceniLinux: zoznamCviceniLinux): Observable<cvicenie> {
    return this.http.post<zoznamCviceniLinux>(`${this.apiUrl}`, cvicenie);
  }

  updateCvicenie(id: number, zoznamCviceniLinux : zoznamCviceniLinux): Observable<cvicenie>{
    return this.http.put<zoznamCviceniLinux>(`${this.apiUrl}/${id}`, zoznamCviceniLinux);
  }

  deleteCvicenie(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
