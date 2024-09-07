// @ts-check
/**
 * @module sprite_i_c
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-18.03m.2024-13.04m.2024-
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
    console.log('sprite_i_c.js.js -> module start');
/**
 * Description placeholder
 *
 * @class Sprite_Imm_C
 * @typedef {Sprite_Imm_C}
 */
class Sprite_Imm_C {
    /**
     * Description placeholder
     *
     * @public
     * @type {(HTMLImageElement | HTMLCanvasElement | null)}
     */
    Image; // содержит картинку 
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    PathToImage; //содержит путь по которому была загружена картинка
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    NameImage; //содержит название картинки
    /**
     * Creates an instance of Sprite_Imm_C.
     *
     * @constructor
     */
    constructor() {
        //
        this.Image = null;
        this.PathToImage = " ";
        this.NameImage = " ";
    } //constructor() {
} //class Sprite_I
/**
 * Description placeholder
 *
 * @type {string}
 */
let Sprite_I_C_isOk = "OK"; //
export { Sprite_Imm_C, Sprite_I_C_isOk };
if (global_R.print_module_start_finish)
    console.log('sprite_i_c.js -> module finish');
