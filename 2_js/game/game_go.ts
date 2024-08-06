// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -31.07.2022-18.03.2023-26.03.2023-09.07.2023-
// -24.02m.2024-

/*
 НАЗНАЧЕНИЕ
 Корневой модуль игры
 

*/
import { Global } from '../global/global.js';

if (Global.print_module_start_finish) console.log('game.js -> module start');

import { Timer } from '../loop/timer.js';
import { UserInputKeyboard } from '../user_control/keyboard.js';
import { HTML5_Canvas_Mouse } from '../html5_canvas/5_html5_canvas_mouse_event.js';
import { Immortals } from '../user_avatars/immortals.js';
import { Run } from '../moove/run.js';
import { Fight } from '../fight/fight.js';
import { Ai } from '../ai/ai.js';
import { Render } from '../render/render.js';
import { Background } from '../background/background.js';
import { Buttons } from '../loop/buttons.js';



interface Game_I {

  NAME: string;
  isOk: string;
  Buttons: typeof Buttons;

  START_GAME: number;
  GO_GAME: number;
  PAUSE_GAME: number;
  END_GAME: number;
  MENU_GAME: number;

  // состояние игры. может быть стартовое меню, конец игры, пауза, игра
  isGameState: number;
  sprite: number;

  ini(): void;
  start(): void;
  setStartGame(): void;
  setGoGame(): void;
  setPauseGame(): void;
  setEndGame(): void;
  isStartGame(): boolean;
  isGoGame(): boolean;
  isPauseGame(): boolean;
  isEndGame(): boolean;
  tickStartGame(): void;
  tickGoGame(): void;
  tickPauseGame(): void;
  tickEndGame(): void;
}


var Game: Game_I = {
  //var Game  = {
  NAME: "Game M",
  isOk: "",

  // Внешние ссылки

  Buttons: Buttons,


  START_GAME: 1,
  GO_GAME: 2,
  PAUSE_GAME: 3,
  END_GAME: 4,

  MENU_GAME: 5,


  // состояние игры. может быть стартовое меню, конец игры, пауза, игра
  isGameState: 0,
  sprite: 0,
  //=============================================================================
  ini: function () {
    //console.log('Game.ini->');
  },
  //=============================================================================
  //=============================================================================
  start: function () {
    //alert("!");
    //console.log('Game.start->');
  },
  //============================================================================= 

  //=============================================================================
  setStartGame: function () {
    Game.isGameState = Game.START_GAME;
    Game.sprite = 0;
    Timer.ini_ticksPerSecond(Timer.TICKS_PER_SECOND_05);
  },
  //=============================================================================

  //=============================================================================
  setGoGame: function () {
    Game.isGameState = Game.GO_GAME;
    Timer.ini_ticksPerSecond(Timer.TICKS_PER_SECOND_30);
  },
  //=============================================================================

  //=============================================================================
  setPauseGame: function () {
    Game.isGameState = Game.PAUSE_GAME;
    Timer.ini_ticksPerSecond(Timer.TICKS_PER_SECOND_02);
  },
  //=============================================================================

  //=============================================================================
  setEndGame: function () {
    Game.isGameState = Game.END_GAME;
  },
  //=============================================================================

  //=============================================================================
  isStartGame: function () {
    if (Game.isGameState == Game.START_GAME) return true;
    return false;
  },
  //=============================================================================

  //=============================================================================
  isGoGame: function () {
    if (Game.isGameState == Game.GO_GAME) return true;
    return false;
  },
  //=============================================================================

  //=============================================================================
  isPauseGame: function () {
    if (Game.isGameState == Game.PAUSE_GAME) return true;
    return false;
  },
  //=============================================================================

  //=============================================================================
  isEndGame: function () {
    if (Game.isGameState == Game.END_GAME) return true;
    return false;
  },
  //=============================================================================

  //=============================================================================
  tickStartGame: function () {
    console.log('Game.tickStartGame');
    Game.sprite = Game.sprite + 1;

    if (Game.sprite > 1000) {
      Game.sprite = 1;
    }
    requestAnimationFrame(Render.drawGameStart);
    //  Render.drawGameStart();

  }, //tick : function() {
  //=============================================================================

  //=============================================================================
  tickGoGame: function () {
    // console.log('Game.tickGoGame');
    Game.sprite = Game.sprite + 1;

    if (Game.sprite > 1000) {
      Game.sprite = 1;
    }

    UserInputKeyboard.tick(Immortals, Background);
    HTML5_Canvas_Mouse.tick();

    Run.tick();
    Fight.tick();
    Ai.tick();

    requestAnimationFrame(Render.drowGoGame);


  }, //tick : function() {
  //=============================================================================

  //=============================================================================
  tickPauseGame: function () {
    //console.log('Game.tickPauseGame');
    Game.sprite = Game.sprite + 1;

    if (Game.sprite > 1000) {
      Game.sprite = 1;
    }

    requestAnimationFrame(Render.drawGamePaused);
    //Render.drawGamePaused();

  }, //tick : function() {
  //=============================================================================


  //=============================================================================
  tickEndGame: function () {
    console.log('Game.tickEndGame');
    Game.sprite = Game.sprite + 1;

    if (Game.sprite > 1000) {
      Game.sprite = 1;
    }

    requestAnimationFrame(Render.drawGameEnd);
    //Render.drawGameEnd();

  }, //tick : function() {
  //=============================================================================

}; //Game
Game.ini();
//Global.testLoading('Game.js');
Game.isOk = "OK"; //

export { Game };

if (Global.print_module_start_finish) console.log('game.js -> module finish');