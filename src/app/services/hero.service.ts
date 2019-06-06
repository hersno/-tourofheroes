import { Injectable } from '@angular/core';
import {HEROES} from '../services/heroesConstant';
import {Hero} from '../models/Hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = HEROES;

  constructor() { }

  getHeroes():Observable<Hero[]> {
    return of(this.heroes);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
