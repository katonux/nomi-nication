import { Component } from "@angular/core";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";

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
  st = 0;

  constructor(private authService: AuthService) {}

  onChanged() {
    this.authService.getCurrentUserData().subscribe(result => {
      result.nomi == 0 ? (result.nomi = 1) : (result.nomi = 0);
      result.nomi = this.st;
      this.authService.updateUserData(result);
    });
  }
}
