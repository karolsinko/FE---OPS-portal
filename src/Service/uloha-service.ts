import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {cvicenie, zoznamUloh} from "../app/models/cvicenie.model";

@Injectable({
  providedIn: 'root'
})
export class UlohaService {

  private apiUrl = 'http://localhost:8080/api/uloha';

  constructor(private http: HttpClient) { }

  getUlohy(): Observable<zoznamUloh[]> {
    return this.http.get<zoznamUloh[]>(`${this.apiUrl}`);
  }

  getUloha(ulohaId: number): Observable<cvicenie> {
    return this.http.get<cvicenie>(`${this.apiUrl}/${ulohaId}`);
  }

  createOsoba(uloha: cvicenie): Observable<cvicenie> {
    return this.http.post<cvicenie>(`${this.apiUrl}`, uloha);
  }

  updateOsoba(ulohaId: number, uloha: cvicenie): Observable<cvicenie>{
    return this.http.put<cvicenie>(`${this.apiUrl}/${ulohaId}`, uloha);
  }

  deleteOsoba(osobaId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${osobaId}`);
  }

}
