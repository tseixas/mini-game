import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url = 'http://localhost:4000/player';

  constructor(private http: HttpClient) { }

  addPlayer(player) {
    const data = {
      playerName: player.playerName,
      data: player.data,
      score: player.score
    };

    this.http.post(`${this.url}/add`, data).subscribe(res => console.log('data: ', data));
  }
}
