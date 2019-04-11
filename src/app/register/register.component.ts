import { Component } from "@angular/core";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  email = "";
  password = "";
  name = "";

  constructor(private authService: AuthService) {}

  reciver(email_: string, password_: string, name_: string) {
    this.email = email_;
    this.password = password_;
    this.name = name_;
  }
}
