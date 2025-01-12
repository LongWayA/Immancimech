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
if (global_R.print_module_start_finish) console.log('game_go.js -> module start');

import { run_R } from '../moove/run.js';
import { fight_R } from '../fight/fight.js';
import { ai_R } from '../6_ai_control/ai.js';
import { userInputKeyboard_R } from '../5_user_control/keyboard/keyboard.js';
import { mouse_R } from '../5_user_control/mouse/mouse.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { background_R } from '../7_local/background/background.js';

class GameContinue_C {
 
  public static NAME: string = "GameContinue_C";
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

    // Удивительно, что тут пока нет логики игры. Но именно тут она должна быть.
    // тут будут не просто вызовы модулей, а игровая логика.

    // Обработка команд игрока. Команды как с клавиатуры так и с мыши.
    userInputKeyboard_R.tick(immortals_R, background_R);
    mouse_R.tick();

    // Обработка команд ai. 
    ai_R.tick();

    // Реализация перемещений
    run_R.tick();

    //Реализация боев
    fight_R.tick();
  
    // Обновление состояния локации

  }
  //============================================================================= 


}

let gameContinue_R = new GameContinue_C();

gameContinue_R.iniM();

export { gameContinue_R, GameContinue_C};

if (global_R.print_module_start_finish) console.log('game_go.js -> module finish');

gameContinue_R.isOk = "OK"; //