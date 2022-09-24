import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { CollegeComponent } from "./components/college/college.component";
import { COLLEGE_ABOUT } from "./providers/about.providers";
import { Observable } from "rxjs";
import { AboutInterface } from "./interfaces/about.interface";
import { TranslateModule } from "@ngx-translate/core";

const DEFAULT_COLLEGE = {
  id: 1,
  name: "National college",
  photo:
    "https://www.iecaonline.com/wp-content/uploads/2021/11/Amherst-College-250x250.jpg",
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  media_type: 1,
  vimeo_video_id: 1,
};

@NgModule({
  declarations: [CollegeComponent],
  imports: [CommonModule, AboutRoutingModule, TranslateModule],
  exports: [CollegeComponent],
  providers: [
    {
      provide: COLLEGE_ABOUT,
      useValue: new Observable<AboutInterface>((ob) =>
        ob.next(DEFAULT_COLLEGE)
      ),
    },
  ],
})
export class AboutModule {}
