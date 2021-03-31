import { Component, OnInit, QueryList, ViewChildren  } from '@angular/core';
import {Task} from '../task';
import {TaskComponent} from '../task/task.component';

@Component({
  selector: 'app-toclear-list',
  templateUrl: './toclear-list.component.html',
  styleUrls: ['./toclear-list.component.css']
})
export class ToclearListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChildren(TaskComponent) taskComps!: QueryList<TaskComponent>;

  task:Task[] = [ ];

  taskName!: string;
  taskDescription!: string;

  choose!: Task;

  addtask(){
    let tempTask: Task = {
      id : this.UUID(),
      name: this.taskName,
      description: this.taskDescription,
    }
    this.task.push(tempTask);
  }

  deletedtask(TaskComponent:TaskComponent){
    this.task=this.task.filter(t => t.id !== TaskComponent.taskObj.id);
  }
  UUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  selectedTask(TaskComponent:TaskComponent){
      this.clearSelected();
        TaskComponent.isSelected =true;
        this.choose = TaskComponent.taskObj;
      }
  clearSelected() {
    this.taskComps.forEach(task =>{
     task.isSelected = false;
    });
  }
}
