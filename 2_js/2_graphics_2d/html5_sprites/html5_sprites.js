import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('html5_sprites.js -> module start');
import { html5Canvas_R } from '../html5_canvas/html5_canvas.js';
import { html5SpritesCollection_R } from './html5_sprites_collection.js';
class Html5Sprites_C {
    NAME = "html5Sprites_R";
    isOk = " ";
    out_html5Canvas_R = html5Canvas_R;
    out_html5SpritesCollection_R = html5SpritesCollection_R;
    REZERV = html5SpritesCollection_R.REZERV;
    ADVENTURES = html5SpritesCollection_R.ADVENTURES;
    GROUNDS = html5SpritesCollection_R.GROUNDS;
    ITEMS = html5SpritesCollection_R.ITEMS;
    CREATURES = html5SpritesCollection_R.CREATURES;
    GROUND_NOTHING = html5SpritesCollection_R.GROUND_NOTHING;
    GROUND_STONE = html5SpritesCollection_R.GROUND_STONE;
    GROUND_SEND = html5SpritesCollection_R.GROUND_SEND;
    GROUND_FLOOR = html5SpritesCollection_R.GROUND_FLOOR;
    GROUND_WALL = html5SpritesCollection_R.GROUND_WALL;
    GROUND_WALL_FORTIFED = html5SpritesCollection_R.GROUND_WALL_FORTIFED;
    GROUND_VEIN_GOLD = html5SpritesCollection_R.GROUND_VEIN_GOLD;
    GROUND_VEIN_GEM = html5SpritesCollection_R.GROUND_VEIN_GEM;
    ITEMS_NOTHING = html5SpritesCollection_R.ITEMS_NOTHING;
    ITEMS_RING = html5SpritesCollection_R.ITEMS_RING;
    ITEMS_SWORD_1 = html5SpritesCollection_R.ITEMS_SWORD_1;
    ITEMS_SWORD_2 = html5SpritesCollection_R.ITEMS_SWORD_2;
    ITEMS_SWORD_3 = html5SpritesCollection_R.ITEMS_SWORD_3;
    ITEMS_SHIELD = html5SpritesCollection_R.ITEMS_SHIELD;
    ITEMS_ARMOR_1 = html5SpritesCollection_R.ITEMS_ARMOR_1;
    ITEMS_ARMOR_2 = html5SpritesCollection_R.ITEMS_ARMOR_2;
    ITEMS_ARMOR_3 = html5SpritesCollection_R.ITEMS_ARMOR_3;
    ITEMS_ARMOR_4 = html5SpritesCollection_R.ITEMS_ARMOR_4;
    ITEMS_ARMOR_5 = html5SpritesCollection_R.ITEMS_ARMOR_5;
    ITEMS_ARMOR_6 = html5SpritesCollection_R.ITEMS_ARMOR_6;
    ITEMS_FLOWER_1 = html5SpritesCollection_R.ITEMS_FLOWER_1;
    ITEMS_FLOWER_2 = html5SpritesCollection_R.ITEMS_FLOWER_2;
    ITEMS_FLOWER_3 = html5SpritesCollection_R.ITEMS_FLOWER_3;
    ITEMS_FLOWER_4 = html5SpritesCollection_R.ITEMS_FLOWER_4;
    ITEMS_FLOWER_5 = html5SpritesCollection_R.ITEMS_FLOWER_5;
    ITEMS_FLOWER_6 = html5SpritesCollection_R.ITEMS_FLOWER_6;
    ITEMS_POTION = html5SpritesCollection_R.ITEMS_POTION;
    ITEMS_DOOR = html5SpritesCollection_R.ITEMS_DOOR;
    CREATURES_NOTHING = html5SpritesCollection_R.CREATURES_NOTHING;
    CREATURES_GHOST = html5SpritesCollection_R.CREATURES_GHOST;
    CREATURES_DRAGON = html5SpritesCollection_R.CREATURES_DRAGON;
    CREATURES_GOBLIN = html5SpritesCollection_R.CREATURES_GOBLIN;
    CREATURES_HARPY = html5SpritesCollection_R.CREATURES_HARPY;
    CREATURES_DRUID = html5SpritesCollection_R.CREATURES_DRUID;
    CREATURES_VARNEY = html5SpritesCollection_R.CREATURES_VARNEY;
    CREATURES_LICH = html5SpritesCollection_R.CREATURES_LICH;
    CREATURES_MEDUSA = html5SpritesCollection_R.CREATURES_MEDUSA;
    CREATURES_MINOTAUR = html5SpritesCollection_R.CREATURES_MINOTAUR;
    CREATURES_GENIE = html5SpritesCollection_R.CREATURES_GENIE;
    CREATURES_FIGHTER = html5SpritesCollection_R.CREATURES_FIGHTER;
    CREATURES_GARGOYLE = html5SpritesCollection_R.CREATURES_GARGOYLE;
    CREATURES_SKELETON = html5SpritesCollection_R.CREATURES_SKELETON;
    CREATURES_TITAN = html5SpritesCollection_R.CREATURES_TITAN;
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
