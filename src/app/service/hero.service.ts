import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROS } from '../mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heros = of(HEROS);
    return heros;
  }

}
