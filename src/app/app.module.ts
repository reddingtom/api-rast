import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Importar o service
import { ServicosService } from './service/servicos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [AppComponent, AlunosComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule, ServicosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
