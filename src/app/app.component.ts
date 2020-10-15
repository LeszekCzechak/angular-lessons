import {Component} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName = 'Sugerowane zadanie codzienne: 2h z Javą';
  taskDate = '';
  config: { [key: string]: string } = null;
  tasks: Task[] = [
    {
      name: 'Nauka Angulara',
      deadline: '2020-10-09',
      done: false,
    },
    {
      name: 'Dończenie projektu MyBudget',
      deadline: '2020-10-10',
      done: false,
    },
    {
      name: 'Projekt mikroserwisowy',
      deadline: '2020-10-11',
      done: false,
    }
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań,All rights reserved.',
        date: new Date().toDateString()
      };
    }, 500);
  }

  clearTasks(): void {
    this.tasks = [];
  }


  createTask(): void{
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }
}
