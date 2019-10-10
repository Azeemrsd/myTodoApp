import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Output() todoEdited = new EventEmitter<void>();
  @Output() todoDeleted = new EventEmitter<void>();

  @Input() todo;

  constructor() {
    console.log(this.todo);
  }
  onTodoDeleted() {
    this.todoDeleted.emit();
  }
  onTodoEdited() {
    this.todoEdited.emit();
  }
  ngOnInit() {}
}
