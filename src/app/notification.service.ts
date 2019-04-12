import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  messages: Array<string>

  constructor() { 
    this.messages = [
      'test 1, 2, 1, 2, testtttt'
    ]
  }

  add(message: string){
    this.messages.push(message)
  }

  get(){
    return this.messages
  }

  clear(){
    this.messages = []
  }
}
