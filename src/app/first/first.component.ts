import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.route.snapshot.paramMap.get('id'));
  }

}
