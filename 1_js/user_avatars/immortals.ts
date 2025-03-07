/** 
 * @author AnBr75
 * @copyright Copyright (c) 2024, AnBr75 and/or its affiliates. All rights reserved.
 * @version created 24.02m.2024
 */

let Copyright_AnBr75 = 2024;
 
/**
* НАЗНАЧЕНИЕ
*/

import { global_R } from '../1_index/global.js';

if (global_R.print_module_start_finish) console.log('immortals.js -> module start');

import { Html5Canvas_C } from '../2_graphics_2d/html5_canvas/html5_canvas.js';
import { Html5Sprites_C } from '../2_graphics_2d/html5_sprites/html5_sprites.js';
import { Immortal_C } from './immortal_c.js';
import { Background_C } from '../7_local/background/background.js';


class Immortals_C {

    html5Canvas_R:  Html5Canvas_C | null = null;
    html5Sprites_R: Html5Sprites_C | null = null;

    public NAME: string = "Immortals_C";

    public List = new Array(3);

    //=============================================================================
    constructor() {
    }
    //=============================================================================

    //=============================================================================
    iniM(html5Canvas_R: Html5Canvas_C, html5Sprites_R: Html5Sprites_C): void {
       // console.log(" Immortals_C-> iniM() ");
        /*
            for(let i = 0; i < this.List.length; i++ ){
              this.List[i]= new Immortal();
        
               console.log(" this.ini-> i= " +  i );
             };
        */
        //_point_left, _point_top, _image_width, _image_height, _point_view_radius, _point_view_angle

        let type = Html5Sprites_C.CREATURES;
        let index = Html5Sprites_C.CREATURES_MINOTAUR;
        let index2 = Html5Sprites_C.CREATURES_DRAGON;

        //console.log(" this.ini-> new Immortal_C ");
        this.List[1] = new Immortal_C(1, type, index, 450, 150, 50, 50, 100, 100, 0, 2);//4
        this.List[2] = new Immortal_C(2, type, index2, 200, 250, 50, 50, 100, 100, 0, 1);//1

        this.html5Canvas_R = html5Canvas_R;// 
        this.html5Sprites_R = html5Sprites_R; 

        this.List[1].iniM();
        this.List[2].iniM();       
    }
    //=============================================================================

    //=============================================================================
    getImmortal(num: number): void {
        return this.List[num];
    }
    //============================================================================
    //=============================================================================
    update(ground: Background_C): void {


        this.List[2].pointViewAngle = this.List[2].pointViewAngle + (Math.PI / 2) / 20;

        // if (this.List[1].imageLeft < 3) {
        //     this.List[1].directionMovement = 2;
        // }

        // if (this.List[1].imageLeft > html5Canvas_R.width_OUT - this.List[1].imageWidth) {
        //     this.List[1].directionMovement = 4;
        // }

        // if (this.List[2].imageTop < 3) {
        //     this.List[2].directionMovement = 3;
        // }

        // if (this.List[2].imageTop > html5Canvas_R.height_OUT - this.List[2].imageHeight) {
        //     this.List[2].directionMovement = 1;
        // }

        this.List[1].run(ground);
        this.List[2].run(ground);

    }
    //=============================================================================
    //=============================================================================
    drow(): void {

        // html5Sprites_R.drowSprite(html5Sprites_R.GROUNDS,
        //     html5Sprites_R.GROUND_FLOOR, 10, 200);



        // html5Sprites_R.drowSprite(this.List[1].type, this.List[1].index,
        //     this.List[1].imageLeft, this.List[1].imageTop);
        // html5Sprites_R.drowSprite(this.List[2].type, this.List[2].index,
        //     this.List[2].imageLeft, this.List[2].imageTop);

        // console.log("this.drow -> this.List[1].imageHeight = " + this.List[1].imageHeight);
        // console.log("this.drow -> this.List[1].imageWidth = " + this.List[1].imageWidth);

        for (let i = 1; i < this.List.length; i++) {

            // console.log("this.drow -> this.List["+ i +"].type = " + this.List[i].type);
            // console.log("this.drow -> this.List["+ i +"].index = " + this.List[i].index);
            // console.log("this.drow -> this.List["+ i +"].imageLeft = " + this.List[i].imageLeft);
            // console.log("this.drow -> this.List["+ i +"].imageTop = " + this.List[i].imageTop);

            (this.html5Sprites_R as Html5Sprites_C).drowSprite(this.List[i].type, this.List[i].index,
                this.List[i].imageLeft, this.List[i].imageTop);

            // if (this.html5Sprites_R != null){ 
            //     this.html5Sprites_R.drowSprite(this.List[i].type, this.List[i].index,this.List[i].imageLeft, this.List[i].imageTop);   
            // }


            (this.html5Canvas_R as Html5Canvas_C).drawRect(this.List[i].imageLeft, this.List[i].imageTop,
                this.List[i].imageWidth, this.List[i].imageHeight, Html5Canvas_C.LINE_WIDTH_1,
                Html5Canvas_C.BLUE, 0);

            (this.html5Canvas_R as Html5Canvas_C).drawText("point_angle = " + this.List[i].point_view_angle,
                this.List[i].imageLeft, this.List[i].imageTop - 70, Html5Canvas_C.ITALIC_15PT_ARIAL,
                Html5Canvas_C.BLUE, 1);

            (this.html5Canvas_R as Html5Canvas_C).drawText("x = " + this.List[i].imageLeft,
                this.List[i].imageLeft, this.List[i].imageTop - 40, Html5Canvas_C.ITALIC_15PT_ARIAL,
                Html5Canvas_C.BLUE, 1);

            (this.html5Canvas_R as Html5Canvas_C).drawText("y = " + this.List[i].imageTop,
                this.List[i].imageLeft + 80, this.List[i].imageTop - 40, Html5Canvas_C.ITALIC_15PT_ARIAL,
                Html5Canvas_C.BLUE, 1);

            (this.html5Canvas_R as Html5Canvas_C).drawText((this.html5Sprites_R as Html5Sprites_C).html5SpritesCollection_R.getSpriteString(this.List[i].type,
                this.List[i].index),
                this.List[i].imageLeft, this.List[i].imageTop - 15, Html5Canvas_C.ITALIC_15PT_ARIAL,
                Html5Canvas_C.BLUE, 1);

            (this.html5Canvas_R as Html5Canvas_C).drawCreaturesCircle(this.List[i].pointLeft, this.List[i].pointTop,
                this.List[i].pointViewRadius, this.List[i].pointViewAngle, Html5Canvas_C.LINE_WIDTH_1,
                Html5Canvas_C.RED);
            // console.log("this.drow -> this.List[i].point_top = " + this.List[i].point_top);
        }
        //html5Canvas_R..drawSmile();
    } //drow () : void{
    //=============================================================================
} //Immortals

export { Immortals_C };
if (global_R.print_module_start_finish) console.log('immortals.js -> module finish');
