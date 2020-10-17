import {Component} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
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
    },
    {
      name: 'Projekt Forex',
      deadline: '2020-10-20',
      done: false,
    },
    {
      name: 'Dokończenie TODO Listy w Angularze',
      deadline: '2020-10-17',
      done: true,
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
    this.sortTasks();
  }

  clearTasks(): void {
    this.tasks = [];
  }


  createTask(): void {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  swithEditMode(): void {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task): void {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks(): void {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1);
  }
}
