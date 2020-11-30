import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero=new Hero();
  heroes: Hero[] = [];

  

   hero: Hero = {
    id: 1,
     name: 'Windostorm',
     scoreLast10Years:[]=[],
     description:'', 
     imgUrl:''
     


   }
  constructor(private heroService: HeroService,private router:Router) { }
  ngOnInit(): void {
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.getHeroesService();
    console.log(this.heroes)
  }

  onSelectedHero(hero: Hero): void {
    this.selectedHero = hero;
    

  }
  goToDetails():void{
    this.router.navigate(['/details',this.selectedHero.id]);
  }

  getHeroesService():void{
    this.heroService.getHeroService().subscribe({
      next: (heroes) => {this.heroes = heroes
      }
    })
  
  }
 
  deleteHero(hero1:Hero):void{
    this.router.navigate(['/heroes'])
    this.heroService.deleteHero(hero1.id).subscribe({
      next: data=> {console.log(data);
        this.onBack();}
    })
  }

  getHero(id: number): void {
 this.heroService.getHeroMock(id).subscribe();
  }
  onBack(): void {
    this.router.navigate(['/heroes']);
  }
  // incrementScore(){
  //   if(this.hero ){
  //   this.hero.scoreLastYear ++;
  //   console.log("scoreLastYear: " + this.hero.scoreLastYear);
  //   }
  // }

}




