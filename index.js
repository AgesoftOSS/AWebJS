/*
awebjs.js

AwebJS Entry Point.
Copyright (c) Copy & Entertainmasters 2021
Some components are provided by Entertainmasters.
All Rights Reserved.
*/

const { countgrapth } = require("./src/comps/countgraph.js");
const AWebJSDOM = require("./src/awebjs-dom/awebjsdom.js");
const Crypto = require("./src/experimental/crypto.js");

class AWebJS {
    constructor() {}

    numberGraph(speed, elem) {
        countgrapth(speed, elem);
    }

    dom = new AWebJSDOM();
    crypto = new Crypto();
}

class AWebJSError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "AwebJS-Error";
    }
}

const _TestPrint = () => {
    console.log("This module works.")
}

module.exports = { AWebJS, AWebJSError, _TestPrint };