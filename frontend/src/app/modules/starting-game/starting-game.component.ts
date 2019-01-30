import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-starting-game',
  templateUrl: './starting-game.component.html',
  styleUrls: ['./starting-game.component.sass']
})
export class StartingGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  toGame() {
    this.router.navigateByUrl("/game");
  }

}
