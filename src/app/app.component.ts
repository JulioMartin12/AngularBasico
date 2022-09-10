import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';   
  usuario = '@Anonimo';

  /* Esta función se ejecutará cuando en el hijo (saludo component) se pulse un botón */
  recibirMensajeDelHijo(evento: String){
    alert(evento);
  }
}
