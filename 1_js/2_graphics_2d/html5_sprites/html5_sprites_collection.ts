/** 
 * @author AnBr75
 * @copyright Copyright (c) 2022, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 02.08.2022
 */

let Copyright_AnBr75 = 2022;

/**
* НАЗНАЧЕНИЕ
*Заполняем двумерный массив html5SpritesCollection_R.sprites. Это набор объектов class Tile_for_load_Image_C
* В нем ссылки на картинки, символ картинки, название картинки.
* четыре типа картинок - приключения, земля, предметы, монстры
*
* Также готовим два типа вспомогательных массивов -карт
* html5SpritesCollection_R.GroundsMapChars - карта по символу выдает порядковый номер в массиве html5SpritesCollection_R.sprites
* html5SpritesCollection_R.GroundsMapString - карта по символу выдает название картинки.
* есть три карты для разных слоев земли, предметов, монстров
*
* Пример использования:
* html5SpritesCollection_R.sprites[_type, _index].Image;
* _type = html5SpritesCollection_R.GROUNDS , _index = html5SpritesCollection_R.GroundsMapChars.get(html5SpritesCollection_R.GROUND_FLOOR)
*/


import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish) console.log('html5_sprites_collection.js -> module start');

import { Sprite_С } from './sprite_c.js';


//
class Html5SpritesCollection_C {
 
    public static NAME: string = "Html5SpritesCollection_C";
    public static PATH_TO_IMAGES: string = "3_resource/images";
    public static REZERV: number = 0;
    public static ADVENTURES: number = 1;
    public static GROUNDS: number = 2;
    public static ITEMS: number = 3;
    public static CREATURES: number = 4;
    public static REZERV_MAX_COUNT: number = 1;
    public static ADVENTURES_MAX_COUNT: number = 25;
    public static GROUNDS_MAX_COUNT: number = 8;
    public static ITEMS_MAX_COUNT: number = 20;
    public static CREATURES_MAX_COUNT: number = 15;

    //GROUNDS
    // так кодируются тайлы для слоя земли
    public static GROUND_NOTHING: number = 0;      // пустая область
    public static GROUND_STONE: number = 1;        // непробиваемый камень
    public static GROUND_SEND: number = 2;         // копаемый песок
    public static GROUND_FLOOR: number = 3;        // проходимый пол
    public static GROUND_WALL: number = 4;         // стена подземелья
    public static GROUND_WALL_FORTIFED: number = 5;// укрепленная стена подземелья
    public static GROUND_VEIN_GOLD: number = 6;    // золотая жила
    public static GROUND_VEIN_GEM: number = 7;     // драгоценный камень жила

    //ITEMS
    // так кодируются тайлы для слоя предметов
    public static ITEMS_NOTHING: number = 0;
    public static ITEMS_RING: number = 1;
    public static ITEMS_SWORD_1: number = 2;
    public static ITEMS_SWORD_2: number = 3;
    public static ITEMS_SWORD_3: number = 4;
    public static ITEMS_SHIELD: number = 5;
    public static ITEMS_ARMOR_1: number = 6;
    public static ITEMS_ARMOR_2: number = 7;
    public static ITEMS_ARMOR_3: number = 8;
    public static ITEMS_ARMOR_4: number = 9;
    public static ITEMS_ARMOR_5: number = 10;
    public static ITEMS_ARMOR_6: number = 11;
    public static ITEMS_FLOWER_1: number = 12;
    public static ITEMS_FLOWER_2: number = 13;
    public static ITEMS_FLOWER_3: number = 14;
    public static ITEMS_FLOWER_4: number = 15;
    public static ITEMS_FLOWER_5: number = 16;
    public static ITEMS_FLOWER_6: number = 17;
    public static ITEMS_POTION: number = 18;
    public static ITEMS_DOOR: number = 19;

