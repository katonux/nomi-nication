import { Component } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthService } from "./services/auth.service";
import { User } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  show = true;
  constructor(
    private afStore: AngularFirestore,
    private authService: AuthService
  ) {
    this.authService.setAfStore(this.afStore);
    this.authService.setAppComponent(this);
  }

  public fireLogin() {
    if (this.authService.isLogined()) {
      //TODO: slidetoggleの有効化
      console.log("ログインした");
      this.show = true;
    }
  }
}
