import { Component } from "@angular/core";

@Component({
  selector: "tm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Amelio";
  icon = "menu";
  displayMobileNavbar = false;

  showNavigation(event) {
    this.displayMobileNavbar = !this.displayMobileNavbar;
    if (this.displayMobileNavbar) {
      this.icon = "clear";
    } else {
      this.icon = "menu";
    }
    console.log(event);
  }
  closeNavWindow(e) {
    this.showNavigation(e);
  }
}
