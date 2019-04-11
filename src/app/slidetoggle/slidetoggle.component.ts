import { Component } from "@angular/core";

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
  st = true;
}
