let Copyright_AnBr75 = 2022;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('game_state.js -> module start');
import { Timer_C } from '../1_index/timer.js';
import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';
import { UserInputKeyboard_C } from '../4_user_control/keyboard/keyboard.js';
import { Mouse_C } from '../4_user_control/mouse/mouse.js';
import { Local_C } from '../7_local/local.js';
import { GameStart_C } from './game_start/game_start.js';
import { GameContinue_C } from './game_continue/game_continue.js';
import { GamePause_C } from './game_pause/game_pause.js';
import { GameEnd_C } from './game_end/game_end.js';
import { GameMenu_C } from './game_menu/game_menu.js';
class GameState_C {
    timer_R = null;
    html5Canvas_R = new Html5Canvas_C();
    html5Sprites_R = new Html5Sprites_C();
    userInputKeyboard_R = new UserInputKeyboard_C();
    mouse_R = new Mouse_C();
    local_R = new Local_C();
    gameMenu_R = new GameMenu_C();
    gameStart_R = new GameStart_C();
    gameContinue_R = new GameContinue_C();
    gamePause_R = new GamePause_C();
    gameEnd_R = new GameEnd_C();
    static NAME = "GameState_C";
    static MENU_GAME = 0;
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
    iniM(timer_R, idCanvas, contextCanvas) {
        this.timer_R = timer_R;
        this.html5Canvas_R.iniM(idCanvas, contextCanvas);
        this.html5Sprites_R.iniM(this.html5Canvas_R);
        this.userInputKeyboard_R.iniM(this.html5Canvas_R, this.html5Sprites_R);
        this.mouse_R.iniM(this.html5Canvas_R);
        this.local_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.userInputKeyboard_R, this.mouse_R);
        this.gameMenu_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.timer_R, this.local_R);
        this.gameStart_R.iniM(this, this.html5Canvas_R, this.html5Sprites_R, this.timer_R, this.local_R);
        this.gameContinue_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.userInputKeyboard_R, this.mouse_R, this.local_R);
        this.gamePause_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.local_R);
        this.gameEnd_R.iniM(this.html5Canvas_R, this.html5Sprites_R, this.local_R);
    }
    setMenuGame() {
        console.log('GameState_R->setMenuGame');
        this.set_gameState = GameState_C.MENU_GAME;
        this.count = 0;
        this.timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_1);
    }
    setStartGame() {
        console.log('GameState_R->setStartGame');
        this.set_gameState = GameState_C.START_GAME;
        this.count = 0;
        this.timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_1);
    }
    setContinueGame() {
        console.log('GameState_R->setContinueGame');
        this.set_gameState = GameState_C.CONTINUE_GAME;
        this.timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_15);
    }
    setPauseGame() {
        console.log('GameState_R->setPauseGame');
        this.set_gameState = GameState_C.PAUSE_GAME;
        this.timer_R.iniTicksPerSecond(Timer_C.TICKS_PER_SECOND_05);
    }
    setEndGame() {
        console.log('GameState_R->setEndGame');
        this.set_gameState = GameState_C.END_GAME;
        this.count = 0;
    }
    isMenuGame() {
        let isStartGame = (this.gameState == GameState_C.MENU_GAME) ? true : false;
        return isStartGame;
    }
    isStartGame() {
        let isStartGame = (this.gameState == GameState_C.START_GAME) ? true : false;
        return isStartGame;
    }
    isContinueGame() {
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
        if (this.isMenuGame()) {
            this.tickMenuGame();
        }
        else if (this.isStartGame()) {
            this.tickStartGame();
        }
        else if (this.isContinueGame()) {
            this.tickContinueGame();
        }
        else if (this.isPauseGame()) {
            this.tickPauseGame();
        }
        else if (this.isEndGame()) {
            this.tickEndGame();
        }
    }
    tickMenuGame() {
        this.gameMenu_R.tick(this.count);
    }
    tickStartGame() {
        this.gameStart_R.tick(this.count);
    }
    tickContinueGame() {
        this.gameContinue_R.tick(this.count);
    }
    tickPauseGame() {
        this.gamePause_R.tick(this.count);
    }
    tickEndGame() {
        this.gameEnd_R.tick();
    }
}
export { GameState_C };
if (global_R.print_module_start_finish)
    console.log('game_state.js -> module finish');
