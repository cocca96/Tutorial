import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ChartsModule} from 'ng2-charts'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from './hero.service';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input'; 
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field'; 
import { HttpClientModule } from '@angular/common/http';
import { FormAddHeroComponent } from './form-add-hero/form-add-hero.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTableModule} from '@angular/material/table';
import { HeroMoreDetailsComponent } from './hero-more-details/hero-more-details.component';
import { ChartComponent } from './chart/chart.component';
import { HeroDetails1Component } from './hero-details1/hero-details1.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroComponent,
    DashboardComponent,
    FormAddHeroComponent,
    DialogComponent,
    HeroMoreDetailsComponent,
    ChartComponent,
    HeroDetails1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    MatSidenavModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [HeroService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
