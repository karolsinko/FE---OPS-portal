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

  getCviceniePodlaJazyku(language: string,id : number): Observable<cvicenie> {
    return this.http.get<cvicenie>(`${this.apiUrl}/${language}/${id}`);
  }

  getCvicenia(): Observable<zoznamCviceni[]> {
    return this.http.get<zoznamCviceni[]>(`${this.apiUrl}`);
  }

  getCviceniePodlaId(id : number): Observable<cvicenie> {
    return this.http.get<cvicenie>(`${this.apiUrl}/${id}`);
  }

  createCvicenie(cvicenie: cvicenie): Observable<cvicenie> {
    return this.http.post<cvicenie>(`${this.apiUrl}`, cvicenie);
  }

  updateCvicenie(id: number, cvicenie : cvicenie): Observable<cvicenie>{
    return this.http.put<cvicenie>(`${this.apiUrl}/${id}`, cvicenie);
  }

  deleteCvicenie(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
