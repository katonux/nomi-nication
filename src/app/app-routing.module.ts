import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AuthComponent } from "./auth/auth.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "auth",
        component: AuthComponent
      },
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
