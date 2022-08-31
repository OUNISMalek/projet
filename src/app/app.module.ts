import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { ChargeComponent } from './charge/charge.component';
import { FactureComponent } from './facture/facture.component';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    ChargeComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'stock', component: StockComponent},
      { path: 'charge', component: ChargeComponent},
      { path: 'facture', component: FactureComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
