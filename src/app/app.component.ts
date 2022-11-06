import { Component, ElementRef, Renderer2 } from '@angular/core';
import { LogService } from './log.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fontSizePx = 16;
  title = 'angular-workspace';
  constructor(private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef) { }
  ngOnInit(): void {
    this.logService.logService('hello');
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red')
  }
}
