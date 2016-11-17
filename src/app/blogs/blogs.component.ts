import { Component, OnInit } from '@angular/core';
import {BlogsService} from "./blogs.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [BlogsService]
})
export class BlogsComponent{

  blogs: string;

  constructor(private _blogService: BlogsService) {
    this._blogService.getBlogs()
      .subscribe(
        data => this.blogs = data,
        error => console.log(error),
        () => console.log("Blog service Finished")
      );
  }

}
