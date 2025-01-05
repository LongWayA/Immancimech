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

if (global_R.print_module_start_finish) console.log('game_pause.js -> module start');


class GamePause_C {

  public NAME: string = "GamePause_C";

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
 
  }
  //============================================================================= 
}

let gamePause_R = new GamePause_C();

gamePause_R.iniM();

export { gamePause_R, GamePause_C };

if (global_R.print_module_start_finish) console.log('game_pause.js -> module finish');

gamePause_R.isOk = "OK"; //