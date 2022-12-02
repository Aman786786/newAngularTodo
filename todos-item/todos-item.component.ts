import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent implements OnInit {
  ngOnInit(): void {}
  @Input() task: Task;

  // @Output() public todoAdd: EventEmitter<Task> = new EventEmitter();
}
