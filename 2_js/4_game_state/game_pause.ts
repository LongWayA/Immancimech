// @ts-check
/** 
 * @module game_pause
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -15.08m.2024-

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('game_pause.js -> module start');

import { requestAnimationFrame_R } from '../2_render/request_animation_o.js';
import { render_R } from '../2_render/render.js';


/**
 * Description placeholder
 *
 * @class GamePause_C
 */
class GamePause_C {
  /**
   * Description placeholder
   *
   * @public
   * @type {string}
   */
  public NAME: string = "GamePause_C";
  /**
   * Description placeholder
   *
   * @public
   * @type {string}
   */
  public isOk: string = "";

  //=============================================================================
  /**
   * Creates an instance of GamePause_C.
   *
   * @constructor
   */
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  /** Description placeholder */
  iniM(): void {
    //console.log('this.ini->');
  }
  //=============================================================================
  //=============================================================================
  /** Description placeholder */
  startM(): void {
    //alert("!");
    //console.log('this.start->');
  }
  //============================================================================= 
  //=============================================================================
  /** Description placeholder */
  tick(): void {

    requestAnimationFrame(requestAnimationFrame_R.drawGamePaused);
    //render_R.drawGamePaused();
  }
  //============================================================================= 


}

/**
 * Description placeholder
 *
 * @type {GamePause_C}
 */
let gamePause_R = new GamePause_C();

gamePause_R.iniM();

export { gamePause_R, GamePause_C };

if (global_R.print_module_start_finish) console.log('game_pause.js -> module finish');

gamePause_R.isOk = "OK"; //