import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {quiz, zoznamQuizov} from "../app/models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService{
  private apiUrl = 'http://localhost:8080/api/quiz';

  constructor(private http: HttpClient) { }

  getQuizy(): Observable<zoznamQuizov[]> {
    return this.http.get<zoznamQuizov[]>(`${this.apiUrl}`);
  }

  getQuiz(id : number): Observable<quiz> {
    return this.http.get<quiz>(`${this.apiUrl}/${id}`);
  }
}
