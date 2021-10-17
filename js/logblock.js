var logblock_text = '';
var logblock_div = null;

function printlog(msg) {
    msg = moment().format('h:mm:ss') + ': ' + msg;
    console.log(msg);
    if (!logblock_div) {
        logblock_div = document.getElementsByClassName("logblock");
        if (!logblock_div) {
            console.error('*** ERROR: logblock div not found');
        } else {
            logblock_div = logblock_div[0];
        }
    }
    logblock_text += msg + '<br>';
    logblock_div.innerHTML = logblock_text;
}