import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  name?:string;
  animal?:string;
  constructor(public dialog:MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
onDialog():void{
  const dialogRef = this.dialog.open(SaveOverviewDialog, {
    width: '400px',
    data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}
}

export class SaveOverviewDialog{
constructor(public dialogRef: MatDialogRef<SaveDialog>,
  @Inject(MAT_DIALOG_DATA) public data:SaveDialog){}
}
export class SaveDialog{
animal?:string;
name?:string;
}


