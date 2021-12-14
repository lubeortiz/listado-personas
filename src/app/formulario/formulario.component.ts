import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoginService } from '../LoginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LoginService]
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada  = new EventEmitter<Persona>(); // el hijo le manda el objeto al padre

  // nombreInput: string = '';
  // apellidoInput: string = '';

  agregarPersona(nombreRef: string, apellidoRef: string) {
    let persona1 = new Persona(nombreRef, apellidoRef);
    // this.personas.push(persona1);
    // this.loginService.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + " " + persona1.apellido);
    // this.personaCreada.emit(persona1); // propaga información del componente hijo al componente padre
    this.personsasService.agregarPersona(persona1);
  }

  constructor(private loginService:LoginService, private personsasService: PersonasService) {
    this.personsasService.saludar.subscribe(
      (indice: number) => alert("El ínidice es: " + (indice + 1))
    );
  }

  ngOnInit(): void {}
}

/* al hacer click sobre el botón de editar, se emite el índice que se ha seleccionado y
a través del servicio personasservice se emite el saludo, nos suscribimos a la emision del
mensaje, recibimos el indice y mandamos una alerta donde indicamos el indice que se ha seleccionado */