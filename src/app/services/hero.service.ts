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
}
