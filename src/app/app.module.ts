import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { SlidetoggleComponent } from "./slidetoggle/slidetoggle.component";
import { AuthComponent } from "./auth/auth.component";
import { RegisterComponent } from "./register/register.component";
import { Put_tableComponent } from "./put_table/put_table.component";
import { HomeComponent } from "./home/home.component";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    SlidetoggleComponent,
    AuthComponent,
    Put_tableComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AngularFirestore, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
