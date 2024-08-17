// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -24.02m.2024-18.03m.2024-13.04m.2024-
// 
/*
 НАЗНАЧЕНИЕ
 
 Заполняем двумерный массив HTML5_SpritesImmortal.sprites. Это набор объектов class Tile_for_load_Image_C
 В нем ссылки на картинки, символ картинки, название картинки.
 четыре типа картинок - приключения, земля, предметы, монстры

 Также готовим два типа вспомогательных массивов -карт
 HTML5_SpritesImmortal.GroundsMapChars - карта по символу выдает порядковый номер в массиве HTML5_SpritesImmortal.sprites
 HTML5_SpritesImmortal.GroundsMapString - карта по символу выдает название картинки.
 есть три карты для разных слоев земли, предметов, монстров

 Пример использования:
 HTML5_SpritesImmortal.sprites[_type, _index].Image;
 _type = HTML5_SpritesImmortal.GROUNDS , _index = HTML5_SpritesImmortal.GroundsMapChars.get(HTML5_SpritesImmortal.GROUND_FLOOR)

*/

import { global_R } from '../../global/global.js';

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

}; //class Sprite_I

let Sprite_I_C_isOk = "OK"; //

export { Sprite_Imm_C, Sprite_I_C_isOk };

if (global_R.print_module_start_finish) console.log('sprite_i_c.js -> module finish');