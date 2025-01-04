import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('tile_for_background_c.js -> module start');
class TileForBackground_C {
    charToIndex;
    char;
    number;
    type;
    index;
    heightTile;
    widthTile;
    immortals;
    creatures;
    items;
    constructor(char, number, widthTile, heightTile, type) {
        this.charToIndex = { '1': 4, '2': 3, '3': 5, '4': 7 };
        this.char = char;
        this.number = number;
        this.type = type;
        this.index = this.charToIndex[this.char];
        this.heightTile = heightTile;
        this.widthTile = widthTile;
        this.immortals = -1;
        this.creatures = -1;
        this.items = -1;
    }
    setCharTypeIndex(char, type) {
        this.char = char;
        this.type = type;
        this.index = this.charToIndex[this.char];
    }
}
let TileForBackground_isOk = "OK";
export { TileForBackground_C, TileForBackground_isOk };
if (global_R.print_module_start_finish)
    console.log('tile_for_background_c.js -> module finish');
