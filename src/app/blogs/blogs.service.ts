import {Injectable} from "@angular/core";
import {Http, Jsonp} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class BlogsService{

  constructor(private _http: Http){}

  getBlogs(){
    return this._http.get("./json/blogs.json")
      .map(res => res.json().blogs);
  }
}
