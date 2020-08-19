import { Component, OnInit } from "@angular/core";
declare var ChessBoard: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "js-lib-example";
  board: any;

  ngOnInit(): void {
    this.board = ChessBoard("board1", {
      position: "start",
      draggable: true,
    });
  }
}
