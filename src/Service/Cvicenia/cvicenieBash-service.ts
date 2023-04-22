import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {zoznamCviceniBash} from "../../app/models/cvicenie.model";

@Injectable({
  providedIn: 'root'
})
export class cvicenieBashService {
  private apiUrl = 'http://labs.fpv.umb.sk:8082/api/cvicenia/bash';

  constructor(private http: HttpClient) {
  }

  getCvicenia(): Observable<zoznamCviceniBash[]> {
    return this.http.get<zoznamCviceniBash[]>(`${this.apiUrl}`);
  }

  getCviceniePodlaId(id: number): Observable<zoznamCviceniBash> {
    return this.http.get<zoznamCviceniBash>(`${this.apiUrl}/${id}`);
  }

  createCvicenie(zoznamCviceniBash: zoznamCviceniBash): Observable<zoznamCviceniBash> {
    return this.http.post<zoznamCviceniBash>(`${this.apiUrl}`, zoznamCviceniBash);
  }

  updateCvicenie(id: number, zoznamCviceniBash: zoznamCviceniBash): Observable<zoznamCviceniBash> {
    return this.http.put<zoznamCviceniBash>(`${this.apiUrl}/${id}`, zoznamCviceniBash);
  }

  deleteCvicenie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
