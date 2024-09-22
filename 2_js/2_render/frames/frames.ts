// @ts-check
/** 
 * @module frames
 * @author ABr75
 * @copyright Copyright (c) 2024, ABr75 and/or its affiliates. All rights reserved.
 * @version Last_modified -15.08.2022-19.02.2023-18.03.2023-26.03.2023
 * @version Last_modified -24.02m.2024-
 */

/**
* НАЗНАЧЕНИЕ
* Определяем рамки областей вывода на экран
*/

import { global_R } from '../../1_loop/global.js';

if (global_R.print_module_start_finish) console.log('frames.js -> module start');

import { html5Canvas_R } from '../html5_canvas/html5_canvas_h.js';


class Frames_C {
 
    public NAME: string = "frames_R";
    public isOk: string = "";

    // Внешние ссылки
    //-

    // рамки
    // Общая рамка экрана вывода графики
    public editorFrame = {
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0, // максимальная координата по вертикали. Вправо вниз
    }
    // Область вывода карты
    private mapFrame = {
        tile_SIZE_WIDTH: 50,
        tile_SIZE_HEIGHT: 50,
        HEIGHT_PX: 500,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
    }
    // Область вывода выбора элементов карты   
    private tilesPanelFrame = {
        tile_SIZE_WIDTH: 50,
        tile_SIZE_HEIGHT: 50,
        HEIGHT_PX: 190,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
        //---------------------------
        Ground_X0: 0,
        Ground_Y0: 0,
        Ground_Y_Max: 0,
        Item_X0: 0,
        Item_Y0: 0,
        Item_Y_Max: 0,
        Monster_X0: 0,
        Monster_Y0: 0,
        Monster_Y_Max: 0,
    }
    // Область печати сообщений редактора
    private printFrame = {
        height_px: 0,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
    }

   //=============================================================================
   constructor() {
   }
   //============================================================================= 

