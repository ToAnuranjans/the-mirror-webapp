import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "tm-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent implements OnInit {
  @Input() loading: true;

  constructor() {}

  ngOnInit() {}
}
