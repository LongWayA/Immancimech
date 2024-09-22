// @ts-check
/** 
 * @module game_end
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -15.08m.2024-

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('game_end.js -> module start');

import { requestAnimationFrame_R } from '../2_render/request_animation_o.js';
import { render_R } from '../2_render/render.js';

class GameEnd_C {

  public NAME: string = "GameEnd_C";
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
  startM(): void {
    //alert("!");
    //console.log('this.start->');
  }
  //============================================================================= 
 //=============================================================================
 tick(): void {
  requestAnimationFrame(requestAnimationFrame_R.drawGameEnd);
  //render_R.drawGameEnd();
}
//============================================================================= 


}

let gameEnd_R = new GameEnd_C();

gameEnd_R.iniM();

export { gameEnd_R, GameEnd_C };

if (global_R.print_module_start_finish) console.log('game_end.js -> module finish');

gameEnd_R.isOk = "OK"; //