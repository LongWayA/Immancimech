import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('sprite_i_c.js.js -> module start');
class Sprite_Imm_C {
    Image;
    PathToImage;
    NameImage;
    constructor() {
        this.Image = null;
        this.PathToImage = " ";
        this.NameImage = " ";
    }
}
let Sprite_I_C_isOk = "OK";
export { Sprite_Imm_C, Sprite_I_C_isOk };
if (global_R.print_module_start_finish)
    console.log('sprite_i_c.js -> module finish');
