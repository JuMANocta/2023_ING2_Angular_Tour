import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  constructor(private heroService: HeroService, private messageService: MessageService){}
  
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
    this.messageService.add(`HerosComponent: Id du héro : ${hero.id}`);
  }
}
