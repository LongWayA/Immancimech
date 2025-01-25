/** 
 * background
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -12.09.2023-
 * @version Last_modified -24.02m.2024-07.07m.2024-
 */
let Copyright_AnBr75 = 2024;
 
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../../1_index/global.js';

if (global_R.print_module_start_finish) console.log('background.js -> module start');

import { Html5Canvas_C } from '../../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../../2_graphics_2d/html5_sprites/html5_sprites.js';
import { TileForBackground_C } from './tile_for_background_c.js';
import { items_R } from '../items/items.js';

// можно кодировать карту при записи продвинутой системой типа 16 ричной
// 0 до 9 и латинские буквы от A до F. Буквы A, B, C, D, E, F=15

// 
class Background_C {

  html5Canvas_R:  Html5Canvas_C | null = null;
  html5Sprites_R: Html5Sprites_C | null = null;

  public static NAME: string = "Background_C";
  public isOk: string = "";
  private static MAP_TILE_COUNT_WIDTH: number = 24;// считаем вместе с 0
  private static MAP_TILE_COUNT_HEIGHT: number = 9;

  public static TILE_WIDTH: number = 50;
  public static TILE_HEIGHT: number = 50;

  private Map_2d: TileForBackground_C[][] = new Array(1);

  // кодировка тайла в виде буквы: 0 - не задано, 1 - конец карты, 
  //2 - пустое пространство, 3 - непроходимый камень, 4 - лестница

  //************************************************
  private static savedGround: string =
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
  startM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C): void {
    this.html5Canvas_R = html5Canvas_R;// 
    this.html5Sprites_R = html5Sprites_R;  
  }
  //=============================================================================
  //=============================================================================
  isMoove(x: number, y: number): boolean {
    // console.log(" background.js-> isMoove in x = " +  x );
    // console.log(" background.js-> isMoove in y = " +  y );

    x = Math.floor(x / Background_C.TILE_WIDTH);// Math.ceil
    y = Math.floor(y / Background_C.TILE_HEIGHT);

      //  console.log(" background.js-> isMoove x = " +  x );
      //  console.log(" background.js-> isMoove y = " +  y );
      //  console.log(" background.js-> isMoove char = " +  this.Map_2d[y][x].char );

      //  console.log(" background.js-> isMoove -> TILE_WIDTH = " +  Background_C.TILE_WIDTH );
      //  console.log(" background.js-> isMoove  -> TILE_HEIGHT = " +  Background_C.TILE_HEIGHT );

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
    let height = Background_C.TILE_HEIGHT; //
    let width = Background_C.TILE_WIDTH; //
    let number = 0;


    // так как мы бежим по х т.е. по горизонтали когда отрисовываем карту, то первый массив это по у т.е. по вертикали
    // это вертикаль
    this.Map_2d = new Array(Background_C.MAP_TILE_COUNT_HEIGHT);

    // 
    for (let y = 0; y < this.Map_2d.length; y++) {
      this.Map_2d[y] = new Array(Background_C.MAP_TILE_COUNT_WIDTH);
      for (let x = 0; x < Background_C.MAP_TILE_COUNT_WIDTH; x++) {
        number = number + 1;
        this.Map_2d[y][x] = new TileForBackground_C(this.numToChar(0), number, width, height, Html5Sprites_C.GROUNDS);
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
      for (let x = 0; x < Background_C.MAP_TILE_COUNT_WIDTH; x++) {
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
      for (let x = 0; x < Background_C.MAP_TILE_COUNT_WIDTH; x++) {
        (this.html5Sprites_R as Html5Sprites_C).drowSprite(this.Map_2d[y][x].type, this.Map_2d[y][x].index,
          x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile,
          this.Map_2d[y][x].widthTile, this.Map_2d[y][x].heightTile);
        (this.html5Canvas_R as Html5Canvas_C).drawText(this.Map_2d[y][x].char, //Ground.Map_2d[y][x].number
          x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile, Html5Canvas_C.ITALIC_15PT_ARIAL,
          Html5Canvas_C.GREEN, 1);
        (this.html5Canvas_R as Html5Canvas_C).drawRect(x * this.Map_2d[y][x].widthTile, y * this.Map_2d[y][x].heightTile,
          this.Map_2d[y][x].widthTile, this.Map_2d[y][x].heightTile, 1, Html5Canvas_C.BLUE, 0);
      }
    }
  }
  //=============================================================================
  //=============================================================================
  loadMapFromScripts(): void {
    let pozChar = 0;
    for (let y = 0; y < this.Map_2d.length; y++) {
      for (let x = 0; x < Background_C.MAP_TILE_COUNT_WIDTH; x++) {
        this.Map_2d[y][x].setCharTypeIndex(Background_C.savedGround[pozChar], Html5Sprites_C.GROUNDS);
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

    let char: string = numToCharA[num];

    return char;
  }
  //=============================================================================
  //=============================================================================
  charToNum(char: string): number {

    let map = new Map();

    map.set('0', 0); map.set('1', 1); map.set('2', 2); map.set('3', 3); map.set('4', 4);
    map.set('5', 5); map.set('6', 6); map.set('7', 7); map.set('8', 8); map.set('9', 9);

    map.set('a', 10); map.set('b', 11); map.set('c', 12);
    map.set('d', 13); map.set('e', 14); map.set('f', 15);

    let charToNum: number = map.get(char);
    return charToNum;
    
    
    // это тоже объект, только поля в виде строк. На самом деле они всегда строки только неявно заданные
    // let charToNumS = {
    //   '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6,
    //   '7': 7, '8': 8, '9': 9,
    //   'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15
    // };
    // ts не понимает, что это не массив, а доступ к объекту.
    // Поэтому переписал через мапу.
    // let num: number = charToNumS[char];
    //return num;

  }
  //=============================================================================
}; //

export { Background_C };
if (global_R.print_module_start_finish) console.log('background.js -> module finish');