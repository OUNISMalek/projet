import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StockComponent } from './stock/stock.component';
import { ChargeComponent } from './charge/charge.component';
import { FactureComponent } from './facture/facture.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestionstock';
  constructor(private router: Router) {
  }
}
