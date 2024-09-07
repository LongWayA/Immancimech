// @ts-check
/** 
 * @module sprite_c
 * @author ABr75
 * @copyright Copyright (c) 2025, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -24.02m.2024-18.03m.2024-
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

if (global_R.print_module_start_finish) console.log('sprite_c.js -> module start');


/**
 * Description placeholder
 *
 * @class Sprite_С
 */
class Sprite_С {

    /**
     * Description placeholder
     *
     * @public
     * @type {(HTMLImageElement | HTMLCanvasElement | null)}
     */
    public Image: HTMLImageElement | HTMLCanvasElement | null; // содержит картинку 
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public PathToImage: string; //содержит путь по которому была загружена картинка
    /**
     * Description placeholder
     *
     * @public
     * @type {string}
     */
    public NameImage: string; //содержит название картинки

    /**
     * Creates an instance of Sprite_С.
     *
     * @constructor
     */
    constructor() {
        //
        this.Image = null;
        this.PathToImage = " ";
        this.NameImage = " ";
    } //constructor() {


} //class Sprite_С

/**
 * Description placeholder
 *
 * @type {string}
 */
let Sprite_С_isOk = "OK"; //

export { Sprite_С, Sprite_С_isOk };

if (global_R.print_module_start_finish) console.log('sprite_c.js -> module finish');
