/** 
 * 2_render/html5_sprites
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -02.08.2022-02.01.2023-18.02.2023-1.04m.2023-
 * @version Last_modified -24.02m.2024-18.03m.2024-
 */
let Copyright_AnBr75 = 2024;

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

if (global_R.print_module_start_finish) console.log('html5_sprites_immortal.js -> module start');

import { html5Canvas_R } from '../html5_canvas/html5_canvas.js';
import { Html5Canvas_C } from '../html5_canvas/html5_canvas.js';

import { Sprite_Imm_C } from './sprite_i_c.js';

//
class Html5SpritesImmortal_C {


    public NAME: string = "html5SpritesImmortal_R";
    public isOk: string = " ";
    public out_html5Canvas_R: Html5Canvas_C = html5Canvas_R;
    public PATH_TO_IMAGES: string = "4_resource/images/immortals_img/";

    public MAX_COUNT: number = 3;

    //
    public sprites: any[] = new Array(1);

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    // ini
    //============================================================================
    
    iniM(): void {

        this.sprites = new Array(this.MAX_COUNT),

            //инициализируем массивы с картинками
            this.iniSprite(this.PATH_TO_IMAGES);

        this.iniSpriteString();
    }
    //============================================================================

    //=============================================================================
    
    startM(): void {
    }
    //=============================================================================

    // get tile Sprite
    // this.getSprite(this.GROUNDS,2);
    //============================================================================
    getSprite(index: number): HTMLImageElement | HTMLCanvasElement {
        //
        return this.sprites[index].Image;
    }
    //===========================================================================

    // get Sprite String
    // this.getTileString(this.GROUNDS,3);
    //============================================================================
    getSpriteString(index: number): string {
        return this.sprites[index].NameImage;
    }
    //============================================================================

    // get Height Sprite
    //============================================================================
    getHeightSprite(index: number): number {
        return this.sprites[index].Image.height;
    }
    //============================================================================

    // get Width Sprite
    //============================================================================
    getWidthSprite(index: number): number {
        return this.sprites[index].Image.width;
    }
    //============================================================================

    // get Left Sprite
    //============================================================================
    getLeftSprite(index: number, middle: number): number {
        let width = this.sprites[index].Image.width;
        let left = middle - width / 2;
        return left;
    }
    //============================================================================

    // ini Image
    //============================================================================
    iniSprite(path: string): void {
        /*
        класс
        Sprite_С содержит поля:
        Image содержит картинку для
        Path      содержит путь по которому была загружена картинка
        NameImage    содержит название картинки
        */

        let length = this.sprites.length;
        //console.log(" _type = " + _type + " _path = " + _path);
        //console.log(" length = " + length);
        // https://developer.mozilla.org/ru/docs/Web/API/HTMLImageElement :
        // "The Image() constructor, taking two optional unsigned long, 
        // the width and the height of the resource, creates an instance 
        // of HTMLImageElement not inserted in a DOM tree."
        for (let i = 0; i < length; i++) {
            this.sprites[i] = new Sprite_Imm_C();
            //this.sprites[_type][i].Image= new Image();//Конструктор HTML5
            this.sprites[i].Image = document.createElement('img'); // Используем HTMLImageElement
            this.sprites[i].Image.src = path + i + ".png";
            this.sprites[i].PathToImage = path + i + ".png";
            this.sprites[i].NameImage = "Image str (картинка №) = " + i;
            //console.log(" OK " + _path + i + ".png");
        }
    }
    //============================================================================

    //инициализируем массивы с картинками
    //============================================================================
    iniSpriteString(): void {
        //
        this.sprites[0].NameImage = "nothing(пустая область)"; // пустая область
        this.sprites[1].NameImage = "ghost(привидение)"; //1_monster_ghost     привидение
        this.sprites[2].NameImage = "dragon(дракон)"; //2_monster_dragon    дракон
    }
    //============================================================================

    //=============================================================================
    //
    drowSprite(index: number, imageLeft: number, imageTop: number,
        imageWidth: number = 0, imageHeight: number = 0): void {

        let image = this.sprites[index].Image;

        // (_image, _left, _top, _width, _height, _mirror)
        this.out_html5Canvas_R.drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
    }
    //=============================================================================


} //SpritesMap_2D

let html5SpritesImmortal_R = new Html5SpritesImmortal_C();

html5SpritesImmortal_R.iniM();

export { html5SpritesImmortal_R,Html5SpritesImmortal_C };

if (global_R.print_module_start_finish) console.log('html5_sprites_immortal.js -> module finish');

html5SpritesImmortal_R.isOk = "OK"; //