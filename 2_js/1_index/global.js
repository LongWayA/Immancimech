let Copyright_AnBr75 = 2024;
let print_module_start_finish = false;
if (print_module_start_finish)
    console.log('global.js -> module start');
class Global_C {
    static NAME = "Global_C";
    isOk = "";
    test_count = 1;
    print_module_start_finish = print_module_start_finish;
    isTestLoading = false;
    constructor() {
    }
    iniM() {
    }
    startM() {
    }
    testLoading(nameScript) {
        if (this.isTestLoading) {
            console.log(this.test_count + ' Script ' + nameScript + ' ok');
            this.test_count = this.test_count + 1;
        }
    }
}
let global_R = new Global_C();
global_R.iniM();
export { global_R, Global_C };
if (print_module_start_finish)
    console.log('global.js -> module finish');
global_R.isOk = "OK";
