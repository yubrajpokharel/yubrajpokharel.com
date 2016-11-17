import { Component, OnInit } from '@angular/core';
import {VideoService} from "./videos.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideoService]
})

export class VideosComponent{

  videos: string;

  constructor(private _videoService: VideoService) {
    this._videoService.getVideos()
      .subscribe(
          data => this.videos = data,
          error => console.log(error),
          ()  => console.log("Videos Service Finished")
      );
  }

}
