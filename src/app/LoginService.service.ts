export class LoginService {
    enviaMensajeAConsola(mensaje:string) {
        console.log(mensaje);
    }
}
/* inyectamos el servicio en formulario.component.ts y utilizamos
el método que va a enviar a consola el mensaje que enviamos desde
el componente */