import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../service/servicos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  constructor(private alunoService: ServicosService) {}

  ngOnInit(): void {}

  Listar() {
    this.alunoService.listarAlunos().subscribe();
  }
}
