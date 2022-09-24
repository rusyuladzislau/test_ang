import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  {
    path: "about",
    loadChildren: () =>
      import("./page/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "not-found",
    loadChildren: () =>
      import("./page/not-found/not-found.module").then((m) => m.NotFoundModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page/not-found/not-found.module").then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
