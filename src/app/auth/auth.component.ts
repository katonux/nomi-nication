import { Component } from "@angular/core";

@Component({
  selector: "auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent {
  email = "";
  password = "";

  method(e: any) {
    this.email = e.target.email;
    this.password = e.target.password;
  }

  //サービスの関数を呼び出す
}
