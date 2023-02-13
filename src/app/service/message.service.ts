import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages : string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  clearMessage(message: string) {
    // const index = this.messages.indexOf(message);
    // if(index !== -1) this.messages.splice(index, 1);
    // 
    this.messages = this.messages.filter(
      m => m !== message
      // function(m){m !== message}
      // (m) => {m !== message}
    );
  }
}
