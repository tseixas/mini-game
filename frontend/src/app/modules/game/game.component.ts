import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

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
  totalShifts = 1;
  specialAttackPlayer = false;
  specialAttackMonster = false;
  logs = [];
  rotationPlayer = 0;
  rotationMonster = 0;

  constructor(private router: Router, private dataRoute: ActivatedRoute) {
    console.log(this.dataRoute.snapshot.params['playerName']);
  }

  ngOnInit() { }

  randomValue(start: number, end: number) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }

  attack(type: number) {
    if (type === this.PLAYER) {
      const hit = this.randomValue(5, 8);
      this.hpMonster -= hit;

      this.logs.push({ 'log': 'Jogador atacou o monstro (-' + hit + ')', 'type': 'player', 'status': 'attack' });
      this.shift(this.PLAYER, hit);
    } else {
      const hit = this.randomValue(5, 8);
      this.hpPlayer -= hit;

      this.logs.push({ 'log': 'Monstro causou dano (-' + hit + ')', 'type': 'monster', 'status': 'attack' });
      this.shift(this.MONSTER, hit);
    }
  }

  specialAttack(type: number) {
    if (type === this.PLAYER) {
      this.specialAttackPlayer = true;
      const hit = this.randomValue(7, 11);
      this.hpMonster -= hit;

      this.logs.push({ 'log': 'Jogador usou o ataque especial (-' + hit + ')', 'type': 'player', 'status': 'specialAttack' });
      this.shift(this.PLAYER, hit);
    } else {
      this.specialAttackMonster = true;
      const hit = this.randomValue(7, 11);
      this.hpPlayer -= hit;

      this.logs.push({ 'log': 'Monstro usou o ataque especial (-' + hit + ')', 'type': 'monster', 'status': 'specialAttack' });
      this.shift(this.MONSTER, hit);
    }
  }

  heal(type: number) {
    if (this.hpPlayer < this.HP_MAX || this.hpMonster < this.HP_MAX) {
      if (type === this.PLAYER) {
        const hit = this.randomValue(5, 10);
        this.hpPlayer += hit;

        if (this.hpPlayer > this.HP_MAX) {
          this.hpPlayer = this.HP_MAX;
        }

        this.logs.push({ 'log': 'Jogador usou a cura (+' + hit + ')', 'type': 'player', 'status': 'heal' });
        this.shift(this.MONSTER, hit);
      } else {
        const hit = this.randomValue(5, 10);
        this.hpMonster += hit;

        if (this.hpMonster > this.HP_MAX) {
          this.hpMonster = this.HP_MAX;
        }

        this.logs.push({ 'log': 'Monstro usou a cura (+' + hit + ')', 'type': 'monster', 'status': 'heal' });
        this.shift(this.MONSTER, hit);
      }
    }
  }

  /**
   *
   *
   * @param {number} type - Player or Monster
   * @param {number} hit - Attacks or heal
   * @memberof GameComponent
   */
  shift(type: number, hit: number) {
    console.log('Jogadas: ', this.totalShifts, ' - Tipo: ', (type === 0 ? 'Player' : 'Monstro'));
    if (this.hpMonster <= 0) {
      this.logs.push({ 'log': 'VOCÊ VENCEU"', 'type': 'player', 'status': 'win' });
    } else if (this.hpPlayer <= 0) {
      this.logs.push({ 'log': 'VOCÊ PERDEU', 'type': 'monster', 'status': 'lose' });
    } else {
      this.totalShifts += 1;

      if (type === this.PLAYER && this.specialAttackPlayer) {
        this.rotationPlayer += 1;
      }

      if (this.rotationPlayer === 3) {
        this.rotationPlayer = 0;
        this.specialAttackPlayer = false;
      }

      if (type === this.MONSTER && this.specialAttackMonster) {
        this.rotationMonster += 1;
      }

      if (this.rotationMonster === 3) {
        this.rotationMonster = 0;
        this.specialAttackMonster = false;
      }

      if (type === this.PLAYER) {
        this.attackMonster();
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
      const attackType = this.randomValue(0, 2);

      if (attackType === 0) {
        this.attack(this.MONSTER);
      } else if (attackType === 1 && !this.specialAttackMonster) {
        this.specialAttack(this.MONSTER);
      } else if (attackType === 2) {
        this.heal(this.MONSTER);
      }
    }
  }

  restart() {
    this.hpPlayer = this.HP_MAX;
    this.hpMonster = this.HP_MAX;
    this.totalShifts = 1;
    this.specialAttackPlayer = false;
    this.logs = [];
  }

  quit() {
    this.router.navigateByUrl("/start");
  }

  goRanking() {
    this.router.navigateByUrl("/ranking");
  }
}
