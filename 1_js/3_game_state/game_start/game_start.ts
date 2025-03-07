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
if (global_R.print_module_start_finish) console.log('game_start.js -> module start');

import { GameState_C } from '../../3_game_state/game_state.js';
import { DrawGameStart_C } from './drow_game_start.js';
import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../../2_graphics_2d/html5_sprites/html5_sprites.js';
import { Timer_C } from '../../1_index/timer.js';
import { Local_C } from '../../7_local/local.js';

class GameStart_C {

  drawGameStart_R: DrawGameStart_C = new DrawGameStart_C();
  local_R: Local_C | null = null;
  GameState_R: GameState_C | null = null;

  public static NAME: string = "GameStart_C";

  //=============================================================================
  constructor() {
  }
  //============================================================================= 

  //=============================================================================
  iniM(GameState_R: GameState_C, html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C, timer_R: Timer_C, local_R: Local_C): void {
    //console.log('this.ini->');
    this.local_R = local_R;
    this.GameState_R = GameState_R as GameState_C;
    this.drawGameStart_R.iniM(html5Canvas_R, html5Sprites_R, timer_R);
 
  }
  //=============================================================================
  //=============================================================================
  tick(countTick: number): void {
    this.drawGameStart_R.tick(countTick);
    console.log('GameStart_R -> tick');
    //alert("continue");
    if ((this.GameState_R as GameState_C).count > 5) {
      (this.GameState_R as GameState_C).setContinueGame();
    }
  }
  //============================================================================= 
}

export { GameStart_C };

if (global_R.print_module_start_finish) console.log('game_start.js -> module finish');

/*
let form = document.createElement('form');
    form.action = 'https://google.com/search';
    form.method = 'GET';
    
    form.innerHTML = '<input name="q" value="test">';
    
    // перед отправкой формы, её нужно вставить в документ
    document.body.append(form);
    
    form.submit();
*/