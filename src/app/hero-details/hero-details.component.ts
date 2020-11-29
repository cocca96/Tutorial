import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-herodetails',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
@Injectable()
export class HeroDetailsComponent implements OnInit {
  updateForm!: FormGroup;
  hero!: Hero;
  wins: number = 0;
  constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required]],
      id: ['', [Validators.required]],
    });
    console.log(this.hero.name);
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const param = +id;
      console.log("numero id:" + param)
      this.getHero1(param);
      console.log("nome" + this.hero.name);
    }
  }

  getHero1(id: number): void {
    this.heroService.getHeroMock(id).subscribe({
      next: h => {
        this.hero = h;
      }
    });
  }

  modify() {
    this.heroService.updateHero(this.hero).subscribe(
      {
        next: data => {
          console.log(data);
          this.onBack()
        }
      });
  }
  
  onBack(): void {
    this.router.navigate(['/heroes']);
  }

}

