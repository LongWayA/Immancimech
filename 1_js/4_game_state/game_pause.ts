/** 
 * 4_game_state
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 15.08m.2024
*/

let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish) console.log('game_pause.js -> module start');

import { DrawGamePause_C } from '../2_graphics_2d/drow_game_pause.js';
import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';

class GamePause_C {

  drawGamePause_R = new DrawGamePause_C();

  public static NAME: string = "GamePause_C";
  public isOk: string = "";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(): void {
    //console.log('this.ini->');
    this.drawGamePause_R.iniM();
    this.drawGamePause_R.isOk = "OK"; //
  }
  //=============================================================================
  //=============================================================================
  startM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C): void {
    //alert("!");
    //console.log('this.start->');
    this.drawGamePause_R.startM(html5Canvas_R, html5Sprites_R);
  }
  //============================================================================= 
  //=============================================================================
  tick(countTick: number): void {
    this.drawGamePause_R.tick(countTick);
  }
  //============================================================================= 
}

let gamePause_R = new GamePause_C();

gamePause_R.iniM();

export { gamePause_R, GamePause_C };

if (global_R.print_module_start_finish) console.log('game_pause.js -> module finish');

gamePause_R.isOk = "OK"; //