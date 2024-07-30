import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Todo {
  task: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoForm: FormGroup;
  todos: Todo[] = [];

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.todos.push({ task: this.todoForm.value.task, done: false });
      this.todoForm.reset();
    }
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  toggleDone(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }
}
