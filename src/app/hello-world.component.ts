import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: '<h1>{{title}}</h1>',
    styles: [`
   h1 {
    color: red;
   }
   `]
})
export class HelloWorldComponent implements OnInit, OnDestroy{
    interValSlab: string | number | NodeJS.Timer | undefined;
    ngOnInit(): void {
        this.interValSlab = setInterval(()=>{
            console.log('Hello from NgOnit')
        },1000)
    }
    ngOnDestroy(): void {
        if(this.interValSlab){
            clearInterval(this.interValSlab);
        }
    }
    title = 'Hello World'
}