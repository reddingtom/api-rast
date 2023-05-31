import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';
import { AlunoModel } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  aluno: AlunoModel = new AlunoModel();

  alunos: Array<any> = new Array();

  constructor(private alunoService: ServicosService) {}

  ngOnInit(): void {
    this.Listar();
  }

  Listar() {
    this.alunoService.listarAlunos().subscribe(
      (alunos) => {
        this.alunos = alunos;
      },
      (err) => {
        console.log('Erro ao listar alunos', err);
      }
    );
  }
  Cadastrar() {
    console.log(this.aluno);
    this.alunoService.cadastrarAlunos(this.aluno).subscribe(
      (a) => {
        this.aluno = new AlunoModel();
        this.Listar();
      },
      (err) => {
        console.log('Erro ao cadastrar alunos', err);
      }
    );
  }
  Atualizar(id: number) {
    console.log(this.aluno);
    this.alunoService.atualizar(id, this.aluno).subscribe(
      (a) => {
        this.aluno = new AlunoModel();
        this.Listar();
      },
      (err) => {
        console.log('Erro ao cadastrar alunos', err);
      }
    );
  }
  Excluir(id: number) {
    console.log(this.aluno);
    this.alunoService.excluir(id).subscribe(
      (a) => {
        this.aluno = new AlunoModel();
        this.Listar();
      },
      (err) => {
        console.log('Erro ao excluir alunos', err);
      }
    );
  }
}
