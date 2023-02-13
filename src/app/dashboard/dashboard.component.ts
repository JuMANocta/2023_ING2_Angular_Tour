import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heros: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void{
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeroes().subscribe(
      heros => this.heros = heros.slice(1, 5)
    );
  }
}
