/** 
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 15.08m.2024
*/

let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('game_pause.js -> module start');

import { DrawGamePause_C } from './drow_game_pause.js';
import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../../2_graphics_2d/html5_sprites/html5_sprites.js';
import { Local_C } from '../../7_local/local.js';

class GamePause_C {

  local_R: Local_C | null = null;

  drawGamePause_R = new DrawGamePause_C();

  public static NAME: string = "GamePause_C";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, local_R: Local_C): void {
    //console.log('this.ini->');
    this.local_R = local_R;
    this.drawGamePause_R.iniM(html5Canvas_R, html5Sprites_R);
  }
  //=============================================================================

  //=============================================================================
  tick(countTick: number): void {
    this.drawGamePause_R.tick(countTick);
  }
  //============================================================================= 
}

export { GamePause_C };

if (global_R.print_module_start_finish) console.log('game_pause.js -> module finish');