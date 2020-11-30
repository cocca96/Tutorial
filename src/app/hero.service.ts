import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Hero } from './hero';
//import { HEROES } from './mock-heroes'

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Stats } from 'fs';
import { Statistics } from './statistics';

@Injectable()
export class HeroService{
    private url="http://localhost:8080/api/hero"
    constructor(private http:HttpClient){}

    getHeroService():Observable<Hero[]>{
        console.log("entrato");
        return this.http.get<Hero[]>(this.url);
       
    }
    addHero(hero:Hero): Observable<Hero>{
        return this.http.post<Hero>(this.url,hero);
    }
    deleteHero(id:number|undefined): Observable<Hero>{
        return this.http.delete<Hero>(this.url+"/"+id);
    }
    getHeroMock(id:number):Observable<Hero>{
        console.log("heroe ci sei?"+id)
        return this.http.get<Hero>(this.url+"/"+id);
    }
    updateHero(hero:Hero):Observable<Hero>{
        console.log("Oggetto:"+hero);
        return this.http.patch<Hero>(this.url, hero);
    }
    getStatistics(id:number, firstYear:number, secondYear:number):Observable<Statistics>{
        return this.http.get<Statistics>(this.url+'/'+id+'/stats/'+firstYear+'/'+secondYear);
    }
    private handleError(err: HttpErrorResponse): Observable<never> {

        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
    
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
    
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

   
}