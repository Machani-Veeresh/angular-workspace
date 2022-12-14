import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  showText = false;
  eventName = "customEvent";
  lists = [
    { name: '1' },
    { name: '1' },
    { name: '1' }
  ]
  constructor() { }
  @ViewChild(ChildComponent) child: { viewChildMessage: any; } | undefined;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log(this.child?.viewChildMessage);
     alert(this.child?.viewChildMessage);
  }
  recieveDatafromChild(message:string){
    alert(message);
    console.log(message)
  }
  recieveMessage(message: string) {
    alert(message);
  }
  templateFunc(event: any): void {
    this.showText = !this.showText
    console.log(event);
  }
  customEventTrigger(eventName: string) {
    console.log(eventName);
  }
}
