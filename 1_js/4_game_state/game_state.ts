/** 
 * 4_game_state
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -31.07.2022-18.03.2023-26.03.2023-09.07.2023-
 * @version Last_modified -24.02m.2024-15.08m.2024-05.01m.2025-
 */
let Copyright_AnBr75 = 2024; 

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish) console.log('game_state.js -> module start');

// в разных состояниях(старт, пауза, ..) игры задаем разный fps
import { timer_R, Timer_C } from '../3_loop/timer.js';

import { gameStart_R, GameStart_C } from './game_start.js';
import { gameContinue_R, GameContinue_C } from './game_continue.js';
import { gamePause_R, GamePause_C } from './game_pause.js';
import { gameEnd_R, GameEnd_C } from './game_end.js';

import { drawGameStart_R } from '../2_graphics_2d/drow_game_start.js';
import { drawGameContinue_R } from '../2_graphics_2d/drow_game_continue.js';
import { drawGamePause_R } from '../2_graphics_2d/drow_game_pause.js';
import { drawGameEnd_R } from '../2_graphics_2d/drow_game_end.js';

class GameState_C {

  public static NAME: string = "GameState_C";
  public isOk: string = "";

  // состояние игры. может быть старт игры, игра, пауза, конец игры.
  private static START_GAME: number = 1;
  private static CONTINUE_GAME: number = 2;
  private static PAUSE_GAME: number = 3;
  private static END_GAME: number = 4;

  // нажатие на кнопку задает поле set_gameState, а когда доходит очередь 
  // до начала очередной иттерации игры происходит задание gameState = setGameState.
  // сделал так чтобы в середине цикла не менялось состояние игры.
  private gameState: number = 0;
  private set_gameState: number = 0;
  

  // количество прокруток цикла игры.
  // когда доходит до 10000 то сбрасывается в 1.
  public count: number = 0;
  public static MAX_COUNT: number = 10000;
 

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
   
    gameStart_R.startM();
    gameContinue_R.startM();
    gamePause_R.startM();
    gameEnd_R.startM();

    drawGameStart_R.startM();
    drawGameContinue_R.startM();
    drawGamePause_R.startM();
    drawGameEnd_R.startM();

  }
  //============================================================================= 

  //=============================================================================
  setStartGame(): void {
    this.set_gameState = GameState_C.START_GAME;
    this.count = 0;
    timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_1);
  }
  //=============================================================================

  //=============================================================================
  setContinueGame(): void {
    this.set_gameState = GameState_C.CONTINUE_GAME;
    timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_15);
  }
  //=============================================================================

  //=============================================================================
  setPauseGame(): void {
    this.set_gameState = GameState_C.PAUSE_GAME;
    timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_05);
  }
  //=============================================================================

  //=============================================================================
  setEndGame(): void {
    this.set_gameState = GameState_C.END_GAME;
    this.count = 0;
  }
  //=============================================================================

  //=============================================================================
  isStartGame(): boolean {
    let isStartGame : boolean = (this.gameState == GameState_C.START_GAME) ? true : false;
      return isStartGame;
  }
  //=============================================================================

  //=============================================================================
  isGoGame(): boolean {
    let isGoGame : boolean = (this.gameState == GameState_C.CONTINUE_GAME) ? true : false;
    return isGoGame;
  }
  //=============================================================================

  //=============================================================================
  isPauseGame(): boolean {
    let isPauseGame : boolean = (this.gameState == GameState_C.PAUSE_GAME) ? true : false;
    return isPauseGame;
  }
  //=============================================================================

  //=============================================================================
  isEndGame(): boolean {
    let isEndGame : boolean = (this.gameState == GameState_C.END_GAME) ? true : false;
    return isEndGame;
  }
  //=============================================================================

  //=============================================================================
  tick(): void {

    this.count = this.count + 1;

    if (this.count > GameState_C.MAX_COUNT) {
      this.count = 1;
    }

    //console.log('GameState_C->tickGame = ' + this.sprite);

    if (this.gameState != this.set_gameState) {
      this.gameState = this.set_gameState;
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
    drawGameStart_R.tick();
  }
  //=============================================================================
  //=============================================================================
  tickGoGame(): void {
    //console.log('GameState_C->tickGoGame = ' + this.sprite);
    gameContinue_R.tick();
    drawGameContinue_R.tick();
  }
  //=============================================================================
  //=============================================================================
  tickPauseGame(): void {
    //console.log('GameState_C->tickPauseGame = ' + this.sprite);
    gamePause_R.tick();
    drawGamePause_R.tick();
  }
  //=============================================================================
  //=============================================================================
  tickEndGame(): void {
    //console.log('GameState_C->tickEndGame = ' + this.sprite);
    gameEnd_R.tick();
    drawGameEnd_R.tick();
  }
  //=============================================================================

} //GameState_С

let gameState_R = new GameState_C();

gameState_R.iniM();

export { gameState_R, GameState_C };

if (global_R.print_module_start_finish) console.log('game_state.js -> module finish');

gameState_R.isOk = "OK"; //