import { Component, Inject, OnInit } from "@angular/core";
import { COLLEGE_ABOUT } from "../../providers/about.providers";
import { Observable } from "rxjs";
import { AboutInterface } from "../../interfaces/about.interface";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-college",
  templateUrl: "./college.component.html",
  styleUrls: ["./college.component.scss"],
})
export class CollegeComponent {
  constructor(
    public translateService: TranslateService,
    @Inject(COLLEGE_ABOUT) readonly college$: Observable<AboutInterface>
  ) {}
}
