import { Component } from "@angular/core";

@Component({
  selector: "register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent {
  email = "";
  password = "";
  name = "";

  reciver(email_: string, password_: string, name_: string) {
    this.email = email_;
    this.password = password_;
    this.name = name_;
  }
}
