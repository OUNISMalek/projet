import { Component, Inject, inject, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, RequiredValidator} from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
productForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder , 
    private api : ApiService , 
    private dialogRef : MatDialogRef<DialogComponent>,
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName:['',Validators.required],
      category:['',Validators.required],
      quantity:['',Validators.required],
      code:['',Validators.required],
      comment:['',Validators.required],
      date : ['',Validators.required],
    })
   }
   addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully");
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the product");
        }
      });
    }
    }
  }
