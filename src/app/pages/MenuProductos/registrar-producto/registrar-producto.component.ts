import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.scss']
})
export class RegistrarProductoComponent implements OnInit {

  seleccionado:string;
  lista:string[]=['hola','que','tal', 'estas'];
  constructor() { }

  ngOnInit(): void {
  }

}
