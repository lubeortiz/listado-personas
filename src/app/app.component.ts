import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './LoginService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [LoginService]
})

export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];
  
/*   personaAgregada(persona: Persona) {
    // this.personas.push(persona);
    // this.loginService.enviaMensajeAConsola("Persona: " + persona.apellido + " " + persona.nombre)
    this.personasService.agregarPersona(persona);
  } */

  constructor(private loginService:LoginService, 
              private personasService:PersonasService) {}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
}

/*
app: padre
persona: hijo
formulario: hijo

formulario le manda persona a app
app le manda persona y el índice a persona

desde formulario, una vez que se presiona el 
botón se llama al método agregarPersona(), 
una vez que se llama ese método se emite un evento
y este evento se reporta a app, app escucha el
evento por medio de event binding, y llama al método 
personaAgregada() pasando el nuevo objeto de tipo Persona
que se ha creado por medio del parámetro $event, dentro 
del componente padre se llama el método personaAgregada(),
se recibe el nuevo objeto y se agrega al arreglo de objetos 
de tipo Persona
*/