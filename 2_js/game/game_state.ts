// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -31.07.2022-18.03.2023-26.03.2023-09.07.2023-
// -24.02m.2024-15.08m.2024-

/*
 НАЗНАЧЕНИЕ
 
*/
import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('game_state.js -> module start');

import { timer_R } from '../loop/timer.js';
import { gameStart_R, GameStart_C } from '../game/game_start.js';
import { gameGo_R, GameGo_C } from '../game/game_go.js';
import { gamePause_R, GamePause_C } from '../game/game_pause.js';
import { gameEnd_R, GameEnd_C } from '../game/game_end.js';

gameStart_R.NAME;

class GameState_C {
  public NAME: string = "GameState_C";
  public isOk: string = "";

  private START_GAME: number = 1;
  private GO_GAME: number = 2;
  private PAUSE_GAME: number = 3;
  private END_GAME: number = 4;

  // состояние игры. может быть старт игры, игра, пауза, конец игры.
  private setGameState: number = 0;
  private gameState: number = 0;
  private sprite: number = 0;

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(): void {
    //console.log('this.ini->');
  };
  //=============================================================================
  //=============================================================================
  startM(): void {
    //alert("!");
    //console.log('this.start->');
  };
  //============================================================================= 

  //=============================================================================
  setStartGame(): void {
    this.setGameState = this.START_GAME;
    this.sprite = 0;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_05);
  };
  //=============================================================================

  //=============================================================================
  setGoGame(): void {
    this.setGameState = this.GO_GAME;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_15);
  };
  //=============================================================================

  //=============================================================================
  setPauseGame(): void {
    this.setGameState = this.PAUSE_GAME;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_02);
  };
  //=============================================================================

  //=============================================================================
  setEndGame(): void {
    this.setGameState = this.END_GAME;
  };
  //=============================================================================

  //=============================================================================
  isStartGame(): boolean {
    if (this.gameState == this.START_GAME) return true;
    return false;
  };
  //=============================================================================

  //=============================================================================
  isGoGame(): boolean {
    if (this.gameState == this.GO_GAME) return true;
    return false;
  };
  //=============================================================================

  //=============================================================================
  isPauseGame(): boolean {
    if (this.gameState == this.PAUSE_GAME) return true;
    return false;
  };
  //=============================================================================

  //=============================================================================
  isEndGame(): boolean {
    if (this.gameState == this.END_GAME) return true;
    return false;
  };
  //=============================================================================

  //=============================================================================
  tickGame(): void {
    
    this.sprite = this.sprite + 1;

    if (this.sprite > 10000) {
      this.sprite = 1;
    }
    
    //console.log('GameState_C->tickGame = ' + this.sprite);

    if (this.gameState != this.setGameState) {
      this.gameState = this.setGameState;
    }

    if (this.isStartGame()) {
      this.tickStartGame();
    } else if (this.isGoGame()) {
      this.tickGoGame();
    } else if (this.isPauseGame()) {
      this.tickPauseGame();
    } else if (this.isEndGame()) {
      this.tickEndGame();
    }


  }; //tick () {
  //=============================================================================


  //=============================================================================
  tickStartGame(): void {
    //console.log('GameState_C->tickStartGame = ' + this.sprite);
    gameStart_R.tick();

  }; //tick () {
  //=============================================================================
  //=============================================================================
  tickGoGame(): void {
    //console.log('GameState_C->tickGoGame = ' + this.sprite);
    gameGo_R.tick();
  }; //tick () {
  //=============================================================================
  //=============================================================================
  tickPauseGame(): void {
    //console.log('GameState_C->tickPauseGame = ' + this.sprite);
    gamePause_R.tick();
  }; //tick () {
  //=============================================================================
  //=============================================================================
  tickEndGame(): void {
    //console.log('GameState_C->tickEndGame = ' + this.sprite);
    gameEnd_R.tick();
  }; //tick () {
  //=============================================================================

}; //GameState_С

let gameState_R = new GameState_C();

gameState_R.iniM();

export { gameState_R, GameState_C };

if (global_R.print_module_start_finish) console.log('game_state.js -> module finish');

gameState_R.isOk = "OK"; //