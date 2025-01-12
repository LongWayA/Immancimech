let Copyright_AnBr75 = 2024;
import { global_R } from '../../1_index/global.js';
if (global_R.print_module_start_finish)
    console.log('keyboard.js -> module start');
let userInputKeyboardEvent_R = {
    NAME: "userInputKeyboardEvent_R",
    isOk: "",
    KEY_LEFT: "KeyA",
    KEY_RIGHT: "KeyD",
    KEY_UP: "KeyW",
    KEY_DOWN: "KeyS",
    KEY_RUN: "KeyQ",
    isKeyDown: 0,
    eventCode: "_",
    eventCodeOld: "_",
    eventCodeOneDown: 0,
    eventKey: "_",
    command: "_",
    iniM() {
        window.addEventListener("keydown", userInputKeyboardEvent_R.keyDownE);
        window.addEventListener("keyup", userInputKeyboardEvent_R.keyUpE);
        userInputKeyboardEvent_R.eventCode = "_";
        userInputKeyboardEvent_R.eventCodeOld = "_";
        userInputKeyboardEvent_R.eventKey = "_";
        userInputKeyboardEvent_R.eventCodeOneDown = 0;
        userInputKeyboardEvent_R.isKeyDown = 0;
        ;
    },
    startM() {
    },
    keyDownE(event) {
        if (userInputKeyboardEvent_R.isKeyDown == 0) {
            userInputKeyboardEvent_R.isKeyDown = 1;
            userInputKeyboardEvent_R.eventCodeOld = userInputKeyboardEvent_R.eventCode;
            userInputKeyboardEvent_R.eventCode = event.code;
            userInputKeyboardEvent_R.eventKey = event.key;
            userInputKeyboardEvent_R.eventCodeOneDown = 1;
        }
    },
    keyUpE(event) {
        if (userInputKeyboardEvent_R.eventCodeOneDown == 1) {
            userInputKeyboardEvent_R.eventCodeOneDown = 0;
        }
    },
};
userInputKeyboardEvent_R.iniM();
export { userInputKeyboardEvent_R };
if (global_R.print_module_start_finish)
    console.log('keyboard.js -> module finish');
userInputKeyboardEvent_R.isOk = "OK";
