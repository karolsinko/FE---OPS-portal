import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {quiz, zoznamQuizov} from "../../app/models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class QuizLinuxService {
  private apiUrl = 'http://localhost:8080/api/quiz/linux';

  constructor(private http: HttpClient) { }

  getQuizy(): Observable<zoznamQuizov[]> {
    return this.http.get<zoznamQuizov[]>(`${this.apiUrl}`);
  }

  getQuizPodlaId(id : number): Observable<quiz> {
    return this.http.get<quiz>(`${this.apiUrl}/${id}`);
  }

  createQuiz(quiz: quiz): Observable<quiz> {
    return this.http.post<quiz>(`${this.apiUrl}`, quiz);
  }

  updateQuiz(id: number, quiz : quiz): Observable<quiz>{
    return this.http.put<quiz>(`${this.apiUrl}/${id}`, quiz);
  }

  deleteQuiz(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
