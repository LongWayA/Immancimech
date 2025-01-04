import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('2_html5_canvas_text.js -> module start');
class Html5CanvasText_C {
    static NAME = "html5CanvasText_R";
    isOk = "";
    idCanvas = null;
    contextCanvas = null;
    static WHITE = 'white';
    static BLACK = 'black';
    static RED = 'red';
    static GREEN = 'green';
    static BLUE = 'blue';
    static ITALIC_20PX_SANS_SERIF = 'italic 20px sans-serif';
    static ITALIC_15PT_ARIAL = 'italic 15pt Arial';
    static ITALIC_30PT_ARIAL = 'italic 30pt Arial';
    static BOLD_30PX_SANS_SERIF = 'bold 30px sans-serif';
    static LINE_WIDTH_1 = 1;
    static LINE_WIDTH_2 = 2;
    static LINE_WIDTH_3 = 3;
    static LINE_WIDTH_4 = 4;
    load = 0;
    constructor() {
    }
    iniM() {
    }
    startM(idCanvas, contextCanvas) {
        this.idCanvas = idCanvas;
        this.contextCanvas = contextCanvas;
        this.set_fillStyle('#0000ff');
        this.set_strokeStyle('#0000ff');
        this.set_lineWidth(Html5CanvasText_C.LINE_WIDTH_1);
        this.set_font(Html5CanvasText_C.ITALIC_15PT_ARIAL);
    }
    set_fillStyle(_color) {
        this.contextCanvas.fillStyle = _color;
    }
    get_fillStyle() {
        return this.contextCanvas.fillStyle;
    }
    set_strokeStyle(_color) {
        this.contextCanvas.strokeStyle = _color;
    }
    set_lineWidth(_lineWidth) {
        this.contextCanvas.lineWidth = _lineWidth;
    }
    set_font(_font) {
        this.contextCanvas.font = _font;
    }
    get_font() {
        return this.contextCanvas.font;
    }
    set_textBaseline(_textBaseline) {
        this.contextCanvas.textBaseline = _textBaseline;
    }
    fillText(_text, _left, _top) {
        this.contextCanvas.fillText(_text, _left, _top);
    }
    strokeText(_text, _left, _top) {
        this.contextCanvas.strokeText(_text, _left, _top);
    }
    setColor(color) {
        let style = '#ffffff';
        switch (color) {
            case Html5CanvasText_C.WHITE:
                style = '#ffffff';
                break;
            case Html5CanvasText_C.BLACK:
                style = '#000000';
                break;
            case Html5CanvasText_C.RED:
                style = '#ff0000';
                break;
            case Html5CanvasText_C.GREEN:
                style = '#008000';
                break;
            case Html5CanvasText_C.BLUE:
                style = '#0000ff';
                break;
        }
        this.set_fillStyle(style);
        this.set_strokeStyle(style);
    }
    setFont(font) {
        this.set_textBaseline('top');
        switch (font) {
            case Html5CanvasText_C.ITALIC_20PX_SANS_SERIF:
                this.set_font(font);
                break;
            case Html5CanvasText_C.ITALIC_30PT_ARIAL:
                this.set_font(font);
                break;
            case Html5CanvasText_C.BOLD_30PX_SANS_SERIF:
                this.set_font(font);
                break;
        }
    }
    drawText(text, left, top, font, color, fillYes) {
        let style_r = this.get_fillStyle();
        let font_r = this.get_font();
        this.setColor(color);
        this.setFont(font);
        if (fillYes == 1) {
            this.fillText(text, left, top);
        }
        else {
            this.strokeText(text, left, top);
        }
        this.set_fillStyle(style_r);
        this.set_strokeStyle(style_r);
        this.set_font(font_r);
    }
}
let html5CanvasText_R = new Html5CanvasText_C();
html5CanvasText_R.iniM();
export { html5CanvasText_R, Html5CanvasText_C };
if (global_R.print_module_start_finish)
    console.log('2_html5_canvas_text.js -> module finish');
html5CanvasText_R.isOk = "OK";
