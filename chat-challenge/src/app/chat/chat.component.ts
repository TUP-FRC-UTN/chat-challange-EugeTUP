import { Component } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { Message } from '../module/message';
import { User } from '../module/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessagesComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  messages: Message[] = [];


  Users: User[] = [
    { name: 'Pepe' },
    { name: 'María' }
  ];

  
  getMessage(event: Message) {
    this.messages.push(event);
    console.log(event);
  }

}
