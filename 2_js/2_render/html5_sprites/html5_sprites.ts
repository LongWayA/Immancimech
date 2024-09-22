// @ts-check
/** 
 * @module html5_sprites
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
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

import { global_R } from '../../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('html5_sprites.js -> module start');

import { html5Canvas_R, Html5Canvas_C } from '../html5_canvas/html5_canvas_h.js';
import { html5SpritesCollection_R, Html5SpritesCollection_C } from './html5_sprites_collection.js';

//
class Html5Sprites_C {

  public NAME: string = "html5Sprites_R";
  public isOk: string = " ";

  public out_html5Canvas_R: Html5Canvas_C = html5Canvas_R;

  public out_html5SpritesCollection_R: Html5SpritesCollection_C = html5SpritesCollection_R;

  public REZERV: number = html5SpritesCollection_R.REZERV;
  public ADVENTURES: number = html5SpritesCollection_R.ADVENTURES;
  public GROUNDS: number = html5SpritesCollection_R.GROUNDS;
  public ITEMS: number = html5SpritesCollection_R.ITEMS;
  public CREATURES: number = html5SpritesCollection_R.CREATURES;

  //GROUNDS
  // так кодируются тайлы для слоя земли

  public GROUND_NOTHING: number = html5SpritesCollection_R.GROUND_NOTHING;      // пустая область
  public GROUND_STONE: number = html5SpritesCollection_R.GROUND_STONE;        // непробиваемый камень
  public GROUND_SEND: number = html5SpritesCollection_R.GROUND_SEND;         // копаемый песок
  public GROUND_FLOOR: number = html5SpritesCollection_R.GROUND_FLOOR;        // проходимый пол
  public GROUND_WALL: number = html5SpritesCollection_R.GROUND_WALL;         // стена подземелья
  public GROUND_WALL_FORTIFED: number = html5SpritesCollection_R.GROUND_WALL_FORTIFED;// укрепленная стена подземелья
  public GROUND_VEIN_GOLD: number = html5SpritesCollection_R.GROUND_VEIN_GOLD;    // золотая жила
  public GROUND_VEIN_GEM: number = html5SpritesCollection_R.GROUND_VEIN_GEM;     // драгоценный камень жила

  //ITEMS
  // так кодируются тайлы для слоя предметов
  public ITEMS_NOTHING: number = html5SpritesCollection_R.ITEMS_NOTHING;
  public ITEMS_RING: number = html5SpritesCollection_R.ITEMS_RING;
  public ITEMS_SWORD_1: number = html5SpritesCollection_R.ITEMS_SWORD_1;
  public ITEMS_SWORD_2: number = html5SpritesCollection_R.ITEMS_SWORD_2;
  public ITEMS_SWORD_3: number = html5SpritesCollection_R.ITEMS_SWORD_3;
  public ITEMS_SHIELD: number = html5SpritesCollection_R.ITEMS_SHIELD;
  public ITEMS_ARMOR_1: number = html5SpritesCollection_R.ITEMS_ARMOR_1;
  public ITEMS_ARMOR_2: number = html5SpritesCollection_R.ITEMS_ARMOR_2;
  public ITEMS_ARMOR_3: number = html5SpritesCollection_R.ITEMS_ARMOR_3;
  public ITEMS_ARMOR_4: number = html5SpritesCollection_R.ITEMS_ARMOR_4;
  public ITEMS_ARMOR_5: number = html5SpritesCollection_R.ITEMS_ARMOR_5;
  public ITEMS_ARMOR_6: number = html5SpritesCollection_R.ITEMS_ARMOR_6;
  public ITEMS_FLOWER_1: number = html5SpritesCollection_R.ITEMS_FLOWER_1;
  public ITEMS_FLOWER_2: number = html5SpritesCollection_R.ITEMS_FLOWER_2;
  public ITEMS_FLOWER_3: number = html5SpritesCollection_R.ITEMS_FLOWER_3;
  public ITEMS_FLOWER_4: number = html5SpritesCollection_R.ITEMS_FLOWER_4;
  public ITEMS_FLOWER_5: number = html5SpritesCollection_R.ITEMS_FLOWER_5;
  public ITEMS_FLOWER_6: number = html5SpritesCollection_R.ITEMS_FLOWER_6;
  public ITEMS_POTION: number = html5SpritesCollection_R.ITEMS_POTION;
  public ITEMS_DOOR: number = html5SpritesCollection_R.ITEMS_DOOR;

  //CREATURES
  // так кодируются тайлы для слоя монстров
  public CREATURES_NOTHING: number = html5SpritesCollection_R.CREATURES_NOTHING;
  public CREATURES_GHOST: number = html5SpritesCollection_R.CREATURES_GHOST;
  public CREATURES_DRAGON: number = html5SpritesCollection_R.CREATURES_DRAGON;
  public CREATURES_GOBLIN: number = html5SpritesCollection_R.CREATURES_GOBLIN;
  public CREATURES_HARPY: number = html5SpritesCollection_R.CREATURES_HARPY;
  public CREATURES_DRUID: number = html5SpritesCollection_R.CREATURES_DRUID;
  public CREATURES_VARNEY: number = html5SpritesCollection_R.CREATURES_VARNEY;
  public CREATURES_LICH: number = html5SpritesCollection_R.CREATURES_LICH;
  public CREATURES_MEDUSA: number = html5SpritesCollection_R.CREATURES_MEDUSA;
  public CREATURES_MINOTAUR: number = html5SpritesCollection_R.CREATURES_MINOTAUR;
  public CREATURES_GENIE: number = html5SpritesCollection_R.CREATURES_GENIE;
  public CREATURES_FIGHTER: number = html5SpritesCollection_R.CREATURES_FIGHTER;
  public CREATURES_GARGOYLE: number = html5SpritesCollection_R.CREATURES_GARGOYLE;
  public CREATURES_SKELETON: number = html5SpritesCollection_R.CREATURES_SKELETON;
  public CREATURES_TITAN: number = html5SpritesCollection_R.CREATURES_TITAN;

   //=============================================================================
   constructor() {
   }
   //=============================================================================

  //============================================================================
  iniM():void {
  }
  //============================================================================    

  //=============================================================================
  startM():void {
  }
  //=============================================================================

  //=============================================================================
  // Sprites.drowSprite(Sprites.Out_html5SpritesCollection_R.GROUNDS,Sprites.Out_html5SpritesCollection_R.GROUND_FLOOR,
  //   10,200)
  drowSprite(type: number, index: number, imageLeft: number,
    imageTop: number, imageWidth: number = 0, imageHeight: number = 0):void {

    let image = this.out_html5SpritesCollection_R.getSprite(type, index);

    // (_image, _left, _top, _width, _height, _mirror)
    this.out_html5Canvas_R.drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
  }
  //=============================================================================


} //SpritesMap_2D

let html5Sprites_R = new Html5Sprites_C;

html5Sprites_R.iniM();

export { html5Sprites_R, Html5Sprites_C };

if (global_R.print_module_start_finish) console.log('html5_sprites.js -> module finish');

html5Sprites_R.isOk = "OK"; //