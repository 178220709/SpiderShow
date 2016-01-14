'use strict'

let _ = require('lodash');

String.prototype.format = function () {
    var args = arguments;
    var reg = /\{(\d+)}/g;
    return this.replace(reg, function (g0, g1) {
        return args[+g1];
    });
};

Array.prototype.chain = function () {
    return _.chain(this)
};


exports.api = function (url){

    return "/api/"+url // maybe need a prefix
};


