import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayerService } from '../../core/services/player.service';

@Component({
  selector: 'app-finish-game',
  templateUrl: './finish-game.component.html',
  styleUrls: ['./finish-game.component.sass']
})
export class FinishGameComponent implements OnInit, OnChanges {
  params: any = {};
  form: FormGroup;

  @Input() data: any;

  constructor(private router: Router, private fb: FormBuilder, private playerService: PlayerService) { }

  ngOnInit() {
    this.formValidations();
  }

  formValidations() {
    this.form = this.fb.group({
      playerName: ['user01', Validators.required]
    });
  }

  finishGame() {
    this.params.score = ((this.data.score * 1000) / this.data.shifts).toFixed(0);
    this.params.data = new Date();

    this.playerService.addPlayer(this.params).subscribe((data: any) => {
      if (data.status === 200) {
        this.router.navigate(["/ranking"]);
      }
    });
  }

  ngOnChanges(change: SimpleChanges) { }
}
