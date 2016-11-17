import { Component } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent{

  getTechStack: string;
  spec: string;
  goal: string;

  constructor(private homeService: HomeService){
    this.homeService.getTechStack()
        .subscribe(
          data => this.getTechStack = data,
          error => console.log(error),
          () => console.log("TechStack service Finished")
        );

    this.homeService.getSpecification()
      .subscribe(
          data => this.spec = data,
          error => console.log(error),
          () => console.log("Specification service Finished")
      );

    this.homeService.getGoals()
      .subscribe(
          data => this.goal = data,
          error => console.log(error),
          ()  => console.log("Goal Service Finished")
      );

  }

}
