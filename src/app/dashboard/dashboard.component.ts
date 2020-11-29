import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[]=[];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    
    this.heroService.getHeroService().subscribe({next: heroes1=>this.heroes=heroes1.slice(0,5)});
   
  }
  displayedColumns: string[] = ['id', 'name'];
  dataSource = this.heroes;

}
