import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() singlePost: Post;
  @Output() deleted = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  deletePost() {
    this.deleted.emit();
  }
}
