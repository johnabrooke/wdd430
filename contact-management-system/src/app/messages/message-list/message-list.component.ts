import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'message 1', 'First test message', 'Nephi'),
    new Message('2', 'message 2', 'Second test message', 'Sam'),
    new Message('3', 'message 3', 'Third test message', 'Jacob'),
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
