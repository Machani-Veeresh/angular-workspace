import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() passEventtoParent = new EventEmitter<string>();
  @Output() customEventEmitter = new EventEmitter<string>();
  viewChildMessage = "viewChildMessage";
  imageUrl = 'assets/imageEx.jpeg'
  constructor() { }
  todaysDate = new Date();

  onSale = true;
  styleWidth = '50%';
  ngOnInit(): void {
  }
  triggerEvent(){
    console.log('event')
    this.passEventtoParent.emit('send data to parent');
  }
  sendMessage() {
    this.messageEvent.emit('hello from child');
  }
  onSave(){
    console.log('Save button clicked'); 
  }
  customEvent(){
    this.customEventEmitter.emit('customEventEmitter')
  }
  dec(){

  }
  inc(){

  }
}
