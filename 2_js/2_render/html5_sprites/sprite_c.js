import { global_R } from '../../global.js';
if (global_R.print_module_start_finish)
    console.log('sprite_c.js -> module start');
class Sprite_С {
    Image;
    PathToImage;
    NameImage;
    constructor() {
        this.Image = null;
        this.PathToImage = " ";
        this.NameImage = " ";
    }
}
let Sprite_С_isOk = "OK";
export { Sprite_С, Sprite_С_isOk };
if (global_R.print_module_start_finish)
    console.log('sprite_c.js -> module finish');
