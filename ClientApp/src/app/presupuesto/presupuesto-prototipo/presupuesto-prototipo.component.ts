import { Component, OnInit, ViewChild } from '@angular/core';
import { WjFlexGrid } from '@grapecity/wijmo.angular2.grid';
@Component({
  selector: 'app-presupuesto-prototipo',
  templateUrl: './presupuesto-prototipo.component.html',
  styleUrls: ['./presupuesto-prototipo.component.css']
})
export class PresupuestoPrototipoComponent {
  correo = 0;
  data: any[] = [{id: 1, clave: 'PPTO1', descripcion:'Presupuesto Uno'}];
  @ViewChild('flex') flex: WjFlexGrid | undefined;

  //constructor() { }

}
