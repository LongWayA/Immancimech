let Copyright_AnBr75 = 2022;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('html5_sprites_immortal.js -> module start');
import { Sprite_Imm_C } from './sprite_i_c.js';
class Html5SpritesImmortal_C {
    NAME = "html5SpritesImmortal_R";
    html5Canvas_R = null;
    PATH_TO_IMAGES = "3_resource/images/immortals_img/";
    MAX_COUNT = 3;
    sprites = new Array(1);
    constructor() {
    }
    iniM(html5Canvas_R) {
        this.sprites = new Array(this.MAX_COUNT),
            this.iniSprite(this.PATH_TO_IMAGES);
        this.iniSpriteString();
        this.html5Canvas_R = html5Canvas_R;
    }
    getSprite(index) {
        return this.sprites[index].Image;
    }
    getSpriteString(index) {
        return this.sprites[index].NameImage;
    }
    getHeightSprite(index) {
        return this.sprites[index].Image.height;
    }
    getWidthSprite(index) {
        return this.sprites[index].Image.width;
    }
    getLeftSprite(index, middle) {
        let width = this.sprites[index].Image.width;
        let left = middle - width / 2;
        return left;
    }
    iniSprite(path) {
        let length = this.sprites.length;
        for (let i = 0; i < length; i++) {
            this.sprites[i] = new Sprite_Imm_C();
            this.sprites[i].Image = document.createElement('img');
            this.sprites[i].Image.src = path + i + ".png";
            this.sprites[i].PathToImage = path + i + ".png";
            this.sprites[i].NameImage = "Image str (картинка №) = " + i;
        }
    }
    iniSpriteString() {
        this.sprites[0].NameImage = "nothing(пустая область)";
        this.sprites[1].NameImage = "ghost(привидение)";
        this.sprites[2].NameImage = "dragon(дракон)";
    }
    drowSprite(index, imageLeft, imageTop, imageWidth = 0, imageHeight = 0) {
        let image = this.sprites[index].Image;
        this.html5Canvas_R.drawImage(image, imageLeft, imageTop, imageWidth, imageHeight, false);
    }
}
export { Html5SpritesImmortal_C };
if (global_R.print_module_start_finish)
    console.log('html5_sprites_immortal.js -> module finish');
