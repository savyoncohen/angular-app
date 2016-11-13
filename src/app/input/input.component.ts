import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value]="title" 
  (keyup.enter)="submitValue($event.target.value)"
  #myInput>

  <button (click)="submitValue(myInput.value)">
    Save
  </button>

  {{ title }}
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  private title: string = 'My First Todo Title !!!';
  @Output() submit:EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    let that = this;
    // setTimeout(() => {
    //   that.title = 'This is not the title you are looking for';
    // }, 3000);
  }

  submitValue(newTitle:string): void {
    this.submit.emit(newTitle);
  }

  titleGenerator() {
    return 'This is not the title you are looking for';
  }

}


