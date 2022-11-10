import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StockComponent } from './stock/stock.component';
import { ChargeComponent } from './charge/charge.component';
import { FactureComponent } from './facture/facture.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gestionstock';

  displayedColumns: string[] = ['code','productName', 'quantity', 'date','category', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router,private dialog : MatDialog , private api : ApiService) {
  }
  ngOnInit(): void {
    this.getAllProducts();
    }
    //dialog of adding product
  openDialog() {
    this.dialog.open(DialogComponent, {
     width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllProducts();
      }
    })
  }
   //dialog of updating product
  openDialoga(){
    this.dialog.open(DialogEditComponent,{
      width: '30%'
    })
  }
  
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      error:(err)=>{
        alert("Error while fetching !!");
      }
    })
  }

  

  editProduct(row : any){
    this.dialog.open(DialogEditComponent,{
      width: '30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllProducts();
      }
    })
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
