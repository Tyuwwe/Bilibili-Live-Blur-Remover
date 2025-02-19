// ==UserScript==
// @name         隐藏B站直播虚化遮罩
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  动态修改页面样式表以隐藏虚化遮罩层
// @author       Tyuwwe
// @match        *://live.bilibili.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    Array.from(document.styleSheets).forEach(sheet => {
        try {
            sheet.insertRule('.web-player-module-area-mask { backdrop-filter: blur(0px) !important; }', sheet.cssRules.length);
        } catch (e) {
            console.log(e)
        }
    });
})();
