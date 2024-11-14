import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Input({required:true}) userId!:string;
  @Output() close =new EventEmitter<void>();
  enteredTitle='';
  entereDate='';
  enteredSummary='';
  private taskService= inject(TaskService)

  onCancel(){
    this.close.emit()
  }

  onAdd(){
    this.taskService.addTask({
      title:this.enteredTitle,
      date:this.entereDate,
      summary:this.enteredSummary,
    },this.userId)
    this.close.emit()
  }
}
