import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";
@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;

  listOfPosts: Post[] = [
    { title: "First Post", thought: "Very interesting post" },
    { title: "Second Post", thought: "Very funny post" },
    { title: "Third Post", thought: "Very cool post" },
    { title: "Fourth Post", thought: "Very silly post" }
  ];
  constructor() {}

  ngOnInit(): void {}

  onSubmit(post: Post) {
    this.listOfPosts.unshift(post);
    this.show = false;
  }
  onDelete(index: number) {
    this.listOfPosts.splice(index, 1);
  }
  showForm() {
    this.show = !this.show;
  }
}
