import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) {}

  acesso(user: Usuario){
    if (user.login === 'adm@senac.com.vasco' && user.senha === '123456' ) {
      this.usuarioAutenticado = true;
      alert("Bem Vindos!! Você será direcionado para o painel de controle.");
      this.router.navigate(['painel'])
    } else {
      this.usuarioAutenticado = false;
      alert("Login e senha inválidos, digite novamente!");
    }
  }

}
