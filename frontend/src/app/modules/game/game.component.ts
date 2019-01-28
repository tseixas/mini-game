import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.sass"]
})
export class GameComponent implements OnInit {
  HP_MAX = 100;
  MAX_ATTACK = 2;
  PLAYER = 0;
  MONSTER = 1;
  hpPlayer = 100;
  hpMonster = 100;
  timeAttackPlayer: number = 0;
  totalShifts: number = 0;
  disabledSpecialAttack: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  randomValue(start: number, end: number) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }

  attack(type: number) {
    this.timeAttackPlayer += 1;

    if (type === this.PLAYER) {
      this.hpMonster -= this.randomValue(5, 8);

      this.shift(this.PLAYER);
    } else {
      this.hpPlayer -= this.randomValue(5, 8);

      this.shift(this.MONSTER);
    }
  }

  specialAttack(type: number) {
    this.timeAttackPlayer += 1;
    this.disabledSpecialAttack = true;

    if (type === this.PLAYER) {
      this.hpMonster -= this.randomValue(7, 11);

      this.shift(this.PLAYER);
    } else {
      this.hpPlayer -= this.randomValue(7, 11);

      this.shift(this.MONSTER);
    }
  }

  heal(type: number) {
    if (this.hpPlayer < this.HP_MAX || this.hpMonster < this.HP_MAX) {
      this.timeAttackPlayer += 1;

      if (type === this.PLAYER) {
        this.hpPlayer += this.randomValue(5, 10);

        this.shift(this.PLAYER);
      } else {
        this.hpMonster += this.randomValue(5, 10);

        if (this.hpMonster > this.HP_MAX) {
          this.hpMonster = this.HP_MAX;
        }

        this.shift(this.MONSTER);
      }
    }
  }

  shift(type: number) {
    console.log(
      "total turno",
      this.totalShifts,
      " - vezes jogadas",
      this.timeAttackPlayer
    );
    console.log("-------------------------------------");
    if (this.hpMonster <= 0) {
      console.log("VOCÊ VENCEU");
    } else if (this.hpPlayer <= 0) {
      console.log("VOCÊ PERDEU");
    } else {
      if (this.timeAttackPlayer % 2 === 0) {
        this.totalShifts += 1;

        console.log(this.disabledSpecialAttack);
        if (this.disabledSpecialAttack && this.timeAttackPlayer % 4 === 0) {
          this.disabledSpecialAttack = false;
        }

        if (type === this.PLAYER) {
          this.attackMonster();
        }
      }
    }
  }

  attackMonster() {
    /*
     * 0 = this.attack();
     * 1 = this.specialAttack();
     * 2 = this.heal();
     */

    if (this.hpMonster < this.HP_MAX) {
      for (let index = 0; index < 2; index++) {
        const attackType = this.randomValue(0, 2);
        console.log("aqui", index);
        console.log("monstro atacou", attackType);
        if (attackType === 0) {
          this.attack(this.MONSTER);
        } else if (attackType === 1) {
          this.specialAttack(this.MONSTER);
        } else if (attackType === 2) {
          this.heal(this.MONSTER);
        }
      }
    }
  }

  quit() {
    this.router.navigateByUrl("/start");
  }
}
