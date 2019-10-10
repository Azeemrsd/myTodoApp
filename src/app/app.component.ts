import { Component, Output } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todo = [];
  newTodo = "";
  @Output()
  onAddTodo() {
    this.todo.push(this.newTodo);
    this.newTodo = "";
  }

  newTodoValue(event: Event) {
    this.newTodo = (<HTMLInputElement>event.target).value;
  }
  editTodo(i) {
    this.newTodo = this.todo[i];
    this.todo.splice(i, 1);
  }
  deleteTodo(i) {
    this.todo.splice(i, 1);
  }
  onClear() {
    this.todo = [];
  }
}
