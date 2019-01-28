import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: "app-hp-bar",
  templateUrl: "./hp-bar.component.html",
  styleUrls: ["./hp-bar.component.sass"]
})
export class HpBarComponent implements OnInit, OnChanges {
  @Input() hp: number;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(change: SimpleChanges) {
    console.log('change', change.hp.currentValue);
  }
}
