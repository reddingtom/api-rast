import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuarios: Usuario = new Usuario();
  constructor(private authservice: AuthService){}
  ngOnInit(): void {}
  // Metodo: fazerlogin
  fazerlogin() {
    console.log(this.usuarios);
    this.authservice.acesso(this.usuarios);

  }
}
