import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  showText = false;
  constructor() { }
  @ViewChild(ChildComponent) child: { viewChildMessage: any; } | undefined;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log(this.child?.viewChildMessage);
    // alert(this.child?.viewChildMessage);
  }
  recieveMessage(message: string) {
    alert(message);
  }
  templateFunc(event: any): void {
    this.showText = !this.showText
    console.log(event);
  }
}
