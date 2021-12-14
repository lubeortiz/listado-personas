import { Persona } from "./persona.model";
import { LoginService } from './LoginService.service';
import { EventEmitter, Injectable } from "@angular/core";

@Injectable() /* como queremos inyectar el LoginService dentro de PersonasService, 
especificamos en la clase en la cual queremos inyectar el ServiceWorkerRegistration, 
agregamos el decorador Injectable, usar un servicio dentro de otro servicio */

export class PersonasService {
    personas: Persona[] = [];

    constructor(private loginService: LoginService){}

    agregarPersona(persona: Persona) {
        this.loginService.enviaMensajeAConsola("Agregar persona: " + persona.nombre)
        this.personas.push(persona);
    }

    saludar = new EventEmitter<number>();
}
/* estamos obteniendo la informacion de persosnas desde un servicio llamado
personas service, desde nuestra clase app.component.ts inyectamos el servicio
e inicializamos un atributo que inicializamos como arreglo vacio, para que 
desde la plantilla accedamos a cada uno de los elementos de tipo persona*/

/* login lo vamos a hacer desde personasService, la informacion va a estar 
centralizada en el método agregarPersona */