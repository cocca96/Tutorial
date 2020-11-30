import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-add-hero.component.html',
  styleUrls: ['./form-add-hero.component.css']
})
export class FormAddHeroComponent implements OnInit {
  hero=new Hero();
  error:string;
  heroForm:FormGroup;
  
  
  constructor(private fb:FormBuilder,private dialog:MatDialog,private heroService: HeroService, private router: Router) { }


  ngOnInit(): void {
    this.heroForm=this.fb.group({
      name:['',[Validators.required]],
      id:['',Validators.required]
    })
   
  }
  save1(){
    this.heroService.addHero(this.heroForm.value).subscribe({
      next: data=> {this.onBack();},
    
    error: e=> this.openDialog()
    });
  }
  save(heroForm: NgForm){
    this.heroService.addHero(heroForm.value).subscribe({
      next: data=>{console.log("STAI CERCANDO QUESTO"+heroForm.value);
        this.onBack();
        
      },
      error: e=> this.openDialog()
    })
  }
  
   onBack(): void {
    this.router.navigate(['/heroes']);
  }
  openDialog(){
    const dialogConfig=new MatDialogConfig();

    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;

    dialogConfig.data={
      id:1,
      title:''
    }
    this.dialog.open(DialogComponent,dialogConfig);
    const dialogRef=this.dialog.open(DialogComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(data=> console.log("Dialog utput:", data))
  }


}
