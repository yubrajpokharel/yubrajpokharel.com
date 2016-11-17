import {Injectable} from "@angular/core";
import {Http, Jsonp} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService{

  constructor(private _http: Http){}

  getTechStack(){
    return this._http.get("./json/techStack.json")
      .map(res => res.json().data);
  }

  getSpecification(){
    return this._http.get("./json/spec.json")
      .map(res => res.json().spec);
  }

  getGoals(){
    return this._http.get("./json/goal.json")
      .map(res => res.json().goal);
  }

}
