import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{ todoItem.title }}
    </p>
    <button (click)="removeItem($event)">
  remove
</button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any;
  constructor() { }

  ngOnInit() {
  }

  @Output() remove:EventEmitter<any> = new EventEmitter();
  removeItem() {
    this.remove.emit(this.todoItem);
  }
}
