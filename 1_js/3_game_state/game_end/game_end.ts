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
if (global_R.print_module_start_finish) console.log('game_end.js -> module start');

import { DrawGameEnd_C } from './drow_game_end.js';
import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../../2_graphics_2d/html5_sprites/html5_sprites.js';
import { Local_C } from '../../7_local/local.js';

class GameEnd_C {

  drawGameEnd_R = new DrawGameEnd_C();
  local_R: Local_C | null = null;

  public static NAME: string = "GameEnd_C";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, local_R: Local_C): void {
    //console.log('this.ini->');
    this.local_R = local_R;
    this.drawGameEnd_R.iniM(html5Canvas_R, html5Sprites_R);    
  }
  //=============================================================================
  //=============================================================================
  tick(): void {
    this.drawGameEnd_R.tick();
  }
//============================================================================= 
}

export { GameEnd_C };

if (global_R.print_module_start_finish) console.log('game_end.js -> module finish');