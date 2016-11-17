import {Injectable} from "@angular/core";
import {Http, Jsonp} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService{

  constructor(private _http: Http){}

  getVideos(){
    return this._http.get("./json/videos.json")
      .map(res => res.json().videos);
  }
}
