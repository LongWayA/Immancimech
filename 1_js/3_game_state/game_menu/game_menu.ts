/** 
 * @author AnBr75
 * @copyright Copyright (c) 2025, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 06.03m.2025
*/

let Copyright_AnBr75 = 2025;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('game_start.js -> module start');

import { DrawGameMenu_C } from './drow_game_menu.js';
import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../../2_graphics_2d/html5_sprites/html5_sprites.js';
import { Timer_C } from '../../1_index/timer.js';
import { Local_C } from '../../7_local/local.js';

class GameMenu_C {

  drawGameMenu_R: DrawGameMenu_C = new DrawGameMenu_C();
  local_R: Local_C | null = null;

  public static NAME: string = "GameMenu_C";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, timer_R: Timer_C, local_R: Local_C): void {
    //console.log('this.ini->');
    this.local_R = local_R;
    this.drawGameMenu_R.iniM(html5Canvas_R, html5Sprites_R, timer_R);
  }
  //=============================================================================
 
  //=============================================================================
  tick(countTick: number): void {
    this.drawGameMenu_R.tick(countTick);
  }
  //============================================================================= 
}

export { GameMenu_C };

if (global_R.print_module_start_finish) console.log('game_start.js -> module finish');