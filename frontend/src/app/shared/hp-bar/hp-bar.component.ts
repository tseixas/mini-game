import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: "app-hp-bar",
  templateUrl: "./hp-bar.component.html",
  styleUrls: ["./hp-bar.component.sass"]
})
export class HpBarComponent implements OnInit, OnChanges {
  @Input() hp: number;
  @Input() progress: number;

  constructor() { }

  ngOnInit() { }

  updateBar(hp: number) {
    if (hp > 10 && hp <= 100) {
      return { 'background-color': '#ffa500', 'width': hp + '%' };
    } else {
      return { 'background-color': '#ff1919', 'width': hp + '%' };
    }
  }

  ngOnChanges(change: SimpleChanges) {
    const hp = change.hp.currentValue;
    console.log('change', hp);

    this.updateBar(hp);
  }
}
