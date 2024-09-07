// @ts-check
/**
 * @module tile_for_background_c
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-07.07m.2024-
/**
* НАЗНАЧЕНИЕ
*/
import { global_R } from '../../global/global.js';
if (global_R.print_module_start_finish)
    console.log('tile_for_background_c.js -> module start');
// можно кодировать карту при записи продвинутой системой типа 16 ричной
// 0 до 9 и латинские буквы от A до F. Буквы A, B, C, D, E, F=15
/**
 * Description placeholder
 *
 * @class TileForBackground_C
 * @typedef {TileForBackground_C}
 */
class TileForBackground_C {
    /**
     * Description placeholder
     *
     * @private
     * @type {*}
     */
    charToIndex;
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    char;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    number;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    type;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    index;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    heightTile;
    /**
     * Description placeholder
     *
     * @public
     * @type {number}
     */
    widthTile;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    immortals;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    creatures;
    /**
     * Description placeholder
     *
     * @private
     * @type {number}
     */
    items;
    /**
     * Creates an instance of TileForBackground_C.
     *
     * @constructor
     * @param {string} char
     * @param {number} number
     * @param {number} widthTile
     * @param {number} heightTile
     * @param {number} type
     */
    constructor(char, number, widthTile, heightTile, type) {
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
    /**
     * Description placeholder
     *
     * @param {string} char
     * @param {number} type
     */
    setCharTypeIndex(char, type) {
        this.char = char;
        this.type = type; //
        this.index = this.charToIndex[this.char]; //
        // console.log('class Tile_for_Map_2d -> char = ' + this.char
        //  + ' type = ' + this.type + ' index =' + this.index);
    }
}
//Global.testLoading('Ground.js');
/**
 * Description placeholder
 *
 * @type {string}
 */
let TileForBackground_isOk = "OK"; //
export { TileForBackground_C, TileForBackground_isOk };
if (global_R.print_module_start_finish)
    console.log('tile_for_background_c.js -> module finish');
