import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "dummy",
  templateUrl: "./dummy.component.html"
})
export class DummyComponent {
  uid = "isoroot";
  email = "dummy@isoroot.jp";
  name = "dummy";
  photoURL = "dummy.png";
  nomi = 1;

  constructor(private authService, AuthService) {}
}
