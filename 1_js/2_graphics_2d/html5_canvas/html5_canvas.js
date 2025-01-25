let Copyright_AnBr75 = 2021;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('6_html5_canvas.js -> module start');
import { Html5CanvasText_C } from './html5_canvas_text.js';
import { Html5CanvasPrimitive_C } from './html5_canvas_primitive.js';
import { Html5CanvasImage_C } from './html5_canvas_image.js';
class Html5Canvas_C {
    html5CanvasText_R = new Html5CanvasText_C();
    html5CanvasPrimitive_R = new Html5CanvasPrimitive_C();
    html5CanvasImage_R = new Html5CanvasImage_C();
    static NAME = "html5Canvas_R";
    isOk = "";
    idCanvas = null;
    contextCanvas = null;
    widthCanvas = 0;
    heightCanvas = 0;
    static WHITE = 'white';
    static BLACK = 'black';
    static RED = 'red';
    static GREEN = 'green';
    static BLUE = 'blue';
    static ITALIC_20PX_SANS_SERIF = Html5CanvasText_C.ITALIC_20PX_SANS_SERIF;
    static ITALIC_15PT_ARIAL = Html5CanvasText_C.ITALIC_15PT_ARIAL;
    static ITALIC_30PT_ARIAL = Html5CanvasText_C.ITALIC_30PT_ARIAL;
    static BOLD_30PX_SANS_SERIF = Html5CanvasText_C.BOLD_30PX_SANS_SERIF;
    static LINE_WIDTH_1 = 1;
    static LINE_WIDTH_2 = 2;
    static LINE_WIDTH_3 = 3;
    static LINE_WIDTH_4 = 4;
    constructor() {
    }
    iniM() {
        this.html5CanvasText_R.iniM();
        this.html5CanvasText_R.isOk = "OK";
        this.html5CanvasPrimitive_R.iniM();
        this.html5CanvasPrimitive_R.isOk = "OK";
        this.html5CanvasImage_R.iniM();
        this.html5CanvasImage_R.isOk = "OK";
    }
    startM(idCanvas, contextCanvas) {
        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
        this.widthCanvas = this.get_widthCanvas();
        this.heightCanvas = this.get_heightCanvas();
        this.html5CanvasText_R.startM(idCanvas, contextCanvas);
        this.html5CanvasPrimitive_R.startM(idCanvas, contextCanvas);
        this.html5CanvasImage_R.startM(idCanvas, contextCanvas);
    }
    get_widthCanvas() {
        return this.idCanvas.width;
    }
    get_heightCanvas() {
        return this.idCanvas.height;
    }
    setColor(color) {
        this.html5CanvasText_R.setColor(color);
    }
    setFont(font) {
        this.html5CanvasText_R.setFont(font);
    }
    drawText(text, left, top, font, color, fillYes) {
        this.html5CanvasText_R.drawText(text, left, top, font, color, fillYes);
    }
    clearRect(left, top, width, height) {
        this.html5CanvasPrimitive_R.clearRect(left, top, width, height);
    }
    drawRect(left, top, width, height, lineWidth, color, fillYes) {
        this.html5CanvasPrimitive_R.drawRect(left, top, width, height, lineWidth, color, fillYes);
    }
    drawCircle(centerX, centerY, radius, sAngle, eAngle, clockwise, lineWidth, color) {
        this.html5CanvasPrimitive_R.drawCircle(centerX, centerY, radius, sAngle, eAngle, clockwise, lineWidth, color);
    }
    drawCreaturesCircle(centerX, centerY, radius, angle, lineWidth, color) {
        this.html5CanvasPrimitive_R.drawCreaturesCircle(centerX, centerY, radius, angle, lineWidth, color);
    }
    drawSmile() {
    }
    drawImage(image, left, top, width, height, mirror) {
        this.html5CanvasImage_R.drawImage(image, left, top, width, height, mirror);
    }
}
export { Html5Canvas_C };
if (global_R.print_module_start_finish)
    console.log('6_html5_canvas.js -> module finish');
