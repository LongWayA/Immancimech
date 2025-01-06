let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('html5_sprites_collection.js -> module start');
import { Sprite_С } from './sprite_c.js';
class Html5SpritesCollection_C {
    NAME = "Html5SpritesCollection_C";
    isOk = " ";
    PATH_TO_IMAGES = "4_resource/images";
    REZERV = 0;
    ADVENTURES = 1;
    GROUNDS = 2;
    ITEMS = 3;
    CREATURES = 4;
    REZERV_MAX_COUNT = 1;
    ADVENTURES_MAX_COUNT = 25;
    GROUNDS_MAX_COUNT = 8;
    ITEMS_MAX_COUNT = 20;
    CREATURES_MAX_COUNT = 15;
    GROUND_NOTHING = 0;
    GROUND_STONE = 1;
    GROUND_SEND = 2;
    GROUND_FLOOR = 3;
    GROUND_WALL = 4;
    GROUND_WALL_FORTIFED = 5;
    GROUND_VEIN_GOLD = 6;
    GROUND_VEIN_GEM = 7;
    ITEMS_NOTHING = 0;
    ITEMS_RING = 1;
    ITEMS_SWORD_1 = 2;
    ITEMS_SWORD_2 = 3;
    ITEMS_SWORD_3 = 4;
    ITEMS_SHIELD = 5;
    ITEMS_ARMOR_1 = 6;
    ITEMS_ARMOR_2 = 7;
    ITEMS_ARMOR_3 = 8;
    ITEMS_ARMOR_4 = 9;
    ITEMS_ARMOR_5 = 10;
    ITEMS_ARMOR_6 = 11;
    ITEMS_FLOWER_1 = 12;
    ITEMS_FLOWER_2 = 13;
    ITEMS_FLOWER_3 = 14;
    ITEMS_FLOWER_4 = 15;
    ITEMS_FLOWER_5 = 16;
    ITEMS_FLOWER_6 = 17;
    ITEMS_POTION = 18;
    ITEMS_DOOR = 19;
    CREATURES_NOTHING = 0;
    CREATURES_GHOST = 1;
    CREATURES_DRAGON = 2;
    CREATURES_GOBLIN = 3;
    CREATURES_HARPY = 4;
    CREATURES_DRUID = 5;
    CREATURES_VARNEY = 6;
    CREATURES_LICH = 7;
    CREATURES_MEDUSA = 8;
    CREATURES_MINOTAUR = 9;
    CREATURES_GENIE = 10;
    CREATURES_FIGHTER = 11;
    CREATURES_GARGOYLE = 12;
    CREATURES_SKELETON = 13;
    CREATURES_TITAN = 14;
    sprites = new Array(5);
    constructor() {
    }
    iniM() {
        this.sprites[this.ADVENTURES] = new Array(this.ADVENTURES_MAX_COUNT);
        this.sprites[this.GROUNDS] = new Array(this.GROUNDS_MAX_COUNT);
        this.sprites[this.ITEMS] = new Array(this.ITEMS_MAX_COUNT);
        this.sprites[this.CREATURES] = new Array(this.CREATURES_MAX_COUNT);
        this.iniSprite(this.ADVENTURES, this.PATH_TO_IMAGES + "/adventures/advans_");
        this.iniSprite(this.GROUNDS, this.PATH_TO_IMAGES + "/grounds/gr_");
        this.iniSprite(this.ITEMS, this.PATH_TO_IMAGES + "/items/it_");
        this.iniSprite(this.CREATURES, this.PATH_TO_IMAGES + "/creatures/mons_");
        this.iniSpriteString();
    }
    startM() {
    }
    getSprite(type, index) {
        return this.sprites[type][index].Image;
    }
    getSpriteString(type, index) {
        return this.sprites[type][index].NameImage;
    }
    getHeightSprite(type, index) {
        return this.sprites[type][index].Image.height;
    }
    getWidthSprite(type, index) {
        return this.sprites[type][index].Image.width;
    }
    getLeftSprite(type, index, middle) {
        let width = this.sprites[type][index].Image.width;
        let left = middle - width / 2;
        return left;
    }
    iniSprite(type, path) {
        let length = this.sprites[type].length;
        for (let i = 0; i < length; i++) {
            this.sprites[type][i] = new Sprite_С();
            this.sprites[type][i].Image = document.createElement('img');
            this.sprites[type][i].Image.src = path + i + ".png";
            this.sprites[type][i].PathToImage = path + i + ".png";
            this.sprites[type][i].NameImage = "Image str (картинка №) = " + i;
        }
    }
    iniSpriteString() {
        this.sprites[this.GROUNDS][0].NameImage = "nothing(пустая область)";
        this.sprites[this.GROUNDS][1].NameImage = "stone(камень)";
        this.sprites[this.GROUNDS][2].NameImage = "sand(копаемый песок)";
        this.sprites[this.GROUNDS][3].NameImage = "floor(проходимый пол)";
        this.sprites[this.GROUNDS][4].NameImage = "wall(стена подземелья) ";
        this.sprites[this.GROUNDS][5].NameImage = "fortified wall(укрепленная стена подземелья) ";
        this.sprites[this.GROUNDS][6].NameImage = "gold vein(золотая жила)";
        this.sprites[this.GROUNDS][7].NameImage = "gem vein(драгоценный камень жила)";
        this.sprites[this.ITEMS][0].NameImage = "nothing(пустая область)";
        this.sprites[this.ITEMS][1].NameImage = "ring(кольцо)";
        this.sprites[this.ITEMS][2].NameImage = "sword(первый меч)";
        this.sprites[this.ITEMS][3].NameImage = "sword2(второй меч)";
        this.sprites[this.ITEMS][4].NameImage = "sword3(третий меч-не прозрачный фон)";
        this.sprites[this.ITEMS][5].NameImage = "shield(щит)";
        this.sprites[this.ITEMS][6].NameImage = "armor(первый доспех)";
        this.sprites[this.ITEMS][7].NameImage = "armor2(второй доспех)";
        this.sprites[this.ITEMS][8].NameImage = "armor3(третий доспех)";
        this.sprites[this.ITEMS][9].NameImage = "armor4(четвертый доспех)";
        this.sprites[this.ITEMS][10].NameImage = "armor5(пятый доспех)";
        this.sprites[this.ITEMS][11].NameImage = "armor6(шестой доспех-не прозрачный фон)";
        this.sprites[this.ITEMS][12].NameImage = "flower(первый цветок)";
        this.sprites[this.ITEMS][13].NameImage = "flower2(второй цветок)";
        this.sprites[this.ITEMS][14].NameImage = "flower3(третий цветок)";
        this.sprites[this.ITEMS][15].NameImage = "flower4(четвертый цветок)";
        this.sprites[this.ITEMS][16].NameImage = "flower5(пятый цветок)";
        this.sprites[this.ITEMS][17].NameImage = "flower6(шестой цветок-не прозрачный фон)";
        this.sprites[this.ITEMS][18].NameImage = "potion(элексир)";
        this.sprites[this.ITEMS][19].NameImage = "door(дверь)";
        this.sprites[this.CREATURES][0].NameImage = "nothing(пустая область)";
        this.sprites[this.CREATURES][1].NameImage = "ghost(привидение)";
        this.sprites[this.CREATURES][2].NameImage = "dragon(дракон)";
        this.sprites[this.CREATURES][3].NameImage = "goblin(гоблин)";
        this.sprites[this.CREATURES][4].NameImage = "harpy(гарпия)";
        this.sprites[this.CREATURES][5].NameImage = "druid(друид)";
        this.sprites[this.CREATURES][6].NameImage = "varney(псоглавый)";
        this.sprites[this.CREATURES][7].NameImage = "lich(лич)";
        this.sprites[this.CREATURES][8].NameImage = "medusa(медуза)";
        this.sprites[this.CREATURES][9].NameImage = "minotaur(минотавр)";
        this.sprites[this.CREATURES][10].NameImage = "genie(джин)";
        this.sprites[this.CREATURES][11].NameImage = "fighter(файтер-рыцарь)";
        this.sprites[this.CREATURES][12].NameImage = "gargoyle(гаргулия)";
        this.sprites[this.CREATURES][13].NameImage = "skeleton(скелет)";
        this.sprites[this.CREATURES][14].NameImage = "titan(титан)";
    }
}
let html5SpritesCollection_R = new Html5SpritesCollection_C();
html5SpritesCollection_R.iniM();
export { html5SpritesCollection_R, Html5SpritesCollection_C };
if (global_R.print_module_start_finish)
    console.log('html5_sprites_collection.js -> module finish');
html5SpritesCollection_R.isOk = "OK";