    //=============================================================================
    iniM(): void {
        //------------------------------------------------------------------------
        // Общая рамка экрана вывода графики>>>>>>>>>>>>>>>>>>>>>>
        this.editorFrame.x0 = 0; // нулевая координата по горизонтали общего окна. т.е. самая левая точка.
        this.editorFrame.y0 = 0; // нулевая координата по вертикали общего окна. т.е. самая верхняя точка. Влево вверх.
        this.editorFrame.width = html5Canvas_R.width_OUT; // ширина окна берется из канвы сайта
        this.editorFrame.height = html5Canvas_R.height_OUT; // высота окна берется из канвы сайта
        this.editorFrame.X_Max = this.editorFrame.x0 + this.editorFrame.width; // максимальная координата по горизонтали.
        this.editorFrame.Y_Max = this.editorFrame.y0 + this.editorFrame.height; // максимальная координата по вертикали. Вправо вниз
        // console.log('DDME_this.js: this.editorFrame.x0 = ' + this.editorFrame.x0);
        // console.log('DDME_this.js: this.editorFrame.x0 = ' + this.editorFrame.x0);
        // console.log('DDME_this.js: this.editorFrame.width = ' + this.editorFrame.width);
        // console.log('DDME_this.js: this.editorFrame.height = ' + this.editorFrame.height);
        // console.log('DDME_this.js: this.editorFrame.X_Max = ' + this.editorFrame.X_Max);
        // console.log('DDME_this.js: this.editorFrame.Y_Max = ' + this.editorFrame.Y_Max);
        // Общая рамка экрана вывода графики<<<<<<<<<<<<<<<<<<<<<<
        //------------------------------------------------------------------------
        //------------------------------------------------------------------------
        // Область вывода карты>>>>>>>>>>>>>>>>>>>>>>
        this.mapFrame.x0 = this.editorFrame.x0;
        this.mapFrame.y0 = this.editorFrame.y0;
        //this.mapFrame.x0     = 100;
        //this.mapFrame.y0     = 50;
        this.mapFrame.width = this.editorFrame.width;
        this.mapFrame.height = this.mapFrame.HEIGHT_PX;
        if (this.mapFrame.height > this.editorFrame.height) { // не может быть больше чем this.editorFrame.height
            this.mapFrame.height = this.editorFrame.height;
        }
        this.mapFrame.X_Max = this.mapFrame.x0 + this.mapFrame.width;
        this.mapFrame.Y_Max = this.mapFrame.y0 + this.mapFrame.height;
        // console.log('DDME_this.js: this.mapFrame.tile_SIZE_WIDTH = ' + this.mapFrame.tile_SIZE_WIDTH);
        // console.log('DDME_this.js: this.mapFrame.tile_SIZE_HEIGHT = ' + this.mapFrame.tile_SIZE_HEIGHT);
        // console.log('DDME_this.js: this.mapFrame.x0 = ' + this.mapFrame.x0);
        // console.log('DDME_this.js: this.mapFrame.x0 = ' + this.mapFrame.x0);
        // console.log('DDME_this.js: this.mapFrame.width = ' + this.mapFrame.width);
        // console.log('DDME_this.js: this.mapFrame.height = ' + this.mapFrame.height);
        // console.log('DDME_this.js: this.mapFrame.X_Max = ' + this.mapFrame.X_Max);
        // console.log('DDME_this.js: this.mapFrame.Y_Max = ' + this.mapFrame.Y_Max);
        // Область вывода карты<<<<<<<<<<<<<<<<<<<<<<
        //------------------------------------------------------------------------
        //------------------------------------------------------------------------
        // Область вывода выбора элементов карты>>>>>>>>>>>>>>>>>>>>>>
        this.tilesPanelFrame.x0 = this.mapFrame.x0;
        this.tilesPanelFrame.y0 = this.mapFrame.Y_Max;
        this.tilesPanelFrame.width = this.editorFrame.width;
        this.tilesPanelFrame.height = this.tilesPanelFrame.HEIGHT_PX;
        if (this.tilesPanelFrame.height > this.editorFrame.height) { // не может быть больше чем this.editorFrame.height
            this.tilesPanelFrame.height = this.editorFrame.height;
        }
        this.tilesPanelFrame.X_Max = this.tilesPanelFrame.x0 + this.tilesPanelFrame.width;
        this.tilesPanelFrame.Y_Max = this.tilesPanelFrame.y0 + this.tilesPanelFrame.height;
        //---------------------------
        this.tilesPanelFrame.Ground_X0 = this.tilesPanelFrame.x0; // задаем горизонтальное расстояние для тайлов слоя граунд
        this.tilesPanelFrame.Ground_Y0 = this.tilesPanelFrame.y0 + 10; // задаем вертикальное расстояние для тайлов слоя граунд
        this.tilesPanelFrame.Ground_Y_Max = this.tilesPanelFrame.Ground_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT; // задаем вертикальное расстояние для тайлов слоя граунд
        this.tilesPanelFrame.Item_X0 = this.tilesPanelFrame.x0;
        this.tilesPanelFrame.Item_Y0 = this.tilesPanelFrame.Ground_Y_Max + 10;
        this.tilesPanelFrame.Item_Y_Max = this.tilesPanelFrame.Item_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT;
        this.tilesPanelFrame.Monster_X0 = this.tilesPanelFrame.x0;
        this.tilesPanelFrame.Monster_Y0 = this.tilesPanelFrame.Item_Y_Max + 10;
        this.tilesPanelFrame.Monster_Y_Max = this.tilesPanelFrame.Monster_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT;
        // Область вывода выбора элементов карты<<<<<<<<<<<<<<<<<<<<<<
        //------------------------------------------------------------------------
        //------------------------------------------------------------------------
        // Область печати сообщений редактора>>>>>>>>>>>>>>>>>>>>>>
        this.printFrame.height_px = this.editorFrame.Y_Max - this.tilesPanelFrame.Y_Max;
        this.printFrame.x0 = this.tilesPanelFrame.x0;
        this.printFrame.y0 = this.tilesPanelFrame.Y_Max;
        this.printFrame.width = this.editorFrame.width;
        this.printFrame.height = this.printFrame.height_px;
        this.printFrame.X_Max = this.printFrame.x0 + this.printFrame.width;
        this.printFrame.Y_Max = this.printFrame.y0 + this.printFrame.height;
        // Область печати сообщений редактора<<<<<<<<<<<<<<<<<<<<<<
        //------------------------------------------------------------------------
    }
    //=============================================================================
    //=============================================================================
    startM(): void {
    }
    //=============================================================================
    //=============================================================================
    // editorFrame
    drowEditorFrame(): void {
        html5Canvas_R.drawRect(this.editorFrame.x0, this.editorFrame.y0, this.editorFrame.width,
            this.editorFrame.height, 2, 'blue', 0);
    }
    //=============================================================================
    //=============================================================================
    // MapFrame
    drowMapFrame(): void {
        html5Canvas_R.drawRect(this.mapFrame.x0, this.mapFrame.y0, this.mapFrame.width,
            this.mapFrame.height, 2, 'blue', 0);
    }
    //=============================================================================  
    //=============================================================================
    // TilesPanelFrame
    drowTilesPanelFrame(): void {
        html5Canvas_R.drawRect(this.tilesPanelFrame.x0, this.tilesPanelFrame.y0,
            this.tilesPanelFrame.width, this.tilesPanelFrame.height, 2, 'blue', 0);
    }
    //=============================================================================  
    //=============================================================================
    // PrintFrame
    drowPrintFrameFrame(): void {
        html5Canvas_R.drawRect(this.printFrame.x0, this.printFrame.y0, this.printFrame.width,
            this.printFrame.height, 2, 'blue', 0);
    }
    //=============================================================================  
} //Frames

let frames_R = new Frames_C();

frames_R.iniM();

export { frames_R, Frames_C };

if (global_R.print_module_start_finish) console.log('frames.js -> module finish');

frames_R.isOk = "OK"; //
