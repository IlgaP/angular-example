import { Component } from '@angular/core';

@Component({
  selector: 'app-planner-simple',
  templateUrl: './planner-simple.component.html',
  styleUrls: ['./planner-simple.component.scss']
})
export class PlannerSimpleComponent  {
  tasks: string[] = ['Task1', 'Task2', 'Task3'];
  inputValue: string = '';

  addTask(): void {
    if (this.inputValue) {
      this.tasks.push(this.inputValue);
      this.inputValue='';
    }
  }

}
