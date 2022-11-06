import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {

  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(1);
  }
  resize(delta: number) {
    this.size = this.size + delta;
    console.log(this.size)
    this.sizeChange.emit(this.size);
  }
}
