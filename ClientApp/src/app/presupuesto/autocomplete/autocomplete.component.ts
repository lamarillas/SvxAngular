import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const statesWithFlags: { id: number, clave: string, nombre: string }[] = [
  { 'id': 7183, 'clave': '027085', 'nombre': 'DECORACION C. M. GALILEA' },
  { 'id': 7184, 'clave': '027086', 'nombre': 'DECORACION C. M. SAN MILLAN' },
  { 'id': 7185, 'clave': '027088', 'nombre': 'DECORACION C. M. TREVIANA' },
  { 'id': 7186, 'clave': '027089', 'nombre': 'DECORACION C. M. EZCARAY PLUS' },
  { 'id': 7187, 'clave': '025185', 'nombre': 'DECORACION C.M. BARCELONA B' },
  { 'id': 7188, 'clave': '025186', 'nombre': 'DECORACION C. M. VALLADOLID' },
  { 'id': 7189, 'clave': '025188', 'nombre': 'DECORACION C. M. SALAMANCA' },
  { 'id': 7190, 'clave': '025189', 'nombre': 'DECORACION C. M. BILBAO' },
  { 'id': 7191, 'clave': '025187', 'nombre': 'DECORACION C.M. LEZA' }
];

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent  {

  public model: any;

  search: OperatorFunction<string, readonly { id: number, clave: string, nombre: string }[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : statesWithFlags.filter(v => v.nombre.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  
  formatter = (x: { name: string }) => x.name;

  //constructor() { }
}
