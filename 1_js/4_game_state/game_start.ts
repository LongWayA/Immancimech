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

class GameStart_C {

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

let gameStart_R = new GameStart_C();

gameStart_R.iniM();

export { gameStart_R, GameStart_C };

if (global_R.print_module_start_finish) console.log('game_start.js -> module finish');

gameStart_R.isOk = "OK"; //