let Copyright_AnBr75 = 2024;
import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('immortals.js -> module start');
import { html5Canvas_R, Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { html5Sprites_R, Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';
import { Immortal_C } from './immortal_c.js';
class Immortals_C {
    NAME = "Immortals_C";
    isOk = "";
    List = new Array(3);
    constructor() {
    }
    iniM() {
        let type = Html5Sprites_C.CREATURES;
        let index = Html5Sprites_C.CREATURES_MINOTAUR;
        let index2 = Html5Sprites_C.CREATURES_DRAGON;
        this.List[1] = new Immortal_C(1, type, index, 450, 150, 50, 50, 100, 100, 0, 2);
        this.List[2] = new Immortal_C(2, type, index2, 200, 250, 50, 50, 100, 100, 0, 1);
    }
    startM() {
    }
    getImmortal(num) {
        return this.List[num];
    }
    update(ground) {
        this.List[2].pointViewAngle = this.List[2].pointViewAngle + (Math.PI / 2) / 20;
        this.List[1].run(ground);
        this.List[2].run(ground);
    }
    drow() {
        for (let i = 1; i < this.List.length; i++) {
            html5Sprites_R.drowSprite(this.List[i].type, this.List[i].index, this.List[i].imageLeft, this.List[i].imageTop);
            html5Canvas_R.drawRect(this.List[i].imageLeft, this.List[i].imageTop, this.List[i].imageWidth, this.List[i].imageHeight, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.BLUE, 0);
            html5Canvas_R.drawText("point_angle = " + this.List[i].point_view_angle, this.List[i].imageLeft, this.List[i].imageTop - 70, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.BLUE, 1);
            html5Canvas_R.drawText("x = " + this.List[i].imageLeft, this.List[i].imageLeft, this.List[i].imageTop - 40, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.BLUE, 1);
            html5Canvas_R.drawText("y = " + this.List[i].imageTop, this.List[i].imageLeft + 80, this.List[i].imageTop - 40, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.BLUE, 1);
            html5Canvas_R.drawText(html5Sprites_R.out_html5SpritesCollection_R.getSpriteString(this.List[i].type, this.List[i].index), this.List[i].imageLeft, this.List[i].imageTop - 15, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.BLUE, 1);
            html5Canvas_R.drawCreaturesCircle(this.List[i].pointLeft, this.List[i].pointTop, this.List[i].pointViewRadius, this.List[i].pointViewAngle, Html5Canvas_C.LINE_WIDTH_1, Html5Canvas_C.RED);
        }
    }
}
let immortals_R = new Immortals_C();
immortals_R.iniM();
export { immortals_R, Immortals_C };
if (global_R.print_module_start_finish)
    console.log('immortals.js -> module finish');
immortals_R.isOk = "OK";
