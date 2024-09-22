// @ts-check
/** 
 * @module background
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -12.09.2023-
 * @version Last_modified -24.02m.2024-07.07m.2024-
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('background.js -> module start');

import { html5Canvas_R } from '../../2_render/html5_canvas/html5_canvas_h.js';
import { html5Sprites_R } from '../../2_render/html5_sprites/html5_sprites.js';
import { TileForBackground_C } from './tile_for_background_c.js';
import { items_R } from '../items/items.js';

// можно кодировать карту при записи продвинутой системой типа 16 ричной
// 0 до 9 и латинские буквы от A до F. Буквы A, B, C, D, E, F=15

// 
class Background_C {

  
  public NAME: string = "background_R";
  public isOk: string = "";
  private MAP_TILE_COUNT_WIDTH: number = 24;// считаем вместе с 0
  private MAP_TILE_COUNT_HEIGHT: number = 9;

  private TILE_WIDTH: number = 50;
  private TILE_HEIGHT: number = 50;

  private Map_2d: TileForBackground_C[][] = new Array(1);

  // кодировка тайла в виде буквы: 0 - не задано, 1 - конец карты, 
  //2 - пустое пространство, 3 - непроходимый камень, 4 - лестница

  //************************************************
  private savedGround: string =
    `111111111111111111111111
122222222222222222222221
133334333333333343333331
122224222222222242222221
133333333433333333343331
122222222422222222242221
133334333333333343333331
122224222222222242222221
111111111111111111111111`;
  //************************************************

  //=============================================================================
  constructor() {

  }
  //=============================================================================
  //=============================================================================
  iniM(): void {
    this.iniMap_2d();
    this.loadMapFromScripts();
  }
  //=============================================================================
  //=============================================================================
  startM(): void {
  }
  //=============================================================================

  //=============================================================================
  isMoove(x: number, y: number): boolean {

    x = Math.floor(x / this.TILE_WIDTH);// Math.ceil
    y = Math.floor(y / this.TILE_HEIGHT);

    //    console.log(" background.js-> isMoove _x = " +  _x );
    //    console.log(" background.js-> isMoove _y = " +  _y );  
    //    console.log(" background.js-> isMoove x = " +  x );
    //    console.log(" background.js-> isMoove y = " +  y );
    //    console.log(" background.js-> isMoove char = " +  Ground.Map_2d[y][x].char );

    if ((this.Map_2d[y][x].char == "1") || (this.Map_2d[y][x].char == "3")) {
      return false;//false
    } else {
      return true;
    }
  }
  //=============================================================================

  //=============================================================================
  //
  iniMap_2d(): void {

    let height = this.TILE_HEIGHT; //
    let width = this.TILE_WIDTH; //
    let number = 0;


    // так как мы бежим по х т.е. по горизонтали когда отрисовываем карту, то первый массив это по у т.е. по вертикали
    // это вертикаль
    this.Map_2d = new Array(this.MAP_TILE_COUNT_HEIGHT);

    // 
    for (let y = 0; y < this.Map_2d.length; y++) {
      this.Map_2d[y] = new Array(this.MAP_TILE_COUNT_WIDTH);
      for (let x = 0; x < this.MAP_TILE_COUNT_WIDTH; x++) {
        number = number + 1;
        this.Map_2d[y][x] = new TileForBackground_C(this.numToChar(0), number, width, height, html5Sprites_R.GROUNDS);
      }
    }
  }
  //=============================================================================
  //=============================================================================
  //
  getTileInMap_2d(x: number, y: number): TileForBackground_C {
    return this.Map_2d[y][x]; //
  }
  //=============================================================================
  //=============================================================================
  print(): void {
    let line = "";
    for (let y = 0; y < this.Map_2d.length; y++) {
      for (let x = 0; x < this.MAP_TILE_COUNT_WIDTH; x++) {
        line = line + this.Map_2d[y][x].char + "(" + y + "," + x + ") ";
      }
      console.log("Sector-> " + line);
      line = "";
    }
  }
  //=============================================================================

  //=============================================================================
  drow(): void {
    for (let y = 0; y < this.Map_2d.length; y++) {
      for (let x = 0; x < this.MAP_TILE_COUNT_WIDTH; x++) {
        html5Sprites_R.drowSprite(this.Map_2d[y][x].type, this.Map_2d[y][x].index,
          x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile,
          this.Map_2d[y][x].widthTile, this.Map_2d[y][x].heightTile);
        html5Canvas_R.drawText(this.Map_2d[y][x].char, //Ground.Map_2d[y][x].number
          x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile, html5Canvas_R.ITALIC_15PT_ARIAL,
          html5Canvas_R.GREEN, 1);
        html5Canvas_R.drawRect(x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile,
          this.Map_2d[y][x].widthTile, this.Map_2d[y][x].heightTile, 1, html5Canvas_R.BLUE, 0);
      }
    }
  }
  //=============================================================================

  //=============================================================================
  loadMapFromScripts(): void {
    let pozChar = 0;
    for (let y = 0; y < this.Map_2d.length; y++) {
      for (let x = 0; x < this.MAP_TILE_COUNT_WIDTH; x++) {
        this.Map_2d[y][x].setCharTypeIndex(this.savedGround[pozChar], html5Sprites_R.GROUNDS);
        pozChar = pozChar + 1;
      }
      pozChar = pozChar + 1;
    }
  }
  //=============================================================================

  //=============================================================================
  numToChar(num: number): string {

    let numToCharA = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f'];

    let char = numToCharA[num];

    return char;
  }
  //=============================================================================

  //=============================================================================
  charToNum(char: string): number {

    // это тоже объект, только поля в виде строк. На само деле они всегда строки только неявно заданные
    let charToNumS: any = {
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
      '7': 7, '8': 8, '9': 9,
      'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15
    };

    let num: number = charToNumS[char];

    return num;
  }
  //=============================================================================
}; //

let background_R = new Background_C()

background_R.iniM();

background_R.isOk = "OK"; //

export { background_R, Background_C };

if (global_R.print_module_start_finish) console.log('background.js -> module finish');