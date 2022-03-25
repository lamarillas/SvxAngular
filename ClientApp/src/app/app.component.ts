import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
    .app-container {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .app-is-mobile .app-toolbar {
      position: fixed;
      z-index: 2;
    }
    .app-sidenav-container {
      flex: 1;
    }
    .app-is-mobile .app-sidenav-container {
      flex: 1 0 auto;
    }
    mat-sidenav {
      width: 200px;
    }
    .image-cropper {
      width: 40px;
      height: 40px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      margin-top: -8px;
    }
  `,
  ]
})
export class AppComponent {
  title = 'SvxAngular';
  //private subs = new SubSink

}
