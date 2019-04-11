import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
  email = "";
  password = "";

  constructor(private router: Router, private authService: AuthService) {}

  reciver(email_: string, password_: string) {
    this.authService.login(email_, password_).subscribe(result => {
      if (result.uid === "") {
        //ログイン失敗
        console.log("ログイン失敗");
      } else {
        //ログイン成功
        console.log("ログイン成功");
        this.router.navigate(["/"]);
      }
    });
  }
}
