import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlunoModel } from '../alunos/aluno.model';

@Injectable({
  providedIn: 'root',
})
export class ServicosService {
  //!!! ATENÇÃO : SEMPRE COLOCAR BARRA NA URL !!!

  private url: string = 'http://localhost:3000/alunos/';
  constructor(private http: HttpClient) {}

  listarAlunos(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  cadastrarAlunos(aluno: AlunoModel): Observable<any> {
    return this.http.post(`${this.url}`, aluno);
  }
  atualizar(id: any, aluno: AlunoModel): Observable<any> {
    return this.http.put(`${this.url}`.concat(id), aluno);
  }
  excluir(id: any) {
    return this.http.delete(`${this.url}`.concat(id));
  }
}
