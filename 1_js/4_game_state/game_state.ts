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
import { Timer_C } from '../1_index/timer.js';
import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';

import { GameStart_C } from './game_start.js';
import { GameContinue_C } from './game_continue.js';
import { GamePause_C } from './game_pause.js';
import { GameEnd_C } from './game_end.js';

import { UserInputKeyboard_C } from '../5_user_control/keyboard/keyboard.js';
import { Mouse_C } from '../5_user_control/mouse/mouse.js';

class GameState_C {

  timer_R: Timer_C | null = null; 

  html5Canvas_R: Html5Canvas_C = new Html5Canvas_C();
  html5Sprites_R: Html5Sprites_C = new Html5Sprites_C;
  userInputKeyboard_R: UserInputKeyboard_C  = new UserInputKeyboard_C();
  mouse_R: Mouse_C  = new Mouse_C();

  gameStart_R: GameStart_C = new GameStart_C();
  gameContinue_R: GameContinue_C = new GameContinue_C();
  gamePause_R: GamePause_C = new GamePause_C();
  gameEnd_R: GameEnd_C = new GameEnd_C();


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

    this.html5Canvas_R.iniM();
    this.html5Canvas_R.isOk = "OK"; //
    this.html5Sprites_R.iniM();
    this.html5Sprites_R.isOk = "OK"; //
    this.userInputKeyboard_R.iniM();
    this.userInputKeyboard_R.isOk = "OK"; //
    this.mouse_R.iniM();
    this.mouse_R.isOk = "OK"; //
    this.gameStart_R.iniM();
    this.gameContinue_R.iniM();
    this.gamePause_R.iniM();
    this.gameEnd_R.iniM();

  }
  //=============================================================================
  //=============================================================================
  startM(timer_R: Timer_C, idCanvas : HTMLCanvasElement, contextCanvas : CanvasRenderingContext2D | null): void {
    //console.log('GameState_C->startM()');
    this.timer_R = timer_R;

    this.html5Canvas_R.startM(idCanvas as HTMLCanvasElement, contextCanvas);
    this.html5Sprites_R.startM(this.html5Canvas_R);

    this.gameStart_R.startM(this.html5Canvas_R, this.html5Sprites_R, timer_R);
    this.gameStart_R.isOk = "OK"; //
    this.gameContinue_R.startM(this.html5Canvas_R, this.html5Sprites_R, this.userInputKeyboard_R, this.mouse_R);
    this.gameContinue_R.isOk = "OK"; //
    this.gamePause_R.startM(this.html5Canvas_R, this.html5Sprites_R);
    this.gamePause_R.isOk = "OK"; //
    this.gameEnd_R.startM(this.html5Canvas_R, this.html5Sprites_R);
    this.gameEnd_R.isOk = "OK"; //
    this.userInputKeyboard_R.startM(this.html5Canvas_R, this.html5Sprites_R);
    this.mouse_R.startM(this.html5Canvas_R);
  }
  //============================================================================= 

  //=============================================================================
  setStartGame(): void {
    this.set_gameState = GameState_C.START_GAME;
    this.count = 0;
    (this.timer_R as Timer_C).iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_1);
  }
  //=============================================================================

  //=============================================================================
  setContinueGame(): void {
    this.set_gameState = GameState_C.CONTINUE_GAME;
    (this.timer_R as Timer_C).iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_15);
  }
  //=============================================================================

  //=============================================================================
  setPauseGame(): void {
    this.set_gameState = GameState_C.PAUSE_GAME;
    (this.timer_R as Timer_C).iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_05);
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
    this.gameStart_R.tick(this.count);
  }
  //=============================================================================
  //=============================================================================
  tickGoGame(): void {
    //console.log('GameState_C->tickGoGame = ' + this.sprite);
    this.gameContinue_R.tick(this.count);
  }
  //=============================================================================
  //=============================================================================
  tickPauseGame(): void {
    //console.log('GameState_C->tickPauseGame = ' + this.sprite);
    this.gamePause_R.tick(this.count);
  }
  //=============================================================================
  //=============================================================================
  tickEndGame(): void {
    //console.log('GameState_C->tickEndGame = ' + this.sprite);
    this.gameEnd_R.tick();
  }
  //=============================================================================

} //GameState_С

export { GameState_C };

if (global_R.print_module_start_finish) console.log('game_state.js -> module finish');