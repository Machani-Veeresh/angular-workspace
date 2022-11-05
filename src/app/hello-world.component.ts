import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: `
    // Text Interpolation Example 
    <h1> 1.  {{title}}</h1>
    // Expressions Example
    <div>2. {{number + number }}</div>
    <div>{{getMaximum(2,4)}}</div>`,
    styles: [`
   h1 {
    color: red;
   }
   `]
})
export class HelloWorldComponent implements OnInit, OnDestroy{
    interValSlab: string | number | NodeJS.Timer | undefined;
    title = 'Hello World';
    number = 1;
    ngOnInit(): void {
        console.log('onInit');
       /*  this.interValSlab = setInterval(()=>{
            console.log('Hello from NgOnit')
        },1000) */
    }
    getMaximum(a: number,b: number) {
        if(a>b){
            return a;
        }else {
            return b;
        }
    }
    ngOnDestroy(): void {
        if(this.interValSlab){
            clearInterval(this.interValSlab);
        }
    }
}