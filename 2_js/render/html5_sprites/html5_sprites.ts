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

import { global_R } from '../../global/global.js';

if (global_R.print_module_start_finish) console.log('html5_sprites.js -> module start');

import { html5Canvas_R, Html5Canvas_C } from '../html5_canvas/6_html5_canvas_h.js';
import { html5SpritesCollection_R, Html5SpritesCollection_C } from './html5_sprites_collection.js';

//
class Html5Sprites_C {
  NAME: string = "html5Sprites_R";
  isOk: string = " ";


  // Внешние ссылки
  out_html5Canvas_R: Html5Canvas_C = html5Canvas_R;

  out_html5SpritesCollection_R: Html5SpritesCollection_C = html5SpritesCollection_R;


  REZERV: number = html5SpritesCollection_R.REZERV;
  ADVENTURES: number = html5SpritesCollection_R.ADVENTURES;
  GROUNDS: number = html5SpritesCollection_R.GROUNDS;
  ITEMS: number = html5SpritesCollection_R.ITEMS;
  CREATURES: number = html5SpritesCollection_R.CREATURES;

  //GROUNDS
  // так кодируются тайлы для слоя земли
  GROUND_NOTHING: number = html5SpritesCollection_R.GROUND_NOTHING;      // пустая область
  GROUND_STONE: number = html5SpritesCollection_R.GROUND_STONE;        // непробиваемый камень
  GROUND_SEND: number = html5SpritesCollection_R.GROUND_SEND;         // копаемый песок
  GROUND_FLOOR: number = html5SpritesCollection_R.GROUND_FLOOR;        // проходимый пол
  GROUND_WALL: number = html5SpritesCollection_R.GROUND_WALL;         // стена подземелья
  GROUND_WALL_FORTIFED: number = html5SpritesCollection_R.GROUND_WALL_FORTIFED;// укрепленная стена подземелья
  GROUND_VEIN_GOLD: number = html5SpritesCollection_R.GROUND_VEIN_GOLD;    // золотая жила
  GROUND_VEIN_GEM: number = html5SpritesCollection_R.GROUND_VEIN_GEM;     // драгоценный камень жила

  //ITEMS
  // так кодируются тайлы для слоя предметов
  ITEMS_NOTHING: number = html5SpritesCollection_R.ITEMS_NOTHING;
  ITEMS_RING: number = html5SpritesCollection_R.ITEMS_RING;
  ITEMS_SWORD_1: number = html5SpritesCollection_R.ITEMS_SWORD_1;
  ITEMS_SWORD_2: number = html5SpritesCollection_R.ITEMS_SWORD_2;
  ITEMS_SWORD_3: number = html5SpritesCollection_R.ITEMS_SWORD_3;
  ITEMS_SHIELD: number = html5SpritesCollection_R.ITEMS_SHIELD;
  ITEMS_ARMOR_1: number = html5SpritesCollection_R.ITEMS_ARMOR_1;
  ITEMS_ARMOR_2: number = html5SpritesCollection_R.ITEMS_ARMOR_2;
  ITEMS_ARMOR_3: number = html5SpritesCollection_R.ITEMS_ARMOR_3;
  ITEMS_ARMOR_4: number = html5SpritesCollection_R.ITEMS_ARMOR_4;
  ITEMS_ARMOR_5: number = html5SpritesCollection_R.ITEMS_ARMOR_5;
  ITEMS_ARMOR_6: number = html5SpritesCollection_R.ITEMS_ARMOR_6;
  ITEMS_FLOWER_1: number = html5SpritesCollection_R.ITEMS_FLOWER_1;
  ITEMS_FLOWER_2: number = html5SpritesCollection_R.ITEMS_FLOWER_2;
  ITEMS_FLOWER_3: number = html5SpritesCollection_R.ITEMS_FLOWER_3;
  ITEMS_FLOWER_4: number = html5SpritesCollection_R.ITEMS_FLOWER_4;
  ITEMS_FLOWER_5: number = html5SpritesCollection_R.ITEMS_FLOWER_5;
  ITEMS_FLOWER_6: number = html5SpritesCollection_R.ITEMS_FLOWER_6;
  ITEMS_POTION: number = html5SpritesCollection_R.ITEMS_POTION;
  ITEMS_DOOR: number = html5SpritesCollection_R.ITEMS_DOOR;

  //CREATURES
  // так кодируются тайлы для слоя монстров
  CREATURES_NOTHING: number = html5SpritesCollection_R.CREATURES_NOTHING;
  CREATURES_GHOST: number = html5SpritesCollection_R.CREATURES_GHOST;
  CREATURES_DRAGON: number = html5SpritesCollection_R.CREATURES_DRAGON;
  CREATURES_GOBLIN: number = html5SpritesCollection_R.CREATURES_GOBLIN;
  CREATURES_HARPY: number = html5SpritesCollection_R.CREATURES_HARPY;
  CREATURES_DRUID: number = html5SpritesCollection_R.CREATURES_DRUID;
  CREATURES_VARNEY: number = html5SpritesCollection_R.CREATURES_VARNEY;
  CREATURES_LICH: number = html5SpritesCollection_R.CREATURES_LICH;
  CREATURES_MEDUSA: number = html5SpritesCollection_R.CREATURES_MEDUSA;
  CREATURES_MINOTAUR: number = html5SpritesCollection_R.CREATURES_MINOTAUR;
  CREATURES_GENIE: number = html5SpritesCollection_R.CREATURES_GENIE;
  CREATURES_FIGHTER: number = html5SpritesCollection_R.CREATURES_FIGHTER;
  CREATURES_GARGOYLE: number = html5SpritesCollection_R.CREATURES_GARGOYLE;
  CREATURES_SKELETON: number = html5SpritesCollection_R.CREATURES_SKELETON;
  CREATURES_TITAN: number = html5SpritesCollection_R.CREATURES_TITAN;

   //=============================================================================
   constructor() {

   }
   //=============================================================================

  //============================================================================
  iniM():void {
  };
  //============================================================================    

  //=============================================================================
  startM():void {
  };
  //=============================================================================

  //=============================================================================
  // Sprites.drowSprite(Sprites.Out_html5SpritesCollection_R.GROUNDS,Sprites.Out_html5SpritesCollection_R.GROUND_FLOOR,
  //   10,200)
  drowSprite(type: number, index: number, imageLeft: number,
    imageTop: number, imageWidth: number = 0, imageHeight: number = 0):void {

    let image = this.out_html5SpritesCollection_R.getSprite(type, index);

    // (_image, _left, _top, _width, _height, _mirror)
    this.out_html5Canvas_R.drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
  };
  //=============================================================================


}; //SpritesMap_2D

let html5Sprites_R = new Html5Sprites_C;

html5Sprites_R.iniM();
//Global.testLoading('HTML5_html5Sprites_R.js');

export { html5Sprites_R, Html5Sprites_C };

if (global_R.print_module_start_finish) console.log('html5_sprites.js -> module finish');

html5Sprites_R.isOk = "OK"; //