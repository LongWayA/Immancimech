// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -02.08.2022-02.01.2023-18.02.2023-1.04m.2023-
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ
 
 Заполняем двумерный массив SpritesMap_2D.tilesLoad. Это набор объектов class Tile_for_load_Image_C
 В нем ссылки на картинки, символ картинки, название картинки.
 четыре типа картинок - приключения, земля, предметы, монстры

 Также готовим два типа вспомогательных массивов -карт
 SpritesMap_2D.GroundsMapChars - карта по символу выдает порядковый номер в массиве SpritesMap_2D.tilesLoad
 SpritesMap_2D.GroundsMapString - карта по символу выдает название картинки.
 есть три карты для разных слоев земли, предметов, монстров

 Пример использования:
 SpritesMap_2D.tilesLoad[_type, _index].tile_Image_OUT;
 _type = SpritesMap_2D.GROUNDS , _index = SpritesMap_2D.GroundsMapChars.get(SpritesMap_2D.GROUND_FLOOR)

*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('html5_sprites.js -> module start');
import { html5Canvas_R } from '../html5_canvas/6_html5_canvas_h.js';
import { html5SpritesCollection_R } from './html5_sprites_collection.js';
//
class Html5Sprites_C {
    NAME = "html5Sprites_R";
    isOk = " ";
    // Внешние ссылки
    out_html5Canvas_R = html5Canvas_R;
    out_html5SpritesCollection_R = html5SpritesCollection_R;
    REZERV = html5SpritesCollection_R.REZERV;
    ADVENTURES = html5SpritesCollection_R.ADVENTURES;
    GROUNDS = html5SpritesCollection_R.GROUNDS;
    ITEMS = html5SpritesCollection_R.ITEMS;
    CREATURES = html5SpritesCollection_R.CREATURES;
    //GROUNDS
    // так кодируются тайлы для слоя земли
    GROUND_NOTHING = html5SpritesCollection_R.GROUND_NOTHING; // пустая область
    GROUND_STONE = html5SpritesCollection_R.GROUND_STONE; // непробиваемый камень
    GROUND_SEND = html5SpritesCollection_R.GROUND_SEND; // копаемый песок
    GROUND_FLOOR = html5SpritesCollection_R.GROUND_FLOOR; // проходимый пол
    GROUND_WALL = html5SpritesCollection_R.GROUND_WALL; // стена подземелья
    GROUND_WALL_FORTIFED = html5SpritesCollection_R.GROUND_WALL_FORTIFED; // укрепленная стена подземелья
    GROUND_VEIN_GOLD = html5SpritesCollection_R.GROUND_VEIN_GOLD; // золотая жила
    GROUND_VEIN_GEM = html5SpritesCollection_R.GROUND_VEIN_GEM; // драгоценный камень жила
    //ITEMS
    // так кодируются тайлы для слоя предметов
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
    //CREATURES
    // так кодируются тайлы для слоя монстров
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
    //=============================================================================
    constructor() {
    }
    //=============================================================================
    //============================================================================
    iniM() {
    }
    ;
    //============================================================================    
    //=============================================================================
    startM() {
    }
    ;
    //=============================================================================
    //=============================================================================
    // Sprites.drowSprite(Sprites.Out_html5SpritesCollection_R.GROUNDS,Sprites.Out_html5SpritesCollection_R.GROUND_FLOOR,
    //   10,200)
    drowSprite(type, index, imageLeft, imageTop, imageWidth = 0, imageHeight = 0) {
        let image = this.out_html5SpritesCollection_R.getSprite(type, index);
        // (_image, _left, _top, _width, _height, _mirror)
        this.out_html5Canvas_R.drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
    }
    ;
}
; //SpritesMap_2D
let html5Sprites_R = new Html5Sprites_C;
html5Sprites_R.iniM();
//Global.testLoading('HTML5_html5Sprites_R.js');
export { html5Sprites_R, Html5Sprites_C };
if (global_R.print_module_start_finish)
    console.log('html5_sprites.js -> module finish');
html5Sprites_R.isOk = "OK"; //
