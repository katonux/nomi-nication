import { Component } from "@angular/core";

@Component({
  selector: "auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
  email = "";
  password = "";

  reciver(email_: string, password_: string) {
    this.email = email_;
    this.password = password_;
  }
}
