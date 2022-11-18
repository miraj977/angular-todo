import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteBtnEmitter: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminderEmitter: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.deleteBtnEmitter.emit(task);
  }

  onToggle(task: Task) {
    this.toggleReminderEmitter.emit(task);
  }
}
