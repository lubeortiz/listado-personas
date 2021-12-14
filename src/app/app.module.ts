import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginService } from './LoginService.service';
import { PersonasService } from './personas.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoginService, PersonasService], //definir el servicio de manera global, en una misma instancia, para no tener que ponerlo en cada componente
  bootstrap: [AppComponent]
})
export class AppModule { }
