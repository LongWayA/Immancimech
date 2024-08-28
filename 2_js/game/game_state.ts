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

/**
 * Description placeholder
 *
 * @class GameState_C
 * @typedef {GameState_C}
 */
class GameState_C {
  /**
   * Description placeholder
   *
   * @public
   * @type {string}
   */
  public NAME: string = "GameState_C";
  /**
   * Description placeholder
   *
   * @public
   * @type {string}
   */
  public isOk: string = "";

  // состояние игры. может быть старт игры, игра, пауза, конец игры.
  /**
   * Description placeholder
   *
   * @private
   * @type {number}
   */
  private START_GAME: number = 1;
  /**
   * Description placeholder
   *
   * @private
   * @type {number}
   */
  private GO_GAME: number = 2;
  /**
   * Description placeholder
   *
   * @private
   * @type {number}
   */
  private PAUSE_GAME: number = 3;
  /**
   * Description placeholder
   *
   * @private
   * @type {number}
   */
  private END_GAME: number = 4;

  // нажатие на кнопку задает поле setGameState, а когда доходит очередь 
  // до начала очередной иттерации игры происходит задание gameState = setGameState.
  // сделал так чтобы в середине цикла не менялось состояние игры.
  /**
   * Description placeholder
   *
   * @private
   * @type {number}
   */
  private setGameState: number = 0;
  /**
   * Description placeholder
   *
   * @private
   * @type {number}
   */
  private gameState: number = 0;

  // количество прокруток цикла игры. почему назвал спрайт уже не помню :)
  // когда доходит до 10000 то сбрасывается в 1.
  /**
   * Description placeholder
   *
   * @public
   * @type {number}
   */
  public sprite: number = 0;

  //=============================================================================
  /**
   * Creates an instance of GameState_C.
   *
   * @constructor
   */
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  /** Description placeholder */
  iniM(): void {
    //console.log('GameState_C->iniM()');
  }
  //=============================================================================
  //=============================================================================
  /** Description placeholder */
  startM(): void {
    //console.log('GameState_C->startM()');
    gameStart_R.startM();
    gameGo_R.startM();
    gamePause_R.startM();
    gameEnd_R.startM();
  }
  //============================================================================= 

  //=============================================================================
  /** Description placeholder */
  setStartGame(): void {
    this.setGameState = this.START_GAME;
    this.sprite = 0;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_05);
  }
  //=============================================================================

  //=============================================================================
  /** Description placeholder */
  setGoGame(): void {
    this.setGameState = this.GO_GAME;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_15);
  }
  //=============================================================================

  //=============================================================================
  /** Description placeholder */
  setPauseGame(): void {
    this.setGameState = this.PAUSE_GAME;
    timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_02);
  }
  //=============================================================================

  //=============================================================================
  /** Description placeholder */
  setEndGame(): void {
    this.setGameState = this.END_GAME;
  }
  //=============================================================================

  //=============================================================================
  /**
   * Description placeholder
   *
   * @returns {boolean}
   */
  isStartGame(): boolean {
    if (this.gameState == this.START_GAME) return true;
    return false;
  }
  //=============================================================================

  //=============================================================================
  /**
   * Description placeholder
   *
   * @returns {boolean}
   */
  isGoGame(): boolean {
    if (this.gameState == this.GO_GAME) return true;
    return false;
  }
  //=============================================================================

  //=============================================================================
  /**
   * Description placeholder
   *
   * @returns {boolean}
   */
  isPauseGame(): boolean {
    if (this.gameState == this.PAUSE_GAME) return true;
    return false;
  }
  //=============================================================================

  //=============================================================================
  /**
   * Description placeholder
   *
   * @returns {boolean}
   */
  isEndGame(): boolean {
    if (this.gameState == this.END_GAME) return true;
    return false;
  }
  //=============================================================================

  //=============================================================================
  /** Description placeholder */
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
  /** Description placeholder */
  tickStartGame(): void {
    //console.log('GameState_C->tickStartGame = ' + this.sprite);
    gameStart_R.tick();
  }
  //=============================================================================
  //=============================================================================
  /** Description placeholder */
  tickGoGame(): void {
    //console.log('GameState_C->tickGoGame = ' + this.sprite);
    gameGo_R.tick();
  }
  //=============================================================================
  //=============================================================================
  /** Description placeholder */
  tickPauseGame(): void {
    //console.log('GameState_C->tickPauseGame = ' + this.sprite);
    gamePause_R.tick();
  }
  //=============================================================================
  //=============================================================================
  /** Description placeholder */
  tickEndGame(): void {
    //console.log('GameState_C->tickEndGame = ' + this.sprite);
    gameEnd_R.tick();
  }
  //=============================================================================

} //GameState_С

/**
 * Description placeholder
 *
 * @type {GameState_C}
 */
let gameState_R = new GameState_C();

gameState_R.iniM();

export { gameState_R, GameState_C };

if (global_R.print_module_start_finish) console.log('game_state.js -> module finish');

gameState_R.isOk = "OK"; //