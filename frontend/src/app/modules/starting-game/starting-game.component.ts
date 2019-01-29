import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-starting-game',
  templateUrl: './starting-game.component.html',
  styleUrls: ['./starting-game.component.sass']
})
export class StartingGameComponent implements OnInit {
  data: any = {};
  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formValidations();
  }

  formValidations() {
    this.form = this.fb.group({
      playerName: ['user01', Validators.required ]
    });
  }

  goGame() {
    this.router.navigate(["/game", this.data]);
  }

}
