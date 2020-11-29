import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Chart from 'chart.js';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  scoreThisYear: number = 0;
  years: string[]=[];
  hero: Hero;
  myChart: any;
  chosenValue: number = 1;
  heroId: number = 0;
  // data1:any = [];
  

  constructor(private heroService: HeroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
   
    if (id) {
      this.getHero(+id);
      this.heroId = +id;
      this.getStats(2010,2011);
    }
  }
  ngAfterViewInit() {
    this.myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Score',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

   

  }

  getHero(id: number): void {
    this.heroService.getHeroMock(id).subscribe({
      next: h => {
        this.hero = h;
        // this.data1.push(h.scoreLast10Years[0]);
        // this.data1.push(h.scoreLast10Years[1]);
        // this.years.push("2010");
        // this.years.push("2011");
        // this.myChart.update();
      }
    });
  }

  getStats(firstYear: number, secondYear:number) {
    this.heroService.getStatistics(this.heroId, firstYear, secondYear).subscribe({
      next: s => {
        this.myChart.data.datasets[0].data = s.scores;
        this.myChart.data.labels = s.labels;
        this.myChart.update();
      }

    });

  }

  incrementScore() {
    this.scoreThisYear += 1;
    this.myChart.data.datasets[0].data[0] = this.scoreThisYear;
    this.hero.scoreThisYear=this.scoreThisYear;
    this.heroService.updateHero(this.hero).subscribe();
    this.myChart.update();

    // this.router.navigate(['/moreDetails/' + this.hero?.id]);
    console.log("punteggio" + this.scoreThisYear)


  }
  selectOnChange() {
    console.log('chosenValue: '+this.chosenValue);

    switch (+this.chosenValue) {
      case 1:
        this.getStats(2010,2011);
        break;
      case 2:
        this.getStats(2011,2012);
        break;
      case 3:
        this.getStats(2012,2013);
        break;
    }
    
  }
}


