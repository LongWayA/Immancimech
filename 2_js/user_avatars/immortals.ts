// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -4.09.2023-
// -24.02m.2024-
/*
 НАЗНАЧЕНИЕ


*/

import { global_R } from '../global/global.js';

if (global_R.print_module_start_finish) console.log('immortals.js -> module start');

import { html5Canvas_R, Html5Canvas_C } from '../render/html5_canvas/6_html5_canvas_h.js';
import { html5Sprites_R, Html5Sprites_C } from '../render/html5_sprites/html5_sprites.js';
import { Immortal_C } from '../user_avatars/immortal_c.js';


class Immortals_C {
    NAME: string = "immortals_R";
    isOk: string = "";

    // Внешние ссылки
    out_html5Sprites_R: Html5Sprites_C = html5Sprites_R;
    out_html5Canvas_R:  Html5Canvas_C = html5Canvas_R;

    List: any[] = new Array(3);

    //=============================================================================
    constructor() {
    };
    //=============================================================================

    //=============================================================================
    iniM(): void {
        /*
            for(let i = 0; i < this.List.length; i++ ){
              this.List[i]= new Immortal();
        
               console.log(" this.ini-> i= " +  i );
             };
        */
        //_point_left, _point_top, _image_width, _image_height, _point_view_radius, _point_view_angle

        let type = this.out_html5Sprites_R.CREATURES;
        let index = this.out_html5Sprites_R.CREATURES_MINOTAUR;
        let index2 = this.out_html5Sprites_R.CREATURES_DRAGON;

        //console.log(" this.ini-> new Immortal_C ");
        this.List[1] = new Immortal_C(1, type, index, 450, 150, 50, 50, 100, 100, 0, 2);//4
        this.List[2] = new Immortal_C(2, type, index2, 200, 250, 50, 50, 100, 100, 0, 1);//1
    };
    //=============================================================================
    //=============================================================================
    startM(): void {
    };
    //=============================================================================
    //=============================================================================
    getImmortal(num: number): void {
        return this.List[num];
    };
    //============================================================================
    //=============================================================================
    update(ground: any): void {


        this.List[2].pointViewAngle = this.List[2].pointViewAngle + (Math.PI / 2) / 20;

        // if (this.List[1].imageLeft < 3) {
        //     this.List[1].directionMovement = 2;
        // }

        // if (this.List[1].imageLeft > this.out_html5Canvas_R.width_OUT - this.List[1].imageWidth) {
        //     this.List[1].directionMovement = 4;
        // }

        // if (this.List[2].imageTop < 3) {
        //     this.List[2].directionMovement = 3;
        // }

        // if (this.List[2].imageTop > this.out_html5Canvas_R.height_OUT - this.List[2].imageHeight) {
        //     this.List[2].directionMovement = 1;
        // }

        this.List[1].run(ground);
        this.List[2].run(ground);

    };
    //=============================================================================
    //=============================================================================
    drow(): void {

        // this.out_html5Sprites_R.drowSprite(this.out_html5Sprites_R.GROUNDS,
        //     this.out_html5Sprites_R.GROUND_FLOOR, 10, 200);



        // this.out_html5Sprites_R.drowSprite(this.List[1].type, this.List[1].index,
        //     this.List[1].imageLeft, this.List[1].imageTop);
        // this.out_html5Sprites_R.drowSprite(this.List[2].type, this.List[2].index,
        //     this.List[2].imageLeft, this.List[2].imageTop);

        // console.log("this.drow -> this.List[1].imageHeight = " + this.List[1].imageHeight);
        // console.log("this.drow -> this.List[1].imageWidth = " + this.List[1].imageWidth);

        for (let i = 1; i < this.List.length; i++) {

            // console.log("this.drow -> this.List["+ i +"].type = " + this.List[i].type);
            // console.log("this.drow -> this.List["+ i +"].index = " + this.List[i].index);
            // console.log("this.drow -> this.List["+ i +"].imageLeft = " + this.List[i].imageLeft);
            // console.log("this.drow -> this.List["+ i +"].imageTop = " + this.List[i].imageTop);

            this.out_html5Sprites_R.drowSprite(this.List[i].type, this.List[i].index,
                this.List[i].imageLeft, this.List[i].imageTop);


            this.out_html5Canvas_R.drawRect(this.List[i].imageLeft, this.List[i].imageTop,
                this.List[i].imageWidth, this.List[i].imageHeight, this.out_html5Canvas_R.LINE_WIDTH_1,
                this.out_html5Canvas_R.BLUE, 0);

            this.out_html5Canvas_R.drawText("point_angle = " + this.List[i].point_view_angle,
                this.List[i].imageLeft, this.List[i].imageTop - 70, this.out_html5Canvas_R.ITALIC_15PT_ARIAL,
                this.out_html5Canvas_R.BLUE, 1);

            this.out_html5Canvas_R.drawText("x = " + this.List[i].imageLeft,
                this.List[i].imageLeft, this.List[i].imageTop - 40, this.out_html5Canvas_R.ITALIC_15PT_ARIAL,
                this.out_html5Canvas_R.BLUE, 1);

            this.out_html5Canvas_R.drawText("y = " + this.List[i].imageTop,
                this.List[i].imageLeft + 80, this.List[i].imageTop - 40, this.out_html5Canvas_R.ITALIC_15PT_ARIAL,
                this.out_html5Canvas_R.BLUE, 1);

            this.out_html5Canvas_R.drawText(this.out_html5Sprites_R.out_html5SpritesCollection_R.getSpriteString(this.List[i].type,
                this.List[i].index),
                this.List[i].imageLeft, this.List[i].imageTop - 15, this.out_html5Canvas_R.ITALIC_15PT_ARIAL,
                this.out_html5Canvas_R.BLUE, 1);

            this.out_html5Canvas_R.drawCreaturesCircle(this.List[i].pointLeft, this.List[i].pointTop,
                this.List[i].pointViewRadius, this.List[i].pointViewAngle, this.out_html5Canvas_R.LINE_WIDTH_1,
                this.out_html5Canvas_R.RED);
            // console.log("this.drow -> this.List[i].point_top = " + this.List[i].point_top);
        }


        //this.out_html5Canvas_R..drawSmile();
    }; //drow () : void{
    //=============================================================================
}; //Immortals

let immortals_R = new Immortals_C();

immortals_R.iniM();
//Global.testLoading('immortals_R.js');

export { immortals_R, Immortals_C };

if (global_R.print_module_start_finish) console.log('immortals.js -> module finish');

immortals_R.isOk = "OK"; //