import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicosService {
  // !!! ATENÇÃO : SEMPRE COLOCAR BARRA NA URL !!!

  private url: string = 'http://localhost:3000/alunos/';
  constructor(private http: HttpClient) {}

  listarAlunos(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
