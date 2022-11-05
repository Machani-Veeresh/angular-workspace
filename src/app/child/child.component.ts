import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  viewChildMessage = "viewChildMessage";
  imageUrl = 'assets/imageEx.jpeg'
  constructor() { }
  todaysDate = new Date();

  ngOnInit(): void {
  }
  sendMessage() {
    this.messageEvent.emit('hello from child');
  }
}
