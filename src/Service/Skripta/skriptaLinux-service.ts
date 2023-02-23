import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {skripta, zoznamSkriptLinux} from "../../app/models/skripta.model";

@Injectable({
  providedIn: 'root'
})
export class SkriptaLinuxService {
  private apiUrl = 'http://localhost:8080/api/skripta/linux';

  constructor(private http: HttpClient) { }

  getSkripta(): Observable<zoznamSkriptLinux[]> {
    return this.http.get<zoznamSkriptLinux[]>(`${this.apiUrl}`);
  }

  getSkriptPodlaId(id : number): Observable<skripta> {
    return this.http.get<skripta>(`${this.apiUrl}/${id}`);
  }

  createSkript(skripta: skripta): Observable<skripta> {
    return this.http.post<skripta>(`${this.apiUrl}`, skripta);
  }

  updateSkript(id: number, skripta : skripta): Observable<skripta>{
    return this.http.put<skripta>(`${this.apiUrl}/${id}`, skripta);
  }

  deleteSkript(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
