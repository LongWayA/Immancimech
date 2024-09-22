// @ts-check
/** 
 * @module game_state
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -31.07.2022-18.03.2023-26.03.2023-09.07.2023-
 * @version Last_modified -24.02m.2024-15.08m.2024-
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_loop/global.js';
if (global_R.print_module_start_finish) console.log('game_state.js -> module start');

import { timer_R } from '../1_loop/timer.js';
import { gameStart_R, GameStart_C } from './game_start.js';
import { gameContinue_R, GameContinue_C } from './game_continue.js';
import { gamePause_R, GamePause_C } from './game_pause.js';
import { gameEnd_R, GameEnd_C } from './game_end.js';
import { mouse_R } from '../3_user_control/mouse.js';

class GameState_C {

  public NAME: string = "GameState_C";
  public isOk: string = "";

  // состояние игры. может быть старт игры, игра, пауза, конец игры.
  private START_GAME: number = 1;
  private GO_GAME: number = 2;
  private PAUSE_GAME: number = 3;
  private END_GAME: number = 4;

  // нажатие на кнопку задает поле setGameState, а когда доходит очередь 
  // до начала очередной иттерации игры происходит задание gameState = setGameState.
  // сделал так чтобы в середине цикла не менялось состояние игры.
  private setGameState: number = 0;
  private gameState: number = 0;

  // количество прокруток цикла игры. почему назвал спрайт уже не помню :)
  // когда доходит до 10000 то сбрасывается в 1.
  public sprite: number = 0;

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(): void {
    //console.log('GameState_C->iniM()');
  }
  //=============================================================================
  //=============================================================================
  startM(): void {
    //console.log('GameState_C->startM()');
    mouse_R.startM();
    gameStart_R.startM();
    gameContinue_R.startM();
    gamePause_R.startM();
    gameEnd_R.startM();
  }
  //============================================================================= 

  //=============================================================================
  setStartGame(): void {
    this.setGameState = this.START_GAME;
    this.sprite = 0;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_05);
  }
  //=============================================================================

  //=============================================================================
  setGoGame(): void {
    this.setGameState = this.GO_GAME;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_15);
  }
  //=============================================================================

  //=============================================================================
  setPauseGame(): void {
    this.setGameState = this.PAUSE_GAME;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_02);
  }
  //=============================================================================

  //=============================================================================
  setEndGame(): void {
    this.setGameState = this.END_GAME;
  }
  //=============================================================================

  //=============================================================================
  isStartGame(): boolean {
    if (this.gameState == this.START_GAME) return true;
    return false;
  }
  //=============================================================================

  //=============================================================================
  isGoGame(): boolean {
    if (this.gameState == this.GO_GAME) return true;
    return false;
  }
  //=============================================================================

  //=============================================================================
  isPauseGame(): boolean {
    if (this.gameState == this.PAUSE_GAME) return true;
    return false;
  }
  //=============================================================================

  //=============================================================================
  isEndGame(): boolean {
    if (this.gameState == this.END_GAME) return true;
    return false;
  }
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
  } //tick () {
  //=============================================================================


  //=============================================================================
  tickStartGame(): void {
    //console.log('GameState_C->tickStartGame = ' + this.sprite);
    gameStart_R.tick();
  }
  //=============================================================================
  //=============================================================================
  tickGoGame(): void {
    //console.log('GameState_C->tickGoGame = ' + this.sprite);
    gameContinue_R.tick();
  }
  //=============================================================================
  //=============================================================================
  tickPauseGame(): void {
    //console.log('GameState_C->tickPauseGame = ' + this.sprite);
    gamePause_R.tick();
  }
  //=============================================================================
  //=============================================================================
  tickEndGame(): void {
    //console.log('GameState_C->tickEndGame = ' + this.sprite);
    gameEnd_R.tick();
  }
  //=============================================================================

} //GameState_С

let gameState_R = new GameState_C();

gameState_R.iniM();

export { gameState_R, GameState_C };

if (global_R.print_module_start_finish) console.log('game_state.js -> module finish');

gameState_R.isOk = "OK"; //