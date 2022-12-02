import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/task';
@Component({
  selector: 'app-usertask',
  templateUrl: './usertask.component.html',
  styleUrls: ['./usertask.component.css'],
})
export class UsertaskComponent {
  faPlus = faCirclePlus;
  @Output() todoAdd: EventEmitter<Task> = new EventEmitter();
  private tasks: Task[] = [];
  usertask: string;
  onSubmit() {
    const task = {
      id: 1,
      usertask: this.usertask,
    };
    console.log(this.usertask);
    this.todoAdd.emit(task);

    console.log(task);
  }
}
