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

import { Run_C } from '../moove/run.js';
import { fight_R } from '../fight/fight.js';
import { ai_R } from '../6_ai_control/ai.js';

import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';
import { DrawGameContinue_C } from '../2_graphics_2d/drow_game_continue.js';
import { Immortals_C } from '../user_avatars/immortals.js';

import { Background_C } from '../7_local/background/background.js';
import { UserInputKeyboard_C } from '../5_user_control/keyboard/keyboard.js';
import { Mouse_C } from '../5_user_control/mouse/mouse.js';

class GameContinue_C {

  drawGameContinue_R = new DrawGameContinue_C();
  immortals_R =  new Immortals_C();
  background_R = new Background_C()
  userInputKeyboard_R: UserInputKeyboard_C | null = null;
  mouse_R: Mouse_C | null = null;
  run_R: Run_C = new Run_C();

  public static NAME: string = "GameContinue_C";
  public isOk: string = "";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(): void {
    //console.log('this.ini->');
    this.drawGameContinue_R.iniM();
    this.drawGameContinue_R.isOk = "OK"; //
    this.immortals_R.iniM();
    this.immortals_R.isOk = "OK"; //
    this.background_R.iniM();
    this.background_R.isOk = "OK"; //
    this.run_R.iniM();
    this.run_R.isOk = "OK"; //

  }
  //=============================================================================
  //=============================================================================
  startM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, userInputKeyboard_R: UserInputKeyboard_C
    , mouse_R: Mouse_C
  ): void {
    //alert("!");
    //console.log('this.start->');
    this.userInputKeyboard_R = userInputKeyboard_R;
    this.mouse_R = mouse_R;
    this.drawGameContinue_R.startM(html5Canvas_R, html5Sprites_R, this.immortals_R, this.background_R, userInputKeyboard_R, mouse_R);
    this.background_R.startM(html5Canvas_R, html5Sprites_R);
    this.immortals_R.startM(html5Canvas_R, html5Sprites_R);
    this.run_R.startM(this.immortals_R, this.background_R);

  }
  //============================================================================= 
  //=============================================================================
  tick(countTick: number): void {

    // Удивительно, что тут пока нет логики игры. Но именно тут она должна быть.
    // тут будут не просто вызовы модулей, а игровая логика.

    // Обработка команд игрока. Команды как с клавиатуры так и с мыши.
    (this.userInputKeyboard_R as UserInputKeyboard_C).tick(this.immortals_R, this.background_R);
    (this.mouse_R as Mouse_C).tick();

    // Обработка команд ai. 
    ai_R.tick();

    // Реализация перемещений
    this.run_R.tick();

    //Реализация боев
    fight_R.tick();
  
    // Обновление состояния локации

    this.drawGameContinue_R.tick(countTick);

  }
  //============================================================================= 
}

export { GameContinue_C};

if (global_R.print_module_start_finish) console.log('game_go.js -> module finish');