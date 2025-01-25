let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('frames.js -> module start');
class Frames_C {
    html5Canvas_R = null;
    static NAME = "frames_R";
    isOk = "";
    editorFrame = {
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
    };
    mapFrame = {
        tile_SIZE_WIDTH: 50,
        tile_SIZE_HEIGHT: 50,
        HEIGHT_PX: 500,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
    };
    tilesPanelFrame = {
        tile_SIZE_WIDTH: 50,
        tile_SIZE_HEIGHT: 50,
        HEIGHT_PX: 190,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
        Ground_X0: 0,
        Ground_Y0: 0,
        Ground_Y_Max: 0,
        Item_X0: 0,
        Item_Y0: 0,
        Item_Y_Max: 0,
        Monster_X0: 0,
        Monster_Y0: 0,
        Monster_Y_Max: 0,
    };
    printFrame = {
        height_px: 0,
        x0: 0,
        y0: 0,
        width: 0,
        height: 0,
        X_Max: 0,
        Y_Max: 0,
    };
    constructor() {
    }
    iniM() { }
    iniFrame() {
        this.editorFrame.x0 = 0;
        this.editorFrame.y0 = 0;
        this.editorFrame.width = this.html5Canvas_R.widthCanvas;
        this.editorFrame.height = this.html5Canvas_R.heightCanvas;
        this.editorFrame.X_Max = this.editorFrame.x0 + this.editorFrame.width;
        this.editorFrame.Y_Max = this.editorFrame.y0 + this.editorFrame.height;
        this.mapFrame.x0 = this.editorFrame.x0;
        this.mapFrame.y0 = this.editorFrame.y0;
        this.mapFrame.width = this.editorFrame.width;
        this.mapFrame.height = this.mapFrame.HEIGHT_PX;
        if (this.mapFrame.height > this.editorFrame.height) {
            this.mapFrame.height = this.editorFrame.height;
        }
        this.mapFrame.X_Max = this.mapFrame.x0 + this.mapFrame.width;
        this.mapFrame.Y_Max = this.mapFrame.y0 + this.mapFrame.height;
        this.tilesPanelFrame.x0 = this.mapFrame.x0;
        this.tilesPanelFrame.y0 = this.mapFrame.Y_Max;
        this.tilesPanelFrame.width = this.editorFrame.width;
        this.tilesPanelFrame.height = this.tilesPanelFrame.HEIGHT_PX;
        if (this.tilesPanelFrame.height > this.editorFrame.height) {
            this.tilesPanelFrame.height = this.editorFrame.height;
        }
        this.tilesPanelFrame.X_Max = this.tilesPanelFrame.x0 + this.tilesPanelFrame.width;
        this.tilesPanelFrame.Y_Max = this.tilesPanelFrame.y0 + this.tilesPanelFrame.height;
        this.tilesPanelFrame.Ground_X0 = this.tilesPanelFrame.x0;
        this.tilesPanelFrame.Ground_Y0 = this.tilesPanelFrame.y0 + 10;
        this.tilesPanelFrame.Ground_Y_Max = this.tilesPanelFrame.Ground_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT;
        this.tilesPanelFrame.Item_X0 = this.tilesPanelFrame.x0;
        this.tilesPanelFrame.Item_Y0 = this.tilesPanelFrame.Ground_Y_Max + 10;
        this.tilesPanelFrame.Item_Y_Max = this.tilesPanelFrame.Item_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT;
        this.tilesPanelFrame.Monster_X0 = this.tilesPanelFrame.x0;
        this.tilesPanelFrame.Monster_Y0 = this.tilesPanelFrame.Item_Y_Max + 10;
        this.tilesPanelFrame.Monster_Y_Max = this.tilesPanelFrame.Monster_Y0 + this.tilesPanelFrame.tile_SIZE_HEIGHT;
        this.printFrame.height_px = this.editorFrame.Y_Max - this.tilesPanelFrame.Y_Max;
        this.printFrame.x0 = this.tilesPanelFrame.x0;
        this.printFrame.y0 = this.tilesPanelFrame.Y_Max;
        this.printFrame.width = this.editorFrame.width;
        this.printFrame.height = this.printFrame.height_px;
        this.printFrame.X_Max = this.printFrame.x0 + this.printFrame.width;
        this.printFrame.Y_Max = this.printFrame.y0 + this.printFrame.height;
    }
    startM(html5Canvas_R) {
        this.html5Canvas_R = html5Canvas_R;
        this.iniFrame();
    }
    drowEditorFrame() {
        this.html5Canvas_R.drawRect(this.editorFrame.x0, this.editorFrame.y0, this.editorFrame.width, this.editorFrame.height, 2, 'blue', 0);
    }
    drowMapFrame() {
        this.html5Canvas_R.drawRect(this.mapFrame.x0, this.mapFrame.y0, this.mapFrame.width, this.mapFrame.height, 2, 'blue', 0);
    }
    drowTilesPanelFrame() {
        this.html5Canvas_R.drawRect(this.tilesPanelFrame.x0, this.tilesPanelFrame.y0, this.tilesPanelFrame.width, this.tilesPanelFrame.height, 2, 'blue', 0);
    }
    drowPrintFrameFrame() {
        this.html5Canvas_R.drawRect(this.printFrame.x0, this.printFrame.y0, this.printFrame.width, this.printFrame.height, 2, 'blue', 0);
    }
}
export { Frames_C };
if (global_R.print_module_start_finish)
    console.log('frames.js -> module finish');
