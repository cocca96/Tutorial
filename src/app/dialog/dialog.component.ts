import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form:FormGroup;
  id:number;
  constructor(private fb:FormBuilder,private dialogRef:MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    this.id=data.id;
  }
  ngOnInit(): void {
    this.form=this.fb.group({
      id:[this.id,[]]
    })
  }
  save(){
    this.dialogRef.close(this.form.value);
  }
  close(){
    this.dialogRef.close();
  }
}






