import { global_R } from '../../global.js';
if (global_R.print_module_start_finish)
    console.log('items.js -> module start');
class Items_C {
    NAME = "imps_R";
    isOk = "";
    iniM() {
    }
    startM() {
    }
    update() {
    }
    drow() {
    }
}
let items_R = new Items_C();
items_R.iniM();
export { items_R, Items_C };
if (global_R.print_module_start_finish)
    console.log('items.js -> module finish');
items_R.isOk = "OK";
