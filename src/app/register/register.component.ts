import { Component } from "@angular/core";

@Component({
  selector: "register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent {
  email = "";
  password = "";

  reciver(email_: string, password_: string) {
    this.email = email_;
    this.password = password_;
  }
}