    //CREATURES
    // так кодируются тайлы для слоя монстров
    public static CREATURES_NOTHING: number = 0;
    public static CREATURES_GHOST: number = 1;
    public static CREATURES_DRAGON: number = 2;
    public static CREATURES_GOBLIN: number = 3;
    public static CREATURES_HARPY: number = 4;
    public static CREATURES_DRUID: number = 5;
    public static CREATURES_VARNEY: number = 6;
    public static CREATURES_LICH: number = 7;
    public static CREATURES_MEDUSA: number = 8;
    public static CREATURES_MINOTAUR: number = 9;
    public static CREATURES_GENIE: number = 10;
    public static CREATURES_FIGHTER: number = 11;
    public static CREATURES_GARGOYLE: number = 12;
    public static CREATURES_SKELETON: number = 13;
    public static CREATURES_TITAN: number = 14;

    //HTMLImageElement[] | HTMLCanvasElement[]
    public sprites = new Array(5);

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    // ini
    //============================================================================
    iniM(): void {
        // Массив содержит картинки-тайлы для отображения на карте
        //html5SpritesCollection_R.sprites = new Array(5);
        this.sprites[Html5SpritesCollection_C.ADVENTURES] = new Array(Html5SpritesCollection_C.ADVENTURES_MAX_COUNT);
        this.sprites[Html5SpritesCollection_C.GROUNDS] = new Array(Html5SpritesCollection_C.GROUNDS_MAX_COUNT);
        this.sprites[Html5SpritesCollection_C.ITEMS] = new Array(Html5SpritesCollection_C.ITEMS_MAX_COUNT);
        this.sprites[Html5SpritesCollection_C.CREATURES] = new Array(Html5SpritesCollection_C.CREATURES_MAX_COUNT);
        //инициализируем массивы с картинками
        this.iniSprite(Html5SpritesCollection_C.ADVENTURES, Html5SpritesCollection_C.PATH_TO_IMAGES + "/adventures/ad_");
        this.iniSprite(Html5SpritesCollection_C.GROUNDS, Html5SpritesCollection_C.PATH_TO_IMAGES + "/grounds/gr_");
        this.iniSprite(Html5SpritesCollection_C.ITEMS, Html5SpritesCollection_C.PATH_TO_IMAGES + "/items/it_");
        this.iniSprite(Html5SpritesCollection_C.CREATURES, Html5SpritesCollection_C.PATH_TO_IMAGES + "/creatures/cr_");

        this.iniSpriteString();
    }
    //============================================================================

    // get tile Sprite
    // this.getSprite(this.GROUNDS,2);
    //============================================================================
    getSprite(type: number, index: number): HTMLImageElement | HTMLCanvasElement {
        //
        return this.sprites[type][index].Image;
    }
    //===========================================================================

    // get Sprite String
    // this.getTileString(this.GROUNDS,3);
    //============================================================================
    getSpriteString(type: number, index: number): string {
        return this.sprites[type][index].NameImage;
    }
    //============================================================================

    // get Height Sprite
    //============================================================================
    getHeightSprite(type: number, index: number): number {
        return this.sprites[type][index].Image.height;
    }
    //============================================================================

    // get Width Sprite
    //============================================================================
    getWidthSprite(type: number, index: number): number {
        return this.sprites[type][index].Image.width;
    }
    //============================================================================

    // get Left Sprite
    //============================================================================
    getLeftSprite(type: number, index: number, middle: number): number {
        let width = this.sprites[type][index].Image.width;
        let left = middle - width / 2;
        return left;
    }
    //============================================================================

