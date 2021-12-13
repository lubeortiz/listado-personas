import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada  = new EventEmitter<Persona>(); // el hijo le manda el objeto al padre

  // nombreInput: string = '';
  // apellidoInput: string = '';

  agregarPersona(nombreRef: string, apellidoRef: string) {
    let persona1 = new Persona(nombreRef, apellidoRef);
    // this.personas.push(persona1);
    this.personaCreada.emit(persona1); // propaga información del componente hijo al componente padre
  }

  constructor() {}

  ngOnInit(): void {}
}
