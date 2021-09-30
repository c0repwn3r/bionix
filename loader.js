/*
 *      __                           ____    
 *  __ /  \ _ _ ___ _ ____ __ ___ _ |__ /_ _ 
 * / _| () | '_/ -_) '_ \ V  V / ' \ |_ \ '_|
 * \__|\__/|_| \___| .__/\_/\_/|_||_|___/_|  
 *                   |_|                       
 *
 * Please do not steal my code, I will just be mad at you. Learn it yourself.
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * 
 * File: loader.js
 * Description: Background scripts and general utilities that bionix uses to inject scripts
 * Owner: gh/c0repwn3r/c0repwn3r
 * Project: bionix
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 */
 
(function (w) {
    w.bionixIsBlacklisted = function (url, s) {
        // check if its a blacklisted url
        if (s) { return false };
        blacklistedUrls = ["https://coresdev.ml/bad.js"];
        if (blacklistedUrls.includes(url)) {
            return true;
        }
        return false;
    }
    w.bionixScanUrlScript = function (url, s) {
        if (s) { return false };
        // malware scanning not implemented
        return false;
    }
    w.bionixInject = function (url, s) {
        // inject script from url
        if (w.bionixIsBlacklisted(url, s)) {
            return false;
        }
        // script isnt on blacklist, run antimalware scan
        if (w.bionixScanUrlScript(url, s)) {
            return false;
        }
        // clear to execute
    }
})(window);
