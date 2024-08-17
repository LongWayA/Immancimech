// Copyright (c) 2024, Brenkman Andrey and/or its affiliates. All rights reserved.
// Last modified -24.02m.2024-
// 
/*
 НАЗНАЧЕНИЕ


*/
import { global_R } from '../global/global.js';
if (global_R.print_module_start_finish)
    console.log('immortal_c.js -> module start');
class Immortal_C {
    number; // номер существа в списке
    // для отрисовки картинки существа
    type; // тип картинки
    index; // порядковый номер картинки 
    // центральная точка картинки существа на экране
    pointLeft; // позиция центра слева
    pointTop; // позиция центра сверху
    pointTargetRadius; //    
    pointViewRadius; //
    pointViewAngle; //
    //  point_attack_radius; //
    //  point_attack_angle; //
    //
    directionMovement;
    velocity;
    // левый верхний угол и размеры квадратика картинки на экране
    imageLeft; // 
    imageTop; //
    imageWidth; //
    imageHeight; //
    directionMovementAngle;
    // constructor(_number, _type, _index, _point_left, _point_top, _image_width, _image_height,
    //     _point_view_radius, _point_view_angle, _directionMovement, _velocity) {
    // Immortals.List[1] = new Immortal_C(1, type, index, 450, 150, 50, 50, 100, 100, 0, 2);//4
    constructor(number, type, index, imageLeft, imageTop, imageWidth, imageHeight, pointViewRadius, pointViewAngle, directionMovement, velocity) {
        this.number = number;
        this.type = type;
        this.index = index;
        this.imageLeft = imageLeft; //
        this.imageTop = imageTop; //
        this.imageWidth = imageWidth; //
        this.imageHeight = imageHeight; //
        this.pointLeft = this.imageLeft + (this.imageWidth / 2); //
        this.pointTop = this.imageTop + (this.imageHeight / 2); //
        //
        //       this.pointLeft = _point_left; //
        //       this.pointTop = _point_top; //
        //       this.imageLeft = this.pointLeft - (this.imageWidth / 2); //
        //       this.imageTop = this.pointTop - (this.imageHeight / 2); //
        this.pointViewRadius = pointViewRadius; //
        this.pointViewAngle = pointViewAngle; //
        this.pointTargetRadius = (this.imageHeight / 2); //
        this.directionMovement = directionMovement;
        this.velocity = velocity;
        this.directionMovementAngle = [0, 3 * Math.PI / 2, 0, Math.PI / 2, Math.PI]; //Math.PI
        //    console.log(" class Immortal-> constructor this.number = " +  this.number );
        //    console.log(" class Immortal-> constructor this.type = " +  this.type );
        //    console.log(" class Immortal-> constructor this.index = " +  this.index );
        //    console.log(" class Immortal-> constructor this.imageLeft = " +  this.imageLeft );
        //    console.log(" class Immortal-> constructor this.imageTop = " +  this.imageTop );
        //    console.log(" class Immortal-> constructor this.imageWidth = " +  this.imageWidth );
        //    console.log(" class Immortal-> constructor this.imageHeight = " +  this.imageHeight );
        //    console.log(" class Immortal-> constructor this.pointLeft = " +  this.pointLeft );
        //    console.log(" class Immortal-> constructor this.pointTop = " +  this.pointTop );
        //    console.log(" class Immortal-> constructor this.pointViewRadius = " +  this.pointViewRadius );
        //    console.log(" class Immortal-> constructor this.pointViewAngle = " +  this.pointViewAngle );
        //    console.log(" class Immortal-> constructor this.pointTargetRadius = " +  this.pointTargetRadius );
        //    console.log(" class Immortal-> constructor this.directionMovement = " +  this.directionMovement );
    }
    ; //constructor() {
    // 0-стоим, 1-вверх, 2-движение вправо, 3-вниз, 4-влево
    runSet(directionMovement) {
        this.directionMovement = directionMovement;
        this.pointViewAngle = this.directionMovementAngle[this.directionMovement];
    }
    ;
    runUp(ground) {
        //  console.log(" class Immortal-> runUp this.imageLeft = " +  this.imageLeft );
        //  console.log(" class Immortal-> runUp this.imageTop = " +  this.imageTop );
        if ((ground.isMoove(this.imageLeft, this.imageTop - this.velocity) == true)
            && (this.imageLeft % this.imageWidth == 0)) { // округление до наибольшего целого)
            //    console.log(" class Immortal-> runUp ");
            //this.pointTop = this.pointTop - this.velocity; // позиция центра слева
            this.pointTop = this.pointTop - ground.TILE_HEIGHT; // позиция центра слева
            this.imageTop = this.pointTop - (this.imageHeight / 2); //
        }
    }
    ;
    runDown(ground) {
        //    console.log(" class Immortal-> runDown this.imageLeft = " +  this.imageLeft );
        //    console.log(" class Immortal-> runDown this.imageTop = " +  this.imageTop );
        if ((ground.isMoove(this.imageLeft, this.imageTop + this.imageHeight) == true)
            && (this.imageLeft % this.imageWidth == 0)) { // округление до наибольшего целого)
            //      console.log(" class Immortal-> runDown ");
            //this.pointTop = this.pointTop + this.velocity; // позиция центра слева
            this.pointTop = this.pointTop + ground.TILE_HEIGHT; // позиция центра слева
            this.imageTop = this.pointTop - (this.imageHeight / 2); //
        }
    }
    ;
    runLeft(ground) {
        //  console.log(" class Immortal-> runLeft this.imageLeft = " +  this.imageLeft );
        //  console.log(" class Immortal-> runLeft this.imageTop = " +  this.imageTop );
        if ((ground.isMoove(this.imageLeft - this.velocity, this.imageTop) == true)
            && (this.imageTop % this.imageHeight == 0)) { // округление до наибольшего целого)
            //   console.log(" class Immortal-> runLeft ");
            //this.pointLeft = this.pointLeft - this.velocity; // позиция центра слева
            this.pointLeft = this.pointLeft - ground.TILE_WIDTH; // позиция центра слева
            this.imageLeft = this.pointLeft - (this.imageWidth / 2); //
        }
    }
    ;
    runRight(ground) {
        //  console.log(" class Immortal-> runRight this.imageLeft = " +  this.imageLeft );
        //  console.log(" class Immortal-> runRight this.imageTop = " +  this.imageTop );
        if ((ground.isMoove(this.imageLeft + this.imageWidth, this.imageTop) == true)
            && (this.imageTop % this.imageHeight == 0)) { // округление до наибольшего целого)
            //   console.log(" class Immortal-> runRight ");
            //this.pointLeft = this.pointLeft + this.velocity; // позиция центра слева
            this.pointLeft = this.pointLeft + ground.TILE_WIDTH; // позиция центра слева
            this.imageLeft = this.pointLeft - (this.imageWidth / 2); //
        }
    }
    ;
    run(ground) {
        // console.log(" Immortals.run()-> number = " +  this.number + " directionMovement =" + this.directionMovement );
        // 0-стоим, 1-вверх, 2-движение вправо, 3-вниз, 4-влево
        if (this.directionMovement == 1) {
            this.runUp(ground);
        }
        else if (this.directionMovement == 2) {
            this.runRight(ground);
        }
        else if (this.directionMovement == 3) {
            this.runDown(ground);
        }
        else if (this.directionMovement == 4) {
            this.runLeft(ground);
        }
        else if (this.directionMovement == 0) {
        }
        this.directionMovement = 0;
    }
    print() {
    }
    ;
}
; //class Immortal
let Immortal_C_isOk = "OK"; //
export { Immortal_C, Immortal_C_isOk };
if (global_R.print_module_start_finish)
    console.log('immortal_c.js -> module finish');
