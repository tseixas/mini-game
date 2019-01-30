import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url = 'http://localhost:4000/player';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  addPlayer(player) {
    const data = {
      playerName: player.playerName,
      data: player.data,
      score: player.score
    };

    return this.http.post(`${this.url}/add`, data, this.httpOptions).pipe(map(res => res));
  }

  findAllPlayer() {
    return this.http
      .get(`${this.url}`);
  }
}
