import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-add-hero.component.html',
  styleUrls: ['./form-add-hero.component.css']
})
export class FormAddHeroComponent implements OnInit {
  hero=new Hero();
  
  
  constructor(private heroService: HeroService, private router: Router) { }


  ngOnInit(): void {
   
  }
  save(heroForm: NgForm){
    this.heroService.addHero(heroForm.value).subscribe({
      next: data=>{console.log(data);
        this.onBack();
      }
    })
  }
  
   onBack(): void {
    this.router.navigate(['/heroes']);
  }


}
