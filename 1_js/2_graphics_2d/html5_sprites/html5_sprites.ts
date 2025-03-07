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

if (global_R.print_module_start_finish) console.log('html5_sprites.js -> module start');

import { Html5Canvas_C } from '../html5_canvas/html5_canvas.js';
import { Html5SpritesCollection_C } from './html5_sprites_collection.js';
import { Html5SpritesImmortal_C } from './html5_sprites_immortal.js';


//
class Html5Sprites_C {

  public html5Canvas_R: Html5Canvas_C | null = null;
  public html5SpritesCollection_R: Html5SpritesCollection_C = new Html5SpritesCollection_C();
  public html5SpritesImmortal_R: Html5SpritesImmortal_C = new Html5SpritesImmortal_C();

  public static NAME: string = "html5Sprites_R";

  public static REZERV: number = Html5SpritesCollection_C.REZERV;
  public static ADVENTURES: number = Html5SpritesCollection_C.ADVENTURES;
  public static GROUNDS: number = Html5SpritesCollection_C.GROUNDS;
  public static ITEMS: number = Html5SpritesCollection_C.ITEMS;
  public static CREATURES: number = Html5SpritesCollection_C.CREATURES;

  //GROUNDS
  // так кодируются тайлы для слоя земли

  public static GROUND_NOTHING: number = Html5SpritesCollection_C.GROUND_NOTHING;      // пустая область
  public static GROUND_STONE: number = Html5SpritesCollection_C.GROUND_STONE;        // непробиваемый камень
  public static GROUND_SEND: number = Html5SpritesCollection_C.GROUND_SEND;         // копаемый песок
  public static GROUND_FLOOR: number = Html5SpritesCollection_C.GROUND_FLOOR;        // проходимый пол
  public static GROUND_WALL: number = Html5SpritesCollection_C.GROUND_WALL;         // стена подземелья
  public static GROUND_WALL_FORTIFED: number = Html5SpritesCollection_C.GROUND_WALL_FORTIFED;// укрепленная стена подземелья
  public static GROUND_VEIN_GOLD: number = Html5SpritesCollection_C.GROUND_VEIN_GOLD;    // золотая жила
  public static GROUND_VEIN_GEM: number = Html5SpritesCollection_C.GROUND_VEIN_GEM;     // драгоценный камень жила

  //ITEMS
  // так кодируются тайлы для слоя предметов
  public static ITEMS_NOTHING: number = Html5SpritesCollection_C.ITEMS_NOTHING;
  public static ITEMS_RING: number = Html5SpritesCollection_C.ITEMS_RING;
  public static ITEMS_SWORD_1: number = Html5SpritesCollection_C.ITEMS_SWORD_1;
  public static ITEMS_SWORD_2: number = Html5SpritesCollection_C.ITEMS_SWORD_2;
  public static ITEMS_SWORD_3: number = Html5SpritesCollection_C.ITEMS_SWORD_3;
  public static ITEMS_SHIELD: number = Html5SpritesCollection_C.ITEMS_SHIELD;
  public static ITEMS_ARMOR_1: number = Html5SpritesCollection_C.ITEMS_ARMOR_1;
  public static ITEMS_ARMOR_2: number = Html5SpritesCollection_C.ITEMS_ARMOR_2;
  public static ITEMS_ARMOR_3: number = Html5SpritesCollection_C.ITEMS_ARMOR_3;
  public static ITEMS_ARMOR_4: number = Html5SpritesCollection_C.ITEMS_ARMOR_4;
  public static ITEMS_ARMOR_5: number = Html5SpritesCollection_C.ITEMS_ARMOR_5;
  public static ITEMS_ARMOR_6: number = Html5SpritesCollection_C.ITEMS_ARMOR_6;
  public static ITEMS_FLOWER_1: number = Html5SpritesCollection_C.ITEMS_FLOWER_1;
  public static ITEMS_FLOWER_2: number = Html5SpritesCollection_C.ITEMS_FLOWER_2;
  public static ITEMS_FLOWER_3: number = Html5SpritesCollection_C.ITEMS_FLOWER_3;
  public static ITEMS_FLOWER_4: number = Html5SpritesCollection_C.ITEMS_FLOWER_4;
  public static ITEMS_FLOWER_5: number = Html5SpritesCollection_C.ITEMS_FLOWER_5;
  public static ITEMS_FLOWER_6: number = Html5SpritesCollection_C.ITEMS_FLOWER_6;
  public static ITEMS_POTION: number = Html5SpritesCollection_C.ITEMS_POTION;
  public static ITEMS_DOOR: number = Html5SpritesCollection_C.ITEMS_DOOR;

  //CREATURES
  // так кодируются тайлы для слоя монстров
  public static CREATURES_NOTHING: number = Html5SpritesCollection_C.CREATURES_NOTHING;
  public static CREATURES_GHOST: number = Html5SpritesCollection_C.CREATURES_GHOST;
  public static CREATURES_DRAGON: number = Html5SpritesCollection_C.CREATURES_DRAGON;
  public static CREATURES_GOBLIN: number = Html5SpritesCollection_C.CREATURES_GOBLIN;
  public static CREATURES_HARPY: number = Html5SpritesCollection_C.CREATURES_HARPY;
  public static CREATURES_DRUID: number = Html5SpritesCollection_C.CREATURES_DRUID;
  public static CREATURES_VARNEY: number = Html5SpritesCollection_C.CREATURES_VARNEY;
  public static CREATURES_LICH: number = Html5SpritesCollection_C.CREATURES_LICH;
  public static CREATURES_MEDUSA: number = Html5SpritesCollection_C.CREATURES_MEDUSA;
  public static CREATURES_MINOTAUR: number = Html5SpritesCollection_C.CREATURES_MINOTAUR;
  public static CREATURES_GENIE: number = Html5SpritesCollection_C.CREATURES_GENIE;
  public static CREATURES_FIGHTER: number = Html5SpritesCollection_C.CREATURES_FIGHTER;
  public static CREATURES_GARGOYLE: number = Html5SpritesCollection_C.CREATURES_GARGOYLE;
  public static CREATURES_SKELETON: number = Html5SpritesCollection_C.CREATURES_SKELETON;
  public static CREATURES_TITAN: number = Html5SpritesCollection_C.CREATURES_TITAN;

   //=============================================================================
   constructor() {
   }
   //=============================================================================

  //============================================================================
  iniM(html5Canvas_R: Html5Canvas_C):void {
    this.html5Canvas_R = html5Canvas_R;//

    this.html5SpritesCollection_R.iniM();
    this.html5SpritesImmortal_R.iniM(html5Canvas_R);
  }
  //============================================================================    

  //=============================================================================
  // Sprites.drowSprite(Sprites.Out_html5SpritesCollection_R.GROUNDS,Sprites.Out_html5SpritesCollection_R.GROUND_FLOOR,
  //   10,200)
  drowSprite(type: number, index: number, imageLeft: number,
    imageTop: number, imageWidth: number = 0, imageHeight: number = 0):void {

    let image = this.html5SpritesCollection_R.getSprite(type, index);

    // (_image, _left, _top, _width, _height, _mirror)
    (this.html5Canvas_R as Html5Canvas_C).drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
  }
  //=============================================================================


} //SpritesMap_2D

export { Html5Sprites_C };
if (global_R.print_module_start_finish) console.log('html5_sprites.js -> module finish');