    // ini Image
    //============================================================================
    iniSprite(type: number, path: string): void {
        /*
        класс
        Sprite_С содержит поля:
        Image содержит картинку для
        Path      содержит путь по которому была загружена картинка
        NameImage    содержит название картинки
        */

        let length = this.sprites[type].length;
        //console.log(" _type = " + _type + " _path = " + _path);
        //console.log(" length = " + length);
        // https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement :
        // "The Image() constructor, taking two optional unsigned long, 
        // the width and the height of the resource, creates an instance 
        // of HTMLImageElement not inserted in a DOM tree."
        for (let i = 0; i < length; i++) {
            this.sprites[type][i] = new Sprite_С();
            //this.sprites[_type][i].Image= new Image();//Конструктор HTML5
            this.sprites[type][i].Image = document.createElement('img'); // Используем HTMLImageElement
            this.sprites[type][i].PathToImage = path + i + ".png";
            this.sprites[type][i].Image.src = this.sprites[type][i].PathToImage;
     
            this.sprites[type][i].NameImage = "Image str (картинка №) = " + i;
            //console.log(" OK " + _path + i + ".png");
        }
    }
    //============================================================================

    //инициализируем массивы с картинками
    //============================================================================
    iniSpriteString() {
        ///////////////////////////////////////////////////////////////////
        //GROUNDS
        // массив по номерам тайлов  имена тайлов для слоя земли
        this.sprites[Html5SpritesCollection_C.GROUNDS][0].NameImage = "nothing(пустая область)"; // пустая область
        this.sprites[Html5SpritesCollection_C.GROUNDS][1].NameImage = "stone(камень)"; // непробиваемый камень
        this.sprites[Html5SpritesCollection_C.GROUNDS][2].NameImage = "sand(копаемый песок)"; // копаемый песок
        this.sprites[Html5SpritesCollection_C.GROUNDS][3].NameImage = "floor(проходимый пол)"; // проходимый пол
        this.sprites[Html5SpritesCollection_C.GROUNDS][4].NameImage = "wall(стена подземелья) "; // стена подземелья
        this.sprites[Html5SpritesCollection_C.GROUNDS][5].NameImage = "fortified wall(укрепленная стена подземелья) "; //укрепленная стена подземелья
        this.sprites[Html5SpritesCollection_C.GROUNDS][6].NameImage = "gold vein(золотая жила)"; //золотая жила
        this.sprites[Html5SpritesCollection_C.GROUNDS][7].NameImage = "gem vein(драгоценный камень жила)"; //драгоценный камень жила

        ///////////////////////////////////////////////////////////////////
        //ITEMS
        //массив по номерам тайлов их название для слоя предметов
        this.sprites[Html5SpritesCollection_C.ITEMS][0].NameImage = "nothing(пустая область)"; //nothing(пустая область)
        this.sprites[Html5SpritesCollection_C.ITEMS][1].NameImage = "ring(кольцо)"; //1-1_item_ring    кольцо
        this.sprites[Html5SpritesCollection_C.ITEMS][2].NameImage = "sword(первый меч)"; //2-2_item_sword   первый меч
        this.sprites[Html5SpritesCollection_C.ITEMS][3].NameImage = "sword2(второй меч)"; //3-2_item_sword2  второй меч
        this.sprites[Html5SpritesCollection_C.ITEMS][4].NameImage = "sword3(третий меч-не прозрачный фон)"; //4-2_item_sword3  третий меч - не прозрачный фон
        this.sprites[Html5SpritesCollection_C.ITEMS][5].NameImage = "shield(щит)"; //5-3_item_shield  щит
        this.sprites[Html5SpritesCollection_C.ITEMS][6].NameImage = "armor(первый доспех)"; //6-4_item_armor   первый доспех
        this.sprites[Html5SpritesCollection_C.ITEMS][7].NameImage = "armor2(второй доспех)"; //7-4_item_armor2  второй доспех
        this.sprites[Html5SpritesCollection_C.ITEMS][8].NameImage = "armor3(третий доспех)"; //8-4_item_armor3  третий доспех
        this.sprites[Html5SpritesCollection_C.ITEMS][9].NameImage = "armor4(четвертый доспех)"; //9-4_item_armor4  четвертый доспех
        this.sprites[Html5SpritesCollection_C.ITEMS][10].NameImage = "armor5(пятый доспех)"; //10-4_item_armor5 пятый доспех
        this.sprites[Html5SpritesCollection_C.ITEMS][11].NameImage = "armor6(шестой доспех-не прозрачный фон)"; //11-4_item_armor6 шестой доспех  - не прозрачный фон
        this.sprites[Html5SpritesCollection_C.ITEMS][12].NameImage = "flower(первый цветок)"; //12-5_item_flower первый цветок
        this.sprites[Html5SpritesCollection_C.ITEMS][13].NameImage = "flower2(второй цветок)"; //13-5_item_flower2 второй цветок
        this.sprites[Html5SpritesCollection_C.ITEMS][14].NameImage = "flower3(третий цветок)"; //14-5_item_flower3 третий цветок
        this.sprites[Html5SpritesCollection_C.ITEMS][15].NameImage = "flower4(четвертый цветок)"; //15-5_item_flower4 четвертый цветок
        this.sprites[Html5SpritesCollection_C.ITEMS][16].NameImage = "flower5(пятый цветок)"; //16-5_item_flower5 пятый цветок
        this.sprites[Html5SpritesCollection_C.ITEMS][17].NameImage = "flower6(шестой цветок-не прозрачный фон)"; //17-5_item_flower6 шестой цветок  - не прозрачный фон
        this.sprites[Html5SpritesCollection_C.ITEMS][18].NameImage = "potion(элексир)"; //18-6_item_potion  элексир
        this.sprites[Html5SpritesCollection_C.ITEMS][19].NameImage = "door(дверь)"; //19-7_item_door    дверь

        ///////////////////////////////////////////////////////////////////
        //CREATURES
        //массив по номерам тайлов их название для слоя монстров
        this.sprites[Html5SpritesCollection_C.CREATURES][0].NameImage = "nothing(пустая область)"; //nothing(пустая область)
        this.sprites[Html5SpritesCollection_C.CREATURES][1].NameImage = "ghost(привидение)"; //1_monster_ghost     привидение
        this.sprites[Html5SpritesCollection_C.CREATURES][2].NameImage = "dragon(дракон)"; //2_monster_dragon    дракон
        this.sprites[Html5SpritesCollection_C.CREATURES][3].NameImage = "goblin(гоблин)"; //3_monster_goblin    гоблин
        this.sprites[Html5SpritesCollection_C.CREATURES][4].NameImage = "harpy(гарпия)"; //4_monster_harpy     гарпия
        this.sprites[Html5SpritesCollection_C.CREATURES][5].NameImage = "druid(друид)"; //5_monster_druid     друид
        this.sprites[Html5SpritesCollection_C.CREATURES][6].NameImage = "varney(псоглавый)"; //6_monster_varney    сет
        this.sprites[Html5SpritesCollection_C.CREATURES][7].NameImage = "lich(лич)"; //7_monster_lich      лич
        this.sprites[Html5SpritesCollection_C.CREATURES][8].NameImage = "medusa(медуза)"; //8_monster_medusa    медуза
        this.sprites[Html5SpritesCollection_C.CREATURES][9].NameImage = "minotaur(минотавр)"; //9_monster_minotaur  минотавр
        this.sprites[Html5SpritesCollection_C.CREATURES][10].NameImage = "genie(джин)"; //10_monster_genie    джин
        this.sprites[Html5SpritesCollection_C.CREATURES][11].NameImage = "fighter(файтер-рыцарь)"; //11_monster_fighter  файтер(рыцарь)
        this.sprites[Html5SpritesCollection_C.CREATURES][12].NameImage = "gargoyle(гаргулия)"; //12_monster_gargoyle гаргулия
        this.sprites[Html5SpritesCollection_C.CREATURES][13].NameImage = "skeleton(скелет)"; //13_monster_skeleton скелет
        this.sprites[Html5SpritesCollection_C.CREATURES][14].NameImage = "titan(титан)"; //14_monster_titan    титан
    }
    //============================================================================
} //SpritesMap_2D

export { Html5SpritesCollection_C };
if (global_R.print_module_start_finish) console.log('html5_sprites_collection.js -> module finish');