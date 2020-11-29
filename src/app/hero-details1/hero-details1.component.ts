import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private heroService:HeroService,private route:ActivatedRoute, private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id){
      this.getHero(+id);
    }
    this.heroForm=this.fb.group({
      name:['',[Validators.required]],

    })
    
  }
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

}
