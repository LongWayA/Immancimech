let Copyright_AnBr75 = 2021;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('4_html5_canvas_image.js -> module start');
class Html5CanvasImage_C {
    static NAME = "Html5CanvasImage_C";
    idCanvas = null;
    contextCanvas = null;
    static DRAW_MIRROR = true;
    constructor() {
    }
    iniM(idCanvas, contextCanvas) {
        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
    }
    drawImage_(image, left, top) {
        this.contextCanvas.drawImage(image, left, top);
    }
    drawImage_w_h(image, left, top, width, height) {
        this.contextCanvas.drawImage(image, left, top, width, height);
    }
    scale() {
        this.contextCanvas.scale(-1, 1);
    }
    drawImage(image, left, top, width, height, mirror) {
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        if (mirror === void 0) {
            mirror = !Html5CanvasImage_C.DRAW_MIRROR;
        }
        if ((width == 0) || (height == 0)) {
            this.drawImage_(image, left, top);
        }
        else {
            if (mirror == Html5CanvasImage_C.DRAW_MIRROR) {
                left = left + width;
                left = -left;
                this.scale();
            }
            this.drawImage_w_h(image, left, top, width, height);
            if (mirror == Html5CanvasImage_C.DRAW_MIRROR) {
                this.scale();
            }
        }
    }
}
export { Html5CanvasImage_C };
if (global_R.print_module_start_finish)
    console.log('4_html5_canvas_image.js -> module finish');
