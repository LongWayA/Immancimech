/** 
 * @author AnBr75
 * @copyright Copyright (c) 2022, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 31.07.2022
 */

let Copyright_AnBr75 = 2022;

/**
* НАЗНАЧЕНИЕ
* цикл вызывает именно этот модуль.
* верхнее состояние игры 
* это или меню или старт или продолжение или пауза или конец.
*/

import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish) console.log('game_state.js -> module start');

// 
import { Timer_C } from '../1_index/timer.js';
import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';

import { UserInputKeyboard_C } from '../4_user_control/keyboard/keyboard.js';
import { Mouse_C } from '../4_user_control/mouse/mouse.js';
import { Local_C } from '../7_local/local.js';

import { GameStart_C } from './game_start/game_start.js';
import { GameContinue_C } from './game_continue/game_continue.js';
import { GamePause_C } from './game_pause/game_pause.js';
import { GameEnd_C } from './game_end/game_end.js';
import { GameMenu_C } from './game_menu/game_menu.js';


class GameState_C {

  timer_R: Timer_C | null = null;

  html5Canvas_R: Html5Canvas_C = new Html5Canvas_C();
  html5Sprites_R: Html5Sprites_C = new Html5Sprites_C();
  userInputKeyboard_R: UserInputKeyboard_C = new UserInputKeyboard_C();
  mouse_R: Mouse_C = new Mouse_C();

  local_R: Local_C = new Local_C();

  gameMenu_R: GameMenu_C = new GameMenu_C();
  gameStart_R: GameStart_C = new GameStart_C();
  gameContinue_R: GameContinue_C = new GameContinue_C();
  gamePause_R: GamePause_C = new GamePause_C();
  gameEnd_R: GameEnd_C = new GameEnd_C();


  public static NAME: string = "GameState_C";

  // состояние игры. может быть меню старт, продолжение , пауза, конец.
  private static MENU_GAME: number = 0;
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
  iniM(timer_R: Timer_C, idCanvas: HTMLCanvasElement, contextCanvas: CanvasRenderingContext2D | null): void {
    //console.log('GameState_C->iniM()');
    this.timer_R = timer_R;
    this.html5Canvas_R.iniM(idCanvas as HTMLCanvasElement, contextCanvas);
    this.html5Sprites_R.iniM(this.html5Canvas_R);
    this.userInputKeyboard_R.iniM(this.html5Canvas_R, this.html5Sprites_R);
    this.mouse_R.iniM(this.html5Canvas_R);

    this.local_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.userInputKeyboard_R, this.mouse_R);   

    this.gameMenu_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.timer_R, this.local_R);
    this.gameStart_R.iniM(this, this.html5Canvas_R, this.html5Sprites_R, this.timer_R, this.local_R);
    this.gameContinue_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.userInputKeyboard_R, this.mouse_R, this.local_R);
    this.gamePause_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.local_R);
    this.gameEnd_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.local_R);
  }
  //=============================================================================

  //=============================================================================
  setMenuGame(): void {
    console.log('GameState_R->setMenuGame');
    this.set_gameState = GameState_C.MENU_GAME;
    this.count = 0;
    (this.timer_R as Timer_C).iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_1);
  }
  //=============================================================================

  //=============================================================================
  setStartGame(): void {
    console.log('GameState_R->setStartGame');   
    this.set_gameState = GameState_C.START_GAME;
    this.count = 0;
    (this.timer_R as Timer_C).iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_1);
  }
  //=============================================================================

  //=============================================================================
  setContinueGame(): void {
    console.log('GameState_R->setContinueGame');
    this.set_gameState = GameState_C.CONTINUE_GAME;
    (this.timer_R as Timer_C).iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_15);
  }
  //=============================================================================

  //=============================================================================
  setPauseGame(): void {
    console.log('GameState_R->setPauseGame');
    this.set_gameState = GameState_C.PAUSE_GAME;
    (this.timer_R as Timer_C).iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_05);
  }
  //=============================================================================

  //=============================================================================
  setEndGame(): void {
    console.log('GameState_R->setEndGame');
    this.set_gameState = GameState_C.END_GAME;
    this.count = 0;
  }
  //=============================================================================

  //=============================================================================
  isMenuGame(): boolean {
    let isStartGame: boolean = (this.gameState == GameState_C.MENU_GAME) ? true : false;
    return isStartGame;
  }
  //=============================================================================

   //=============================================================================
   isStartGame(): boolean {
    let isStartGame: boolean = (this.gameState == GameState_C.START_GAME) ? true : false;
    return isStartGame;
  }
  //=============================================================================

  //=============================================================================
  isContinueGame(): boolean {
    let isGoGame: boolean = (this.gameState == GameState_C.CONTINUE_GAME) ? true : false;
    return isGoGame;
  }
  //=============================================================================

  //=============================================================================
  isPauseGame(): boolean {
    let isPauseGame: boolean = (this.gameState == GameState_C.PAUSE_GAME) ? true : false;
    return isPauseGame;
  }
  //=============================================================================

  //=============================================================================
  isEndGame(): boolean {
    let isEndGame: boolean = (this.gameState == GameState_C.END_GAME) ? true : false;
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

    if (this.isMenuGame()) {
      this.tickMenuGame();
    } else if (this.isStartGame()) {
      this.tickStartGame();
    } else if (this.isContinueGame()) {
      this.tickContinueGame();
    } else if (this.isPauseGame()) {
      this.tickPauseGame();
    } else if (this.isEndGame()) {
      this.tickEndGame();
    }
  } //tick () {
  //=============================================================================

  //=============================================================================
  tickMenuGame(): void {
    //console.log('GameState_C->tickStartGame = ' + this.sprite);
    this.gameMenu_R.tick(this.count);
  }
  //=============================================================================
  //=============================================================================
  tickStartGame(): void {
    //console.log('GameState_C->tickStartGame = ' + this.sprite);
    this.gameStart_R.tick(this.count);
  }
  //=============================================================================  
  //=============================================================================
  tickContinueGame(): void {
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