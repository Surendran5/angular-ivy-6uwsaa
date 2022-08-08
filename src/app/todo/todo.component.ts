import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  addTask: string = 'suren';
  todo: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnInit(): void {}
  addNewTask() {
    console.log(this.addTask);
    this.todo.push(this.addTask);
    this.addTask = '';
    console.log(this.todo);
  }
  deleteTask1(index: number) {
    this.todo.splice(index, 1);
  }
}