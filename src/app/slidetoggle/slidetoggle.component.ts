import { Component } from "@angular/core";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { EEXIST } from "constants";
import { Observable } from "rxjs";

@Component({
  selector: "slide-toggle",
  templateUrl: "./slidetoggle.component.html",
  styleUrls: ["./slidetoggle.component.css"]
})
export class SlidetoggleComponent {
  //loginしてる時だけ表示する
  //toggleが押されたとき、その変更を反映するために情報を返す
  //
  login = true;
  st = false;
  user: User;

  constructor(private authService: AuthService) {
    this.authService.setSlidetoggleComponent(this);
  }

  public fireLogin() {
    if (this.authService.isLogined()) {
      //TODO: slidetoggleの有効化
      console.log("ログインした");
      this.login = true;
    }
  }

  onChanged(e) {
    if (!this.authService.isLogined()) {
      //ログインしていない
      console.log("ログインしていない");
    } else {
      console.log("b");
      if (e.target.checked) {
        this.authService.updateUserNomi(1);
        console.log("on");
      } else {
        this.authService.updateUserNomi(0);
        console.log("off");
      }
    }
  }
}
