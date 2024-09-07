// @ts-check
/**
 * @module html5_sprites
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -02.08.2022-02.01.2023-18.02.2023-1.04m.2023-
 * @version Last_modified -24.02m.2024-
 */
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
import { global_R } from '../../global/global.js';
if (global_R.print_module_start_finish)
    console.log('html5_sprites.js -> module start');
import { html5Canvas_R } from '../html5_canvas/html5_canvas_h.js';
import { html5SpritesCollection_R } from './html5_sprites_collection.js';
//
/**
 * Description placeholder
 *
 * @class Html5Sprites_C
 */
class Html5Sprites_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NAME = "html5Sprites_R";
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    isOk = " ";
    // Внешние ссылки
    /**
     * Description placeholder
     *
     * @public
  
     */
    out_html5Canvas_R = html5Canvas_R;
    /**
     * Description placeholder
     *
     * @public
     
     */
    out_html5SpritesCollection_R = html5SpritesCollection_R;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    REZERV = html5SpritesCollection_R.REZERV;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ADVENTURES = html5SpritesCollection_R.ADVENTURES;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUNDS = html5SpritesCollection_R.GROUNDS;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS = html5SpritesCollection_R.ITEMS;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES = html5SpritesCollection_R.CREATURES;
    //GROUNDS
    // так кодируются тайлы для слоя земли
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUND_NOTHING = html5SpritesCollection_R.GROUND_NOTHING; // пустая область
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUND_STONE = html5SpritesCollection_R.GROUND_STONE; // непробиваемый камень
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUND_SEND = html5SpritesCollection_R.GROUND_SEND; // копаемый песок
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUND_FLOOR = html5SpritesCollection_R.GROUND_FLOOR; // проходимый пол
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUND_WALL = html5SpritesCollection_R.GROUND_WALL; // стена подземелья
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUND_WALL_FORTIFED = html5SpritesCollection_R.GROUND_WALL_FORTIFED; // укрепленная стена подземелья
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUND_VEIN_GOLD = html5SpritesCollection_R.GROUND_VEIN_GOLD; // золотая жила
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    GROUND_VEIN_GEM = html5SpritesCollection_R.GROUND_VEIN_GEM; // драгоценный камень жила
    //ITEMS
    // так кодируются тайлы для слоя предметов
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_NOTHING = html5SpritesCollection_R.ITEMS_NOTHING;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_RING = html5SpritesCollection_R.ITEMS_RING;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_SWORD_1 = html5SpritesCollection_R.ITEMS_SWORD_1;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_SWORD_2 = html5SpritesCollection_R.ITEMS_SWORD_2;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_SWORD_3 = html5SpritesCollection_R.ITEMS_SWORD_3;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_SHIELD = html5SpritesCollection_R.ITEMS_SHIELD;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_ARMOR_1 = html5SpritesCollection_R.ITEMS_ARMOR_1;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_ARMOR_2 = html5SpritesCollection_R.ITEMS_ARMOR_2;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_ARMOR_3 = html5SpritesCollection_R.ITEMS_ARMOR_3;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_ARMOR_4 = html5SpritesCollection_R.ITEMS_ARMOR_4;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_ARMOR_5 = html5SpritesCollection_R.ITEMS_ARMOR_5;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_ARMOR_6 = html5SpritesCollection_R.ITEMS_ARMOR_6;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_FLOWER_1 = html5SpritesCollection_R.ITEMS_FLOWER_1;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_FLOWER_2 = html5SpritesCollection_R.ITEMS_FLOWER_2;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_FLOWER_3 = html5SpritesCollection_R.ITEMS_FLOWER_3;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_FLOWER_4 = html5SpritesCollection_R.ITEMS_FLOWER_4;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_FLOWER_5 = html5SpritesCollection_R.ITEMS_FLOWER_5;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_FLOWER_6 = html5SpritesCollection_R.ITEMS_FLOWER_6;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_POTION = html5SpritesCollection_R.ITEMS_POTION;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    ITEMS_DOOR = html5SpritesCollection_R.ITEMS_DOOR;
    //CREATURES
    // так кодируются тайлы для слоя монстров
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_NOTHING = html5SpritesCollection_R.CREATURES_NOTHING;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_GHOST = html5SpritesCollection_R.CREATURES_GHOST;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_DRAGON = html5SpritesCollection_R.CREATURES_DRAGON;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_GOBLIN = html5SpritesCollection_R.CREATURES_GOBLIN;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_HARPY = html5SpritesCollection_R.CREATURES_HARPY;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_DRUID = html5SpritesCollection_R.CREATURES_DRUID;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_VARNEY = html5SpritesCollection_R.CREATURES_VARNEY;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_LICH = html5SpritesCollection_R.CREATURES_LICH;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_MEDUSA = html5SpritesCollection_R.CREATURES_MEDUSA;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_MINOTAUR = html5SpritesCollection_R.CREATURES_MINOTAUR;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_GENIE = html5SpritesCollection_R.CREATURES_GENIE;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_FIGHTER = html5SpritesCollection_R.CREATURES_FIGHTER;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_GARGOYLE = html5SpritesCollection_R.CREATURES_GARGOYLE;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_SKELETON = html5SpritesCollection_R.CREATURES_SKELETON;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    CREATURES_TITAN = html5SpritesCollection_R.CREATURES_TITAN;
    //=============================================================================
    /**
     * Creates an instance of Html5Sprites_C.
     *
     * @constructor
     */
    constructor() {
    }
    //=============================================================================
    //============================================================================
    /** Description placeholder */
    iniM() {
    }
    //============================================================================    
    //=============================================================================
    /** Description placeholder */
    startM() {
    }
    //=============================================================================
    //=============================================================================
    // Sprites.drowSprite(Sprites.Out_html5SpritesCollection_R.GROUNDS,Sprites.Out_html5SpritesCollection_R.GROUND_FLOOR,
    //   10,200)
    /**
     * Description placeholder
     *
     * @param {number} type
     * @param {number} index
     * @param {number} imageLeft
     * @param {number} imageTop
     * @param {number} [imageWidth=0]
     * @param {number} [imageHeight=0]
     */
    drowSprite(type, index, imageLeft, imageTop, imageWidth = 0, imageHeight = 0) {
        let image = this.out_html5SpritesCollection_R.getSprite(type, index);
        // (_image, _left, _top, _width, _height, _mirror)
        this.out_html5Canvas_R.drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
    }
} //SpritesMap_2D
/**
 * Description placeholder
 *
 * @type {Html5Sprites_C}
 */
let html5Sprites_R = new Html5Sprites_C;
html5Sprites_R.iniM();
export { html5Sprites_R, Html5Sprites_C };
if (global_R.print_module_start_finish)
    console.log('html5_sprites.js -> module finish');
html5Sprites_R.isOk = "OK"; //
