/** 
 * 4_game_state
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -15.08m.2024-
*/
let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish) console.log('game_start.js -> module start');

import { DrawGameStart_C } from '../2_graphics_2d/drow_game_start.js';
import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';
import { Timer_C } from '../1_index/timer.js';

class GameStart_C {

  drawGameStart_R: DrawGameStart_C = new DrawGameStart_C();

  public static NAME: string = "GameStart_C";
  public isOk: string = "";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 
  
  //=============================================================================
  iniM(): void {
    //console.log('this.ini->');
  }
  //=============================================================================
  //=============================================================================
  startM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, timer_R: Timer_C): void {
    //alert("!");
    //console.log('this.start->');
    this.drawGameStart_R.startM(html5Canvas_R, html5Sprites_R, timer_R);
    this.drawGameStart_R.isOk = "OK"; //
  }
  //============================================================================= 
  //=============================================================================
  tick(countTick: number): void {
    this.drawGameStart_R.tick(countTick);
  }
  //============================================================================= 
}

export { GameStart_C };

if (global_R.print_module_start_finish) console.log('game_start.js -> module finish');