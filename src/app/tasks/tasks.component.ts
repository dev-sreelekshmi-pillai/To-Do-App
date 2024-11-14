import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskData, Task } from './task/task.model';
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';




@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTasksComponent,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  isAddingTask=false;

  constructor(private taskService:TaskService){

  }

  get selectedUserTasks (){
    return this.taskService.getTask(this.userId)
  }


  addTask(){
    this.isAddingTask=true
  }

  onCloseAddTask(){
    this.isAddingTask=false 
  }
}
