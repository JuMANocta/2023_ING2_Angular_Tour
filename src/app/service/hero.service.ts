import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROS } from '../mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from '../service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heros = of(HEROS);
    this.messageService.add('HeroService: Récupération des Héros');
    return heros;
  }

}
