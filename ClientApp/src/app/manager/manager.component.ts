import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  styles: [
    `
    div[fxLayout] {
      margin-top: 32px;
    }
  `,
    `
    .active-link {
      font-weight: bold;
      border-bottom: 2px solid #005005;
    }
  `,
  ],
  template: `
    `
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
