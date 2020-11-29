import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-more-details',
  templateUrl: './hero-more-details.component.html',
  styleUrls: ['./hero-more-details.component.css']
})
export class HeroMoreDetailsComponent implements OnInit {
   scoreThisYear?:number;
   scoreLastYear?:number;
   hero?:Hero;
  constructor(private heroService:HeroService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    if(id){
      this.getHero(+id);
    }
  }
  getHero(id:number):void{
    this.heroService.getHeroMock(id).subscribe({
      next: h=>this.hero=h
    })
  }

}
