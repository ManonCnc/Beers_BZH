import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  home: MenuItem | undefined;

  constructor() {}

  ngOnInit(): void {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}