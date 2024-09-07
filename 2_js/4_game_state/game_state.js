// @ts-check
/**
 * @module game_state
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -31.07.2022-18.03.2023-26.03.2023-09.07.2023-
 * @version Last_modified -24.02m.2024-15.08m.2024-
/**
* НАЗНАЧЕНИЕ
*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('game_state.js -> module start');
import { timer_R } from '../1_loop/timer.js';
import { gameStart_R } from './game_start.js';
import { gameContinue_R } from './game_continue.js';
import { gamePause_R } from './game_pause.js';
import { gameEnd_R } from './game_end.js';
import { mouse_R } from '../3_user_control/mouse.js';
/**
 * Description placeholder
 *
 * @class GameState_C
 */
class GameState_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "GameState_C";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = "";
    // состояние игры. может быть старт игры, игра, пауза, конец игры.
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    START_GAME = 1;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    GO_GAME = 2;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    PAUSE_GAME = 3;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    END_GAME = 4;
    // нажатие на кнопку задает поле setGameState, а когда доходит очередь 
    // до начала очередной иттерации игры происходит задание gameState = setGameState.
    // сделал так чтобы в середине цикла не менялось состояние игры.
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    setGameState = 0;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    gameState = 0;
    // количество прокруток цикла игры. почему назвал спрайт уже не помню :)
    // когда доходит до 10000 то сбрасывается в 1.
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    sprite = 0;
    //=============================================================================
    /**
     * Creates an instance of GameState_C.
     *
     * @constructor
     */
    constructor() {
    }
    //============================================================================= 
    //=============================================================================
    /** Description placeholder */
    iniM() {
        //console.log('GameState_C->iniM()');
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    startM() {
        //console.log('GameState_C->startM()');
        mouse_R.startM();
        gameStart_R.startM();
        gameContinue_R.startM();
        gamePause_R.startM();
        gameEnd_R.startM();
    }
    //============================================================================= 
    //=============================================================================
    /** Description placeholder */
    setStartGame() {
        this.setGameState = this.START_GAME;
        this.sprite = 0;
        timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_05);
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    setGoGame() {
        this.setGameState = this.GO_GAME;
        timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_15);
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    setPauseGame() {
        this.setGameState = this.PAUSE_GAME;
        timer_R.iniTicksPerSecond(timer_R.TICKS_PER_SECOND_02);
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    setEndGame() {
        this.setGameState = this.END_GAME;
    }
    //=============================================================================
    //=============================================================================
    /**
     * Description placeholder
     *
     * @returns {boolean}
     */
    isStartGame() {
        if (this.gameState == this.START_GAME)
            return true;
        return false;
    }
    //=============================================================================
    //=============================================================================
    /**
     * Description placeholder
     *
     * @returns {boolean}
     */
    isGoGame() {
        if (this.gameState == this.GO_GAME)
            return true;
        return false;
    }
    //=============================================================================
    //=============================================================================
    /**
     * Description placeholder
     *
     * @returns {boolean}
     */
    isPauseGame() {
        if (this.gameState == this.PAUSE_GAME)
            return true;
        return false;
    }
    //=============================================================================
    //=============================================================================
    /**
     * Description placeholder
     *
     * @returns {boolean}
     */
    isEndGame() {
        if (this.gameState == this.END_GAME)
            return true;
        return false;
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    tickGame() {
        this.sprite = this.sprite + 1;
        if (this.sprite > 10000) {
            this.sprite = 1;
        }
        //console.log('GameState_C->tickGame = ' + this.sprite);
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
    } //tick () {
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    tickStartGame() {
        //console.log('GameState_C->tickStartGame = ' + this.sprite);
        gameStart_R.tick();
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    tickGoGame() {
        //console.log('GameState_C->tickGoGame = ' + this.sprite);
        gameContinue_R.tick();
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    tickPauseGame() {
        //console.log('GameState_C->tickPauseGame = ' + this.sprite);
        gamePause_R.tick();
    }
    //=============================================================================
    //=============================================================================
    /** Description placeholder */
    tickEndGame() {
        //console.log('GameState_C->tickEndGame = ' + this.sprite);
        gameEnd_R.tick();
    }
} //GameState_С
/**
 * Description placeholder
 *
 * @type {GameState_C}
 */
let gameState_R = new GameState_C();
gameState_R.iniM();
export { gameState_R, GameState_C };
if (global_R.print_module_start_finish)
    console.log('game_state.js -> module finish');
gameState_R.isOk = "OK"; //
