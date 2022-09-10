import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({  
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy , OnChanges {

@Input() nombre: String = "Anónimo";
@Output() mensajeEmitter: EventEmitter<String> = new EventEmitter<String>();

/*  Input de arriba hacia abajo, componente padre al componente hijo */

/* Output (Sirve para gestionar eventos)  Ocurren en el hijo y ejecutan algo en el padre */
  constructor() { }

  
    ngOnInit(): void {
      // instrucciones previas a la  renderización del componente
      console.log("ngOnInit del componente Saludo.");
    }

    ngOnChanges(changes: SimpleChanges): void {
    console.log("NgOnChanges el componente recibe cambios .");
    console.log("Valor Anterior: ", changes.nombre.previousValue);
    console.log("Valor Nuevo: ", changes.nombre.currentValue);
  }
  
  ngOnDestroy(): void {
    console.log('NgDestroy el elemento va a desaparecer.');
  }

  /* 
  *Ejemplo para gestionar un evento de tipo click en el DOM
  */


  /* Ejemplo para gestionar un  evento tipo click en el DOM y enviar un texto al 
  componente padre. */
 enviarMensajeAlPadre(): void{
   /*  alert(`hola, ${this.nombre}. Alerta despachada desde un click de botón.`); */
  
   this.mensajeEmitter.emit(`hola, ${this.nombre}. Alerta despachada desde un click de botón.`)
  
  }

}

// Orden de ciclo de vida de los componentes
// * 1. ngOnchanges
// * 2. ngOnInit
//   3. ngAfterContentInit
//   4. ngAfterContentChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContentChecked
// * 8. ngOnDestroy
