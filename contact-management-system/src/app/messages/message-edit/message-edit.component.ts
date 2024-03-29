import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent implements OnInit {
  @Output() addMessageEvent = new EventEmitter<Message>();
  
  // Create an ElementRef for the subject and msgText input elements in the DOM
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;

  currentSender: string = '20';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    
  }

  onSendMessage() {
    // get the values stored in the subject and msgText
    const subject = this.subject.nativeElement.value;
    const msgText = this.msgText.nativeElement.value;
    // assign a hard coded number to the id of the new Message object
    const message = new Message('1', subject, msgText, this.currentSender);
    // Call the message service add message method and pass it to the new Message
    this.messageService.addMessage(message);
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }
}
