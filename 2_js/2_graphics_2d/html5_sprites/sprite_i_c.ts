/** 
 * 2_render/html5_sprites
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
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

import { global_R } from '../../1_index/global.js';

if (global_R.print_module_start_finish) console.log('sprite_i_c.js.js -> module start');

class Sprite_Imm_C {

    public Image: HTMLImageElement | HTMLCanvasElement | null; // содержит картинку 

    public PathToImage: string; //содержит путь по которому была загружена картинка

    public NameImage: string; //содержит название картинки

    constructor() {
        //
        this.Image = null;
        this.PathToImage = " ";
        this.NameImage = " ";
    } //constructor() {

} //class Sprite_I

let Sprite_I_C_isOk = "OK"; //

export { Sprite_Imm_C, Sprite_I_C_isOk };

if (global_R.print_module_start_finish) console.log('sprite_i_c.js -> module finish');