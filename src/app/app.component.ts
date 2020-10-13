import {Component} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  onKeyUp(event: KeyboardEvent): void{
    const  target = event.target as HTMLInputElement;
    console.log(target.value);
  }

}
