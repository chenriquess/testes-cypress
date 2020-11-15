import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
