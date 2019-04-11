import { Component } from "@angular/core";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  /*
  email = "";
  password = "";
  name = "";
  */
  user: User;

  constructor(private authService: AuthService) {}

  reciver(email_: string, password_: string, name_: string) {
    this.user.email = email_;
    this.user.password = password_;
    this.user.name = name_;
    this.authService.createUserData(this.user);
  }
}
