import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormAddHeroComponent } from './form-add-hero/form-add-hero.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroDetails1Component } from './hero-details1/hero-details1.component';
import { HeroMoreDetailsComponent } from './hero-more-details/hero-more-details.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'heroes', component: HeroComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'modifyHero/:id', component:HeroDetails1Component},
    {path:'addHero', component:FormAddHeroComponent},
    {path:'moreDetails/:id',component: HeroMoreDetailsComponent},
    {path:'', redirectTo: 'dashboard', pathMatch:'full'}
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
