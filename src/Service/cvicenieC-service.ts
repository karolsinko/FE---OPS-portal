import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {cvicenie, zoznamCviceniC} from "../app/models/cvicenie.model";

@Injectable({
  providedIn: 'root'
})
export class CvicenieCService{
  private apiUrl = 'http://localhost:8080/api/cvicenia/c';

  constructor(private http: HttpClient) { }

  getCvicenia(): Observable<zoznamCviceniC[]> {
    return this.http.get<zoznamCviceniC[]>(`${this.apiUrl}`);
  }

  getCviceniePodlaId(id : number): Observable<zoznamCviceniC> {
    return this.http.get<zoznamCviceniC>(`${this.apiUrl}/${id}`);
  }

  createCvicenie(zoznamCviceniC: zoznamCviceniC): Observable<cvicenie> {
    return this.http.post<zoznamCviceniC>(`${this.apiUrl}`, cvicenie);
  }

  updateCvicenie(id: number, zoznamCviceniC : zoznamCviceniC): Observable<cvicenie>{
    return this.http.put<zoznamCviceniC>(`${this.apiUrl}/${id}`, zoznamCviceniC);
  }

  deleteCvicenie(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}