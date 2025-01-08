let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module start');
class GameStart_C {
    static NAME = "GameStart_C";
    isOk = "";
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    tick() {
    }
}
let gameStart_R = new GameStart_C();
gameStart_R.iniM();
export { gameStart_R, GameStart_C };
if (global_R.print_module_start_finish)
    console.log('game_start.js -> module finish');
gameStart_R.isOk = "OK";
