import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  template: `
    <p>
      owner works!
    </p>
  `,
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
