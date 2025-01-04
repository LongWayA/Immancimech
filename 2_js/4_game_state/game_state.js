import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_state.js -> module start');
import { timer_R, Timer_C } from '../3_loop/timer.js';
import { gameStart_R } from './game_start.js';
import { gameContinue_R } from './game_continue.js';
import { gamePause_R } from './game_pause.js';
import { gameEnd_R } from './game_end.js';
import { mouse_R } from '../5_user_control/mouse.js';
class GameState_C {
    static NAME = "GameState_C";
    isOk = "";
    static START_GAME = 1;
    static GO_GAME = 2;
    static PAUSE_GAME = 3;
    static END_GAME = 4;
    setGameState = 0;
    gameState = 0;
    sprite = 0;
    constructor() {
    }
    iniM() {
    }
    startM() {
        mouse_R.startM();
        gameStart_R.startM();
        gameContinue_R.startM();
        gamePause_R.startM();
        gameEnd_R.startM();
    }
    setStartGame() {
        this.setGameState = GameState_C.START_GAME;
        this.sprite = 0;
        timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_05);
    }
    setGoGame() {
        this.setGameState = GameState_C.GO_GAME;
        timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_15);
    }
    setPauseGame() {
        this.setGameState = GameState_C.PAUSE_GAME;
        timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_02);
    }
    setEndGame() {
        this.setGameState = GameState_C.END_GAME;
    }
    isStartGame() {
        if (this.gameState == GameState_C.START_GAME)
            return true;
        return false;
    }
    isGoGame() {
        if (this.gameState == GameState_C.GO_GAME)
            return true;
        return false;
    }
    isPauseGame() {
        if (this.gameState == GameState_C.PAUSE_GAME)
            return true;
        return false;
    }
    isEndGame() {
        if (this.gameState == GameState_C.END_GAME)
            return true;
        return false;
    }
    tickGame() {
        this.sprite = this.sprite + 1;
        if (this.sprite > 10000) {
            this.sprite = 1;
        }
        if (this.gameState != this.setGameState) {
            this.gameState = this.setGameState;
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
    }
    tickGoGame() {
        gameContinue_R.tick();
    }
    tickPauseGame() {
        gamePause_R.tick();
    }
    tickEndGame() {
        gameEnd_R.tick();
    }
}
let gameState_R = new GameState_C();
gameState_R.iniM();
export { gameState_R, GameState_C };
if (global_R.print_module_start_finish)
    console.log('game_state.js -> module finish');
gameState_R.isOk = "OK";
