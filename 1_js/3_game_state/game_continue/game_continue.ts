/** 
 * 4_game_state
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 15.08m.2024
*/

let Copyright_AnBr75 = 2024;

/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('game_continue.ts -> module start');

import { Run_C } from '../../moove/run.js';
import { Fight_C } from '../../fight/fight.js';
import { Ai_C } from '../../5_ai_control/ai.js';

import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../../2_graphics_2d/html5_sprites/html5_sprites.js';
import { DrawGameContinue_C } from './drow_game_continue.js';

import { UserInputKeyboard_C } from '../../4_user_control/keyboard/keyboard.js';
import { Mouse_C } from '../../4_user_control/mouse/mouse.js';
import { Local_C } from '../../7_local/local.js';

class GameContinue_C {

  drawGameContinue_R = new DrawGameContinue_C();

  userInputKeyboard_R: UserInputKeyboard_C | null = null;
  mouse_R: Mouse_C | null = null;
  run_R: Run_C = new Run_C();
  local_R: Local_C | null = null;

  public static NAME: string = "GameContinue_C";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, userInputKeyboard_R: UserInputKeyboard_C
    , mouse_R: Mouse_C, local_R: Local_C): void {
    //console.log('this.ini->');
    this.local_R = local_R;
    this.userInputKeyboard_R = userInputKeyboard_R;
    this.mouse_R = mouse_R;
    this.drawGameContinue_R.iniM(html5Canvas_R, html5Sprites_R, local_R.immortals_R, local_R.background_R, userInputKeyboard_R, mouse_R);
    this.run_R.iniM(local_R.immortals_R, local_R.background_R);
  }
  //=============================================================================

  //=============================================================================
  tick(countTick: number): void {

    // Удивительно, что тут пока нет логики игры. Но именно тут она должна быть.
    // тут будут не просто вызовы модулей, а игровая логика.

    // Обработка команд игрока. Команды как с клавиатуры так и с мыши.
    (this.userInputKeyboard_R as UserInputKeyboard_C).tick((this.local_R as Local_C).immortals_R, (this.local_R as Local_C).background_R);
    (this.mouse_R as Mouse_C).tick();

    // Обработка команд ai. 
    //ai_R.tick();

    // Реализация перемещений
    this.run_R.tick();

    //Реализация боев
   // fight_R.tick();
  
    // Обновление состояния локации

    this.drawGameContinue_R.tick(countTick);

  }
  //============================================================================= 
}

export { GameContinue_C};

if (global_R.print_module_start_finish) console.log('game_continue.ts -> module finish');