import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {VideosComponent} from "./videos/videos.component";
import {BlogsComponent} from "./blogs/blogs.component";
import {ContactComponent} from "./contact/contact.component";


const APP_ROUTE: Routes = [
  {path: '', component: HomeComponent},
  {path: "videos", component: VideosComponent},
  {path: "blogs", component: BlogsComponent},
  {path: "contact", component: ContactComponent}
];

export const routes = RouterModule.forRoot(APP_ROUTE);
