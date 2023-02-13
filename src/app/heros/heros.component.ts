import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  constructor(private heroService: HeroService){}
  
  ngOnInit(): void { 
    this.getHeros();
  }

  heros ?: Hero[];

  getHeros(): void {
    this.heroService.getHeroes().subscribe(heros => this.heros = heros);
  }

  selectedHero ?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log('clicked');
  }
}
