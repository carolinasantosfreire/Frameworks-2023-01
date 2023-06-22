import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user = "Carolina";
data = new Date();

constructor(private router: Router, private taskService: TaskService){}

//-------------------------------------------------------------


 ngOnInit(): void {
    this.loadTasks();
    console.log(this.tasks)
  }
//-------------------------------------------------------------

  loadTasks() {
    console.log('Carregar as tasks');
    this.tasks = this.taskService.tasks;
  }

//-------------------------------------------------------------

tasks: Task[] = [];


addTask(){
  this.router.navigateByUrl('/task', {
    state: this.tasks,
  });
}

}
