// @ts-check
/** 
 * @module game_start
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -15.08m.2024-

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('game_start.js -> module start');

import { requestAnimationFrame_R } from '../2_render/request_animation_o.js';
import { render_R } from '../2_render/render.js';

/**
 * Description placeholder
 *
 * @class GameStart_C
 */
class GameStart_C {
  /**
   * Description placeholder
   *
   * @public
   * @type {string}
   */
  public NAME: string = "GameStart_C";
  /**
   * Description placeholder
   *
   * @public
   * @type {string}
   */
  public isOk: string = "";

  //=============================================================================
  /**
   * Creates an instance of GameStart_C.
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
 
    requestAnimationFrame(requestAnimationFrame_R.drawGameStart);
    //render_R.drawGameStart();

  }
  //============================================================================= 


}

/**
 * Description placeholder
 *
 * @type {GameStart_C}
 */
let gameStart_R = new GameStart_C();

gameStart_R.iniM();

export { gameStart_R, GameStart_C };

if (global_R.print_module_start_finish) console.log('game_start.js -> module finish');

gameStart_R.isOk = "OK"; //