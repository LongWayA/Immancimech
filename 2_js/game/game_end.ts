// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified  -15.08m.2024-

/*
 НАЗНАЧЕНИЕ

*/
import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('game_end.js -> module start');

import { requestAnimationFrame_R } from '../render/request_animation_o.js';
import { render_R } from '../render/render.js';


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
  requestAnimationFrame(requestAnimationFrame_R.drawGameEnd);
  //render_R.drawGameEnd();
};
//============================================================================= 


}; //Game

let gameEnd_R = new GameEnd_C();

gameEnd_R.iniM();

export { gameEnd_R, GameEnd_C };

if (global_R.print_module_start_finish) console.log('game_end.js -> module finish');

gameEnd_R.isOk = "OK"; //