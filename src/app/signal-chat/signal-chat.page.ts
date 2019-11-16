import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signal-chat',
  templateUrl: './signal-chat.page.html',
  styleUrls: ['./signal-chat.page.scss'],
})
export class SignalChatPage implements OnInit {

  constructor() {}

  signals = ['test 1', 'test 2', 'test 3'];

  inputVal = '';
  signalInput = '';

  enterButtonClicked(data : string)
  {
    //console.log(data);
    
    this.inputVal = data;
    this.signals.push( this.inputVal ); 
    //console.log( "signalInput" + this.inputVal );
  }

  ngOnInit() {
  }

}