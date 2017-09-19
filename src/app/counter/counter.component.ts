import { Component, Input, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `Counter Component  <button (click)="decrease()">-</button>{{counterValue}}  <button (click)="increase()">+</button>`,
  styles: []
})
export class CounterComponent implements OnInit{
  public counterValue:number;
  @Input('counter') counter: number
  @Output() counterChange = new EventEmitter();

  constructor(){
    this.counterValue=0;
  }
  ngOnInit(){
    this.counterValue=this.counter;
  }
  increase(){
    this.counterValue=this.counterValue+1;
    this.counterChange.emit(this.counterValue);
  }
  decrease(){
    this.counterValue= this.counterValue-1;
    this.counterChange.emit(this.counterValue);
  }

}
