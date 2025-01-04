import { global_R } from '../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('immortal_c.js -> module start');
class Immortal_C {
    number;
    type;
    index;
    pointLeft;
    pointTop;
    pointTargetRadius;
    pointViewRadius;
    pointViewAngle;
    directionMovement;
    velocity;
    imageLeft;
    imageTop;
    imageWidth;
    imageHeight;
    directionMovementAngle;
    constructor(number, type, index, imageLeft, imageTop, imageWidth, imageHeight, pointViewRadius, pointViewAngle, directionMovement, velocity) {
        this.number = number;
        this.type = type;
        this.index = index;
        this.imageLeft = imageLeft;
        this.imageTop = imageTop;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.pointLeft = this.imageLeft + (this.imageWidth / 2);
        this.pointTop = this.imageTop + (this.imageHeight / 2);
        this.pointViewRadius = pointViewRadius;
        this.pointViewAngle = pointViewAngle;
        this.pointTargetRadius = (this.imageHeight / 2);
        this.directionMovement = directionMovement;
        this.velocity = velocity;
        this.directionMovementAngle = [0, 3 * Math.PI / 2, 0, Math.PI / 2, Math.PI];
    }
    runSet(directionMovement) {
        this.directionMovement = directionMovement;
        this.pointViewAngle = this.directionMovementAngle[this.directionMovement];
    }
    runUp(ground) {
        if ((ground.isMoove(this.imageLeft, this.imageTop - this.velocity) == true)
            && (this.imageLeft % this.imageWidth == 0)) {
            this.pointTop = this.pointTop - ground.TILE_HEIGHT;
            this.imageTop = this.pointTop - (this.imageHeight / 2);
        }
    }
    runDown(ground) {
        if ((ground.isMoove(this.imageLeft, this.imageTop + this.imageHeight) == true)
            && (this.imageLeft % this.imageWidth == 0)) {
            this.pointTop = this.pointTop + ground.TILE_HEIGHT;
            this.imageTop = this.pointTop - (this.imageHeight / 2);
        }
    }
    runLeft(ground) {
        if ((ground.isMoove(this.imageLeft - this.velocity, this.imageTop) == true)
            && (this.imageTop % this.imageHeight == 0)) {
            this.pointLeft = this.pointLeft - ground.TILE_WIDTH;
            this.imageLeft = this.pointLeft - (this.imageWidth / 2);
        }
    }
    runRight(ground) {
        if ((ground.isMoove(this.imageLeft + this.imageWidth, this.imageTop) == true)
            && (this.imageTop % this.imageHeight == 0)) {
            this.pointLeft = this.pointLeft + ground.TILE_WIDTH;
            this.imageLeft = this.pointLeft - (this.imageWidth / 2);
        }
    }
    run(ground) {
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
}
let Immortal_C_isOk = "OK";
export { Immortal_C, Immortal_C_isOk };
if (global_R.print_module_start_finish)
    console.log('immortal_c.js -> module finish');
