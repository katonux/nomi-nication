import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
  email = "";
  password = "";

  constructor(private authService: AuthService) {}

  reciver(email_: string, password_: string) {
    this.email = email_;
    this.password = password_;
    this.authService.login(email_, password_);
  }
}
