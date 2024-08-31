import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../module/message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  @Input() user:string = '';
  @Output() message = new EventEmitter<Message>();


  text:string = '';

  getMessages(event:any){
    this.text = event.target.value;
  }

  mess: Message | undefined;

  sendMessage(){
    this.mess = {
      user: this.user,
      message: this.text,
      date : new Date()
    }
    this.message.emit(this.mess);
    this.text = '';
  }


}
