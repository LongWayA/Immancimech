// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -24.02m.2024-07.07m.2024-
// 
/*
 НАЗНАЧЕНИЕ
     

*/

import { global_R } from '../../global/global.js';

if (global_R.print_module_start_finish) console.log('tile_for_background_c.js -> module start');

// можно кодировать карту при записи продвинутой системой типа 16 ричной
// 0 до 9 и латинские буквы от A до F. Буквы A, B, C, D, E, F=15

class TileForBackground_C {

  private charToIndex: any;
  public char: string;
  private number: number;
  public type: number;
  public index: number;
  public heightTile: number;
  public widthTile: number;
  private immortals: number;
  private creatures: number;
  private items: number;

  constructor(char: string, number: number, widthTile: number,
    heightTile: number, type: number) {

    this.charToIndex = { '1': 4, '2': 3, '3': 5, '4': 7 };
    this.char = char; //  кодировка тайла в виде буквы: 0 - не задано, 1 - конец карты, 
    //2 - пустое пространство, 3 - непроходимый камень, 4 - лестница
    this.number = number; // номер тайла на карте
    // для отрисовки картинки 
    this.type = type; // тип картинки
    this.index = this.charToIndex[this.char]; // порядковый номер картинки
    this.heightTile = heightTile; //а
    this.widthTile = widthTile; //

    // -1 если ничего нет
    this.immortals = -1; // номер аватара игрока в списке аватаров
    this.creatures = -1; // номер существа в списке существ
    this.items = -1; // номер предмета в списке предметов

  } //constructor() {

  setCharTypeIndex(char: string, type: number): void {
    this.char = char;
    this.type = type; //
    this.index = this.charToIndex[this.char]; //
    // console.log('class Tile_for_Map_2d -> char = ' + this.char
    //  + ' type = ' + this.type + ' index =' + this.index);
  }
};

//Global.testLoading('Ground.js');
let TileForBackground_isOk = "OK"; //

export { TileForBackground_C, TileForBackground_isOk };

if (global_R.print_module_start_finish) console.log('tile_for_background_c.js -> module finish');