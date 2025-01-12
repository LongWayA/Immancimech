let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_state.js -> module start');
import { timer_R, Timer_C } from '../3_loop/timer.js';
import { gameStart_R } from './game_start.js';
import { gameContinue_R } from './game_continue.js';
import { gamePause_R } from './game_pause.js';
import { gameEnd_R } from './game_end.js';
import { drawGameStart_R } from '../2_graphics_2d/drow_game_start.js';
import { drawGameContinue_R } from '../2_graphics_2d/drow_game_continue.js';
import { drawGamePause_R } from '../2_graphics_2d/drow_game_pause.js';
import { drawGameEnd_R } from '../2_graphics_2d/drow_game_end.js';
class GameState_C {
    static NAME = "GameState_C";
    isOk = "";
    static START_GAME = 1;
    static CONTINUE_GAME = 2;
    static PAUSE_GAME = 3;
    static END_GAME = 4;
    gameState = 0;
    set_gameState = 0;
    count = 0;
    static MAX_COUNT = 10000;
    constructor() {
    }
    iniM() {
    }
    startM() {
        gameStart_R.startM();
        gameContinue_R.startM();
        gamePause_R.startM();
        gameEnd_R.startM();
        drawGameStart_R.startM();
        drawGameContinue_R.startM();
        drawGamePause_R.startM();
        drawGameEnd_R.startM();
    }
    setStartGame() {
        this.set_gameState = GameState_C.START_GAME;
        this.count = 0;
        timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_1);
    }
    setContinueGame() {
        this.set_gameState = GameState_C.CONTINUE_GAME;
        timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_15);
    }
    setPauseGame() {
        this.set_gameState = GameState_C.PAUSE_GAME;
        timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_05);
    }
    setEndGame() {
        this.set_gameState = GameState_C.END_GAME;
        this.count = 0;
    }
    isStartGame() {
        let isStartGame = (this.gameState == GameState_C.START_GAME) ? true : false;
        return isStartGame;
    }
    isGoGame() {
        let isGoGame = (this.gameState == GameState_C.CONTINUE_GAME) ? true : false;
        return isGoGame;
    }
    isPauseGame() {
        let isPauseGame = (this.gameState == GameState_C.PAUSE_GAME) ? true : false;
        return isPauseGame;
    }
    isEndGame() {
        let isEndGame = (this.gameState == GameState_C.END_GAME) ? true : false;
        return isEndGame;
    }
    tick() {
        this.count = this.count + 1;
        if (this.count > GameState_C.MAX_COUNT) {
            this.count = 1;
        }
        if (this.gameState != this.set_gameState) {
            this.gameState = this.set_gameState;
        }
        if (this.isStartGame()) {
            this.tickStartGame();
        }
        else if (this.isGoGame()) {
            this.tickGoGame();
        }
        else if (this.isPauseGame()) {
            this.tickPauseGame();
        }
        else if (this.isEndGame()) {
            this.tickEndGame();
        }
    }
    tickStartGame() {
        gameStart_R.tick();
        drawGameStart_R.tick();
    }
    tickGoGame() {
        gameContinue_R.tick();
        drawGameContinue_R.tick();
    }
    tickPauseGame() {
        gamePause_R.tick();
        drawGamePause_R.tick();
    }
    tickEndGame() {
        gameEnd_R.tick();
        drawGameEnd_R.tick();
    }
}
let gameState_R = new GameState_C();
gameState_R.iniM();
export { gameState_R, GameState_C };
if (global_R.print_module_start_finish)
    console.log('game_state.js -> module finish');
gameState_R.isOk = "OK";
