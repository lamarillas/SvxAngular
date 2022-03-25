import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ManagerComponent } from '../manager.component';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    const componentFactory = this.cfr.resolveComponentFactory(ManagerComponent);
    this.viewContainerRef.createComponent(componentFactory);
  }

}
