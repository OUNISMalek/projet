import { Component, Inject, inject, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, RequiredValidator} from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit {
  productForm !: FormGroup;
  constructor(
    private formBuilder : FormBuilder , 
    private api : ApiService , 
    private dialogRef : DialogRef,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private DialogRef : MatDialogRef<DialogComponent>
  ) { }
  

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
  updateProduct(){
    this.api.updateProduct(this.productForm.value , this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product updated successfully");
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the product");
      }
    });
  }
}
