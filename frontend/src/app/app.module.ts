import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialComponentsModule } from "./modules/material-components.module";

import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { LoginComponent } from "./components/login/login.component";
import { Routes, RouterModule } from "@angular/router";

// firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../environments/environment";

import { CommentsService } from "./services/comments.service";
import { UserGoogleService } from "./services/user-google.service";
import { HomeComponent } from "./components/home/home.component";
import { UploadComponent } from "./components/upload/upload.component";
import { WatchComponent } from "./components/watch/watch.component";

import { UploadInputComponent } from "./components/upload-input/upload-input.component";
import { UserService } from "./services/user.service";
import { DatabaseService } from "./services/database.service";
import { DragAndDropDirective } from "./directives/drag-and-drop.directive";
import { UploadProcessComponent } from "./components/upload-process/upload-process.component";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { DiskSizePipe } from "./pipes/disk-size.pipe";
import { UploadProcessFileComponent } from "./components/upload-process-file/upload-process-file.component";
import { VideoInfoFormComponent } from "./components/video-info-form/video-info-form.component";
import { from } from 'rxjs';
import { ListCommentComponent } from "./components/list-comment/list-comment.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "upload", component: UploadComponent },
  { path: "watch/:vid", component: WatchComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideBarComponent,
    LoginComponent,
    UploadInputComponent,
    HomeComponent,
    UploadComponent,
    WatchComponent,
    DragAndDropDirective,
    UploadProcessComponent,
    TruncatePipe,
    DiskSizePipe,
    UploadProcessFileComponent,
    VideoInfoFormComponent,
    ListCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MaterialComponentsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [UserService, UserGoogleService, DatabaseService,CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
