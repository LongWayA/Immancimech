import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('background.js -> module start');
import { html5Canvas_R, Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { html5Sprites_R } from '../../2_graphics_2d/html5_sprites/html5_sprites.js';
import { TileForBackground_C } from './tile_for_background_c.js';
class Background_C {
    NAME = "background_R";
    isOk = "";
    MAP_TILE_COUNT_WIDTH = 24;
    MAP_TILE_COUNT_HEIGHT = 9;
    TILE_WIDTH = 50;
    TILE_HEIGHT = 50;
    Map_2d = new Array(1);
    savedGround = `111111111111111111111111
122222222222222222222221
133334333333333343333331
122224222222222242222221
133333333433333333343331
122222222422222222242221
133334333333333343333331
122224222222222242222221
111111111111111111111111`;
    constructor() {
    }
    iniM() {
        this.iniMap_2d();
        this.loadMapFromScripts();
    }
    startM() {
    }
    isMoove(x, y) {
        x = Math.floor(x / this.TILE_WIDTH);
        y = Math.floor(y / this.TILE_HEIGHT);
        if ((this.Map_2d[y][x].char == "1") || (this.Map_2d[y][x].char == "3")) {
            return false;
        }
        else {
            return true;
        }
    }
    iniMap_2d() {
        let height = this.TILE_HEIGHT;
        let width = this.TILE_WIDTH;
        let number = 0;
        this.Map_2d = new Array(this.MAP_TILE_COUNT_HEIGHT);
        for (let y = 0; y < this.Map_2d.length; y++) {
            this.Map_2d[y] = new Array(this.MAP_TILE_COUNT_WIDTH);
            for (let x = 0; x < this.MAP_TILE_COUNT_WIDTH; x++) {
                number = number + 1;
                this.Map_2d[y][x] = new TileForBackground_C(this.numToChar(0), number, width, height, html5Sprites_R.GROUNDS);
            }
        }
    }
    getTileInMap_2d(x, y) {
        return this.Map_2d[y][x];
    }
    print() {
        let line = "";
        for (let y = 0; y < this.Map_2d.length; y++) {
            for (let x = 0; x < this.MAP_TILE_COUNT_WIDTH; x++) {
                line = line + this.Map_2d[y][x].char + "(" + y + "," + x + ") ";
            }
            console.log("Sector-> " + line);
            line = "";
        }
    }
    drow() {
        for (let y = 0; y < this.Map_2d.length; y++) {
            for (let x = 0; x < this.MAP_TILE_COUNT_WIDTH; x++) {
                html5Sprites_R.drowSprite(this.Map_2d[y][x].type, this.Map_2d[y][x].index, x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile, this.Map_2d[y][x].widthTile, this.Map_2d[y][x].heightTile);
                html5Canvas_R.drawText(this.Map_2d[y][x].char, x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile, Html5Canvas_C.ITALIC_15PT_ARIAL, Html5Canvas_C.GREEN, 1);
                html5Canvas_R.drawRect(x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile, this.Map_2d[y][x].widthTile, this.Map_2d[y][x].heightTile, 1, Html5Canvas_C.BLUE, 0);
            }
        }
    }
    loadMapFromScripts() {
        let pozChar = 0;
        for (let y = 0; y < this.Map_2d.length; y++) {
            for (let x = 0; x < this.MAP_TILE_COUNT_WIDTH; x++) {
                this.Map_2d[y][x].setCharTypeIndex(this.savedGround[pozChar], html5Sprites_R.GROUNDS);
                pozChar = pozChar + 1;
            }
            pozChar = pozChar + 1;
        }
    }
    numToChar(num) {
        let numToCharA = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f'];
        let char = numToCharA[num];
        return char;
    }
    charToNum(char) {
        let charToNumS = {
            '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
            '7': 7, '8': 8, '9': 9,
            'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15
        };
        let num = charToNumS[char];
        return num;
    }
}
;
let background_R = new Background_C();
background_R.iniM();
background_R.isOk = "OK";
export { background_R, Background_C };
if (global_R.print_module_start_finish)
    console.log('background.js -> module finish');
