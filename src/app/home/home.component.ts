import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tm-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  title = "The Mirror";
  constructor() {}

  ngOnInit() {}
}
