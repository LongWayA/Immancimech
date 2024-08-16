// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -02.08.2022-02.01.2023-18.02.2023-1.04m.2023-
// -24.02m.2024-18.03m.2024-
/*
 НАЗНАЧЕНИЕ
 
 Заполняем двумерный массив HTML5_SpritesCollection.sprites. Это набор объектов class Tile_for_load_Image_C
 В нем ссылки на картинки, символ картинки, название картинки.
 четыре типа картинок - приключения, земля, предметы, монстры

 Также готовим два типа вспомогательных массивов -карт
 HTML5_SpritesCollection.GroundsMapChars - карта по символу выдает порядковый номер в массиве HTML5_SpritesCollection.sprites
 HTML5_SpritesCollection.GroundsMapString - карта по символу выдает название картинки.
 есть три карты для разных слоев земли, предметов, монстров

 Пример использования:
 HTML5_SpritesCollection.sprites[_type, _index].Image;
 _type = HTML5_SpritesCollection.GROUNDS , _index = HTML5_SpritesCollection.GroundsMapChars.get(HTML5_SpritesCollection.GROUND_FLOOR)

*/

import { global_R } from '../../global/global.js';

if (global_R.print_module_start_finish) console.log('sprite_c.js -> module start');


class Sprite_С {
    Image: HTMLImageElement | HTMLCanvasElement | null; // содержит картинку 
    PathToImage: string; //содержит путь по которому была загружена картинка
    NameImage: string; //содержит название картинки
    constructor() {
        //
        this.Image = null;
        this.PathToImage = " ";
        this.NameImage = " ";
    } //constructor() {


}; //class Sprite_С


//Global.testLoading('HTML5_SpritesCollection.js');

let Sprite_С_isOk = "OK"; //

export { Sprite_С, Sprite_С_isOk };

if (global_R.print_module_start_finish) console.log('sprite_c.js -> module finish');
