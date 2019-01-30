import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../core/services/player.service';
import Player from 'src/app/shared/models/Player';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.sass']
})
export class RankingComponent implements OnInit {
  ranking: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.find();
  }

  find() {
    this.playerService.findAllPlayer().subscribe((data: any) => {
      this.ranking = data.body;
    });
  }

}
