// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified  -15.08m.2024-

/*
 НАЗНАЧЕНИЕ
 
*/
import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('game_go.js -> module start');

import { requestAnimationFrame_R } from '../render/request_animation_o.js';
import { run_R } from '../moove/run.js';
import { fight_R } from '../fight/fight.js';
import { ai_R } from '../ai/ai.js';
import { userInputKeyboard_R } from '../user_control/keyboard.js';
import { mouse_R } from '../user_control/mouse.js';
import { immortals_R } from '../user_avatars/immortals.js';
import { background_R } from '../local/background/background.js';
import { render_R } from '../render/render.js';


class GameGo_C {
  public NAME: string = "GameGo_C";
  public isOk: string = "";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(): void {
    //console.log('this.ini->');
  };
  //=============================================================================
  //=============================================================================
  startM(): void {
    //alert("!");
    //console.log('this.start->');
  };
  //============================================================================= 
  //=============================================================================
  tick(): void {

    userInputKeyboard_R.tick(immortals_R, background_R);
    mouse_R.tick();

    run_R.tick();
    fight_R.tick();
    ai_R.tick();

    requestAnimationFrame(requestAnimationFrame_R.drowGoGame);
    //render_R.drowGoGame();
  };
  //============================================================================= 


}; //Game

let gameGo_R = new GameGo_C();

gameGo_R.iniM();

export { gameGo_R, GameGo_C };

if (global_R.print_module_start_finish) console.log('game_go.js -> module finish');

gameGo_R.isOk = "OK"; //