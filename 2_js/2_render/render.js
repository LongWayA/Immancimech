import { global_R } from '../global.js';
if (global_R.print_module_start_finish)
    console.log('render.js -> module start');
import { html5Canvas_R } from './html5_canvas/html5_canvas.js';
import { drawGameStart_R } from './drow_game_start.js';
import { drawGameContinue_R } from './drow_game_continue.js';
import { drawGamePause_R } from './drow_game_pause.js';
import { drawGameEnd_R } from './drow_game_end.js';
class Render_C {
    NAME = "render_R";
    isOk = "";
    out_Game = null;
    widthCanvas = 0;
    heightCanvas = 0;
    constructor() {
    }
    iniM() {
        this.widthCanvas = html5Canvas_R.width_OUT;
        this.heightCanvas = html5Canvas_R.height_OUT;
    }
    startM(Game) {
        this.out_Game = Game;
    }
    drawGameStart() {
        drawGameStart_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    drowGameGo() {
        drawGameContinue_R.tick(this.out_Game);
    }
    drawGamePaused() {
        drawGamePause_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
    drawGameEnd() {
        drawGameEnd_R.tick(this.out_Game, this.widthCanvas, this.heightCanvas);
    }
}
let render_R = new Render_C();
render_R.iniM();
export { render_R };
if (global_R.print_module_start_finish)
    console.log('render.js -> module finish');
render_R.isOk = "OK";
