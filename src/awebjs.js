/*
awebjs.js

AwebJS Entry Point.
Copyright (c) Copy & Entertainmasters 2021
Some components are provided by Entertainmasters.
All Rights Reserved.
*/

import { countgrapth } from "./comps/countgraph.js"

export default class AWebJS {
    constructor(){}

    /**
     * 
     * @param {number} speed 
     * @param {string} elem 
     */
     numberGraph(speed, elem) { countgrapth(speed, elem) }
}

class AWebJSError extends Error {
    /**
     * 
     * @param {string} msg 
     */
    constructor(msg){
        super(msg);
        this.name = "AwebJS-Error"
    }
}
