let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('html5_sprites.js -> module start');
import { html5Canvas_R } from '../html5_canvas/html5_canvas.js';
import { html5SpritesCollection_R, Html5SpritesCollection_C } from './html5_sprites_collection.js';
class Html5Sprites_C {
    static NAME = "html5Sprites_R";
    isOk = " ";
    out_html5Canvas_R = html5Canvas_R;
    out_html5SpritesCollection_R = html5SpritesCollection_R;
    static REZERV = Html5SpritesCollection_C.REZERV;
    static ADVENTURES = Html5SpritesCollection_C.ADVENTURES;
    static GROUNDS = Html5SpritesCollection_C.GROUNDS;
    static ITEMS = Html5SpritesCollection_C.ITEMS;
    static CREATURES = Html5SpritesCollection_C.CREATURES;
    static GROUND_NOTHING = Html5SpritesCollection_C.GROUND_NOTHING;
    static GROUND_STONE = Html5SpritesCollection_C.GROUND_STONE;
    static GROUND_SEND = Html5SpritesCollection_C.GROUND_SEND;
    static GROUND_FLOOR = Html5SpritesCollection_C.GROUND_FLOOR;
    static GROUND_WALL = Html5SpritesCollection_C.GROUND_WALL;
    static GROUND_WALL_FORTIFED = Html5SpritesCollection_C.GROUND_WALL_FORTIFED;
    static GROUND_VEIN_GOLD = Html5SpritesCollection_C.GROUND_VEIN_GOLD;
    static GROUND_VEIN_GEM = Html5SpritesCollection_C.GROUND_VEIN_GEM;
    static ITEMS_NOTHING = Html5SpritesCollection_C.ITEMS_NOTHING;
    static ITEMS_RING = Html5SpritesCollection_C.ITEMS_RING;
    static ITEMS_SWORD_1 = Html5SpritesCollection_C.ITEMS_SWORD_1;
    static ITEMS_SWORD_2 = Html5SpritesCollection_C.ITEMS_SWORD_2;
    static ITEMS_SWORD_3 = Html5SpritesCollection_C.ITEMS_SWORD_3;
    static ITEMS_SHIELD = Html5SpritesCollection_C.ITEMS_SHIELD;
    static ITEMS_ARMOR_1 = Html5SpritesCollection_C.ITEMS_ARMOR_1;
    static ITEMS_ARMOR_2 = Html5SpritesCollection_C.ITEMS_ARMOR_2;
    static ITEMS_ARMOR_3 = Html5SpritesCollection_C.ITEMS_ARMOR_3;
    static ITEMS_ARMOR_4 = Html5SpritesCollection_C.ITEMS_ARMOR_4;
    static ITEMS_ARMOR_5 = Html5SpritesCollection_C.ITEMS_ARMOR_5;
    static ITEMS_ARMOR_6 = Html5SpritesCollection_C.ITEMS_ARMOR_6;
    static ITEMS_FLOWER_1 = Html5SpritesCollection_C.ITEMS_FLOWER_1;
    static ITEMS_FLOWER_2 = Html5SpritesCollection_C.ITEMS_FLOWER_2;
    static ITEMS_FLOWER_3 = Html5SpritesCollection_C.ITEMS_FLOWER_3;
    static ITEMS_FLOWER_4 = Html5SpritesCollection_C.ITEMS_FLOWER_4;
    static ITEMS_FLOWER_5 = Html5SpritesCollection_C.ITEMS_FLOWER_5;
    static ITEMS_FLOWER_6 = Html5SpritesCollection_C.ITEMS_FLOWER_6;
    static ITEMS_POTION = Html5SpritesCollection_C.ITEMS_POTION;
    static ITEMS_DOOR = Html5SpritesCollection_C.ITEMS_DOOR;
    static CREATURES_NOTHING = Html5SpritesCollection_C.CREATURES_NOTHING;
    static CREATURES_GHOST = Html5SpritesCollection_C.CREATURES_GHOST;
    static CREATURES_DRAGON = Html5SpritesCollection_C.CREATURES_DRAGON;
    static CREATURES_GOBLIN = Html5SpritesCollection_C.CREATURES_GOBLIN;
    static CREATURES_HARPY = Html5SpritesCollection_C.CREATURES_HARPY;
    static CREATURES_DRUID = Html5SpritesCollection_C.CREATURES_DRUID;
    static CREATURES_VARNEY = Html5SpritesCollection_C.CREATURES_VARNEY;
    static CREATURES_LICH = Html5SpritesCollection_C.CREATURES_LICH;
    static CREATURES_MEDUSA = Html5SpritesCollection_C.CREATURES_MEDUSA;
    static CREATURES_MINOTAUR = Html5SpritesCollection_C.CREATURES_MINOTAUR;
    static CREATURES_GENIE = Html5SpritesCollection_C.CREATURES_GENIE;
    static CREATURES_FIGHTER = Html5SpritesCollection_C.CREATURES_FIGHTER;
    static CREATURES_GARGOYLE = Html5SpritesCollection_C.CREATURES_GARGOYLE;
    static CREATURES_SKELETON = Html5SpritesCollection_C.CREATURES_SKELETON;
    static CREATURES_TITAN = Html5SpritesCollection_C.CREATURES_TITAN;
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    drowSprite(type, index, imageLeft, imageTop, imageWidth = 0, imageHeight = 0) {
        let image = this.out_html5SpritesCollection_R.getSprite(type, index);
        this.out_html5Canvas_R.drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
    }
}
let html5Sprites_R = new Html5Sprites_C;
html5Sprites_R.iniM();
export { html5Sprites_R, Html5Sprites_C };
if (global_R.print_module_start_finish)
    console.log('html5_sprites.js -> module finish');
html5Sprites_R.isOk = "OK";