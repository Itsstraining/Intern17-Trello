import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ThemeService } from "./services/theme.service";
import { MiniPlayerService } from "./services/mini-player.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private _router: Router,
    public theme: ThemeService,
    public player: MiniPlayerService
  ) {}

  getRoute() {
    if (this._router.url == "/") return "Home";
    if (this._router.url == "/upload") return "Upload";
  }
}
