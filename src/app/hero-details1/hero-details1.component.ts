import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details1',
  templateUrl: './hero-details1.component.html',
  styleUrls: ['./hero-details1.component.css']
})
export class HeroDetails1Component implements OnInit {
  hero=new Hero();
  heroForm!:FormGroup;
  details1:string;
  chosenValue: number = 1;
  
  constructor(private heroService:HeroService,private route:ActivatedRoute, private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id){
      this.getHero(+id);
    }
    this.heroForm=this.fb.group({
      name:['',[Validators.required]],
      description:[''],
      imgUrl:['']
     // details: this.fb.array([this.buildDetails()])

    })
    
  }

    // buildDetails(): FormGroup {
    //   return this.fb.group({
    //     description: '',
    //     urlImg: ''
        
    //   });
    // }
    // get details(): FormArray {
    //   return this.heroForm.get('details') as FormArray;
    // }

  
  modify():void{
    this.heroService.updateHero(this.hero).subscribe({
      next: data=>{console.log(data);
        this.router.navigate(['/heroes']);
      }
    })

  }
  getHero(id:number):void{
    this.heroService.getHeroMock(id).subscribe({
      next: hero1=>{this.hero=hero1;
      console.log("hero in details1:"+this.hero)}
    })
  }
  addDetails() {
    //this.details.push(this.buildDetails());
    this.details1="true";
    

  }
  selectOnChange(){
    console.log("alore del select"+this.chosenValue)
    switch (+this.chosenValue) {
      case 1:
        this.hero.imgUrl="assets/hero1.png"
        break;
      case 2:
        this.hero.imgUrl="assets/hero2.png"
        console.log("immagine diversa")
        break;
      case 3:
        this.hero.imgUrl=""
        break;
    }
  }

}